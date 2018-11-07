/******************************************************************************
 *                                 Express Setting
 ******************************************************************************/
const express = require('express'); // import express framework
const router = express.Router();    // create routing object


/******************************************************************************
 *                                 Other Packages
 ******************************************************************************/
const cheerio = require('cheerio-httpcli'); // import cheerio-httpcli(used to web crawl)


/******************************************************************************
 *                                 Data Setting
 ******************************************************************************/
const library_json =     require('../data/library.json');     // json file of library information
const search_type_json = require('../data/search_type.json'); // json file of search_type


/******************************************************************************
 *                                 Routes
 ******************************************************************************/

// GET Library data
router.get('/library', (req, res) => {
  console.log('Request GET /rest/library');
  res.json({result: library_json});
});


// GET Search Type data
router.get('/search_type', (req, res) => {
  console.log('Request GET /rest/search_type');
  res.json({result: search_type_json});
});


// GET search result from scraping the library websites
router.get('/crawl', (req, res) => {
  cheerio.reset();
  const library = library_json.find((library) => library.key === req.query.search_option.library_key);

  console.log('Request GET /rest/crawl');
  console.log('Searching for keyword:', req.query.search_option.keyword);
  console.log(`Searching library: ${library.name_en} / ${library.name_jp}`);

  let media_array  = [];

  let next_page_link;
  let search_option = library.fields;

  search_option[library.keywordName] = req.query.search_option.keyword;
  search_option[library.searchTypeEle] = req.query.search_option.search_type == '0' ? library.searchByTitle : library.searchByArtist;

  let land_page = cheerio.fetchSync(library.url);
  var $ = land_page.$;

  $(library.formEle).field(search_option);

  land_page = $(library.submitButEle).clickSync();

  do {
    $ = land_page.$;

    // Get media information
    let url_array =    $(library.listUrlEle).toArray().map(ele =>    $(ele).url()  ) || [];
    let title_array =  $(library.listTitleEle).toArray().map(ele =>  $(ele).text() ) || [];
    let artist_array = $(library.listArtistEle).toArray().map(ele => $(ele).text() ) || [];

    // Create media object containing library name, title, artist, and link to site
    url_array.forEach((url, idx) => {
      media_array.push({
         library: library.name_jp
        ,title:  title_array[idx]
        ,artist: artist_array[idx]
        ,link:   url
      });
    });

    // Get next link for next page
    next_page_link = undefined;
    $(library.pagerEle).find(library.pageLinkEle).toArray().forEach((ele) => {
      if(library.pageLinkTextEle){
        const text = $(ele).find(library.pageLinkTextEle).text().trim();
        if(text === library.pageLinkText) next_page_link = $(ele);
      }else{
        const text = $(ele).text().trim();
        if(text === library.pageLinkText) next_page_link = $(ele);
      }
    });

    //TODO: SO FAR IT STOPS WORKING HERE WHEN THE PAGE VALUE IS UNDEFINED
    if(next_page_link){
      land_page = next_page_link.clickSync();
    }

  }while(next_page_link);

  res.json({result: media_array});
});


/******************************************************************************
 *                                 Export Module
 ******************************************************************************/
module.exports = router;
