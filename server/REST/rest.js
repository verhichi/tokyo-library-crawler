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
  console.log('Request GET /rest/crawl');

  console.log('Searching for keyword:', req.query.search_option.keyword);

  const search_library_obj_array = library_json.filter((library) => req.query.search_option.checked_library.includes(library.key));

  const promise_array = search_library_obj_array.map((library) => {
    return cheerio.fetch(library.url)
      .then((page) => {
        const $ = page.$;

        let search_option = library.fields;

        search_option[library.keywordName] = req.query.search_option.keyword;
        search_option[library.searchTypeEle] = req.query.search_options.search_type == '0' ? library.searchByTitle : library.searchByArtist;

        $(library.formEle).field(search_option);

        return $(library.submitButEle).click();
      })
      .then((page) => {
        const $ = page.$;

        const url_array    = $(library.listUrlEle).toArray().map(ele =>    $(ele).url()  );
        const title_array  = $(library.listTitleEle).toArray().map(ele =>  $(ele).text() );
        const artist_array = $(library.listArtistEle).toArray().map(ele => $(ele).text() );

        const media_array = url_array.map((url, idx) => {
          return {
            library: library.name_en,
            title:   title_array[idx],
            artist:  artist_array[idx],
            link:    url
          };
        });

        resolve(media_array);
      });
  });

  Promise.all(promise_array).then((result_array) => {
    res.json({result: [].concat(...result_array)});
  });

  // const result = [{library: "lib1", title: "title1", link: "www.google.com", artist: "artist1"}, {library: "lib2", title: "title2", link: "www.yahoo.com", artist: "artist2"}];
  // res.json({result});
});


/******************************************************************************
 *                                 Export Module
 ******************************************************************************/
module.exports = router;
