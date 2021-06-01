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

    const response = await fetch(`${process.env.API_URL}/warzone/${gamertag}
        /${platform}`, 
        {
            headers
        }
         );

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