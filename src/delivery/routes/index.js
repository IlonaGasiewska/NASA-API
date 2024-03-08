const express = require("express");
const router = express.Router();

const getDays = require("../../userCase/getDays");
const getData = require("../../userCase/getData");
const fetchData = require("../../repository/apiRepository");

// TODO : Send parms do the key in variables (function?)

// const url = require("../../variables/api").url;

router.get('/meteors/:startDay/:endDay/:key', (req, res) => {

    const sendData = async () => {

        const userParameters = {
            startDay: req.params.startDay,
            endDay: req.params.endDay,
            key: req.params.key
        }
    
        const days = getDays(userParameters.startDay, userParameters.endDay);
        const url  = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${userParameters.startDay}&end_date=${userParameters.endDay}&api_key=${userParameters.key}`;

        try {
            const data =  await fetchData(url);
            res.send(getData(data, days));
        } catch (error) {
            console.log(error.message);
        }
    }

    sendData();
})

module.exports = router;