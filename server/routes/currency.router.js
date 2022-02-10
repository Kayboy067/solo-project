const express = require('express')
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
        axios({
            method: 'GET',
            url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`,
        })
        .then((apiRes) => {
            res.send(apiRes.data);
            })
            .catch((err) => {
                console.error('Currency req failed', err);
                res.sendStatus(500);
            })
    })
    
    module.exports = router;