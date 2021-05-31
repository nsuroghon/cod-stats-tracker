const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/:platform/:gamertag', async (req,res) => {
    try {
        const headers = {
            'API_URL': process.env.API_URL,
            'API_HOST': process.env.API_HOST
        }

        const {platform, gamertag} = req.params

        const response = await fetch(`${process.env.API_URL}/profile/${platform}
        /${gamertag}`, {
            headers
        });

    // converting our response to json format
        const data = await response.json;

        res.json();

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
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