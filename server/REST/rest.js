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
  const result = [{library: "lib1", title: "title1", link: "www.google.com", artist: "artist1"}, {library: "lib2", title: "title2", link: "www.yahoo.com", artist: "artist2"}];
  res.json({result});
});


/******************************************************************************
 *                                 Export Module
 ******************************************************************************/
module.exports = router;
