const express = require('express');
const axios = require('axios');
// const router = express.Router();


router.get('/:platform/:gamertag', async (req,res) => {
    console.log(req.params.platform, req.params.gamertag);
    res.send('Hello');
});

// const options = {
//     method: 'GET',
//     url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/UNO',
//     headers: {
//       'x-rapidapi-key': 'fc509d822bmsh92cf9ffa88cf7ecp101677jsnc37a759992c1',
//       'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

module.exports = router;