const getData = (data, days) => {

    let asteroidsData = [];
    days.forEach(day => {
        data.near_earth_objects[day].map(asteroid=> {
            asteroidsData.push( {
            id: asteroid.id,
            name : asteroid.name,
            diameter: ( asteroid.estimated_diameter.kilometers.estimated_diameter_max - asteroid.estimated_diameter.kilometers.estimated_diameter_min),
            isPotentiallyHazardousAsteroid: asteroid.is_potentially_hazardous_asteroid,
            close_approach_date_full: asteroid.close_approach_data[0].close_approach_date_full,
            relative_velocity: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second
            });
        });
    });

    return asteroidsData;
}

module.exports = getData;