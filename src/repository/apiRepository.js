const fetch = require("node-fetch");


const fetchData = async (url) => {
    try {
        const respons = await fetch(url); 
        return respons.json();
    } catch (error) {
        tconsole.log(error.message);
    }
}

module.exports = fetchData;
