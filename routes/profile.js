const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


router.get('/:gamertag/:platform', async (req,res) => {
    try {
    const headers = {
            'API_KEY': process.env.API_KEY,
            'API_HOST': process.env.API_HOST
        }

    const {platform, gamertag} = req.params

    const response = await fetch(`${process.env.API_URL}/warzone/${gamertag}
        /${platform}`, 
        {
            headers
        }
         );

    // converting our response to json format
        const data = await response.json;

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
});

module.exports = router;