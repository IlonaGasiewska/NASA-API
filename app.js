// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const fetch = require('node-fetch');

// const express = require('express');
// const app = express();
// const port = 4000;


// // const key = require("./variables/api.js").key;
// // const url = require("./variables/api.js").url;

// // const isKeyValid = key != "" ? true : false

// // isKeyValid === false && process.exit(1);


   
// app.get('/meteors/:startDay/:endDay/:key', (req, res) => {
//     const userParameters = {
//         startDay: req.params.startDay,
//         endDay: req.params.endDay,
//         key: req.params.key
//     }

//     const days = getDays(userParameters.startDay, userParameters.endDay);
//     const url  = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${userParameters.startDay}&end_date=${userParameters.endDay}&api_key=${userParameters.key}`;

//     fetch(url)
//     .then(respons => respons.json())
//     .then(data => {
//       res.send(getData(data, days));
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
// })
        
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// const getDays = (startDay, endDay) => {
//     const days = [];
//     let currentDate = new Date(startDay);

//     while (currentDate <= new Date(endDay)){
//         days.push(new Date(currentDate).toISOString().substring(0, 10));
//         currentDate.setDate(currentDate.getDate() +1)
//     }
//     return days;
// }

// const getData = (data, days) => {

//     let asteroidsData = [];
//     days.forEach(day => {
//         data.near_earth_objects[day].map(asteroid=> {
//             asteroidsData.push( {
//             id: asteroid.id,
//             name : asteroid.name,
//             diameter: ( asteroid.estimated_diameter.kilometers.estimated_diameter_max - asteroid.estimated_diameter.kilometers.estimated_diameter_min),
//             isPotentiallyHazardousAsteroid: asteroid.is_potentially_hazardous_asteroid,
//             close_approach_date_full: asteroid.close_approach_data[0].close_approach_date_full,
//             relative_velocity: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second
//             })
//         })
//     });

//     return asteroidsData
// }



process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const app = express();
const port = 4000;
const routes = require("./src/delivery/routes/index")

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;


// http://localhost:4000/meteors/2015-02-21/2015-02-23/262o2PcvlfW9FNXzZSqNaW9a0uQ7yUGExY7Sc0