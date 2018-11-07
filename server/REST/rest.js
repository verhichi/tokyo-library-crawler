/******************************************************************************
 *                                 Express Setting
 ******************************************************************************/
const express = require('express'); // import express framework
const router = express.Router();    // create routing object


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
  console.log('Request GET /library');
  res.json({result: library_json});
});


// GET Search Type data
router.get('/search_type', (req, res) => {
  console.log('Request GET /search_type');
  res.json({result: search_type_json});
});
