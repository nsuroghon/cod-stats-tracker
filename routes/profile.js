const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/:gamertag/:platform', async (req,res) => {
    try {
    const headers = {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': process.env.API_HOST
        }

    const {platform, gamertag} = req.params

    // const response = await fetch(`${process.env.API_URL}/warzone/${gamertag}
    //     /${platform}`, 
    //     {
    //         headers
    //     }
    //      );

    const response = fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fc509d822bmsh92cf9ffa88cf7ecp101677jsnc37a759992c1",
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
        }
    })

    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

    // converting our response to json format
        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return res.status(404).json({
              message: 'Profile Not Found'
            });
          }

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
});

module.exports = router;