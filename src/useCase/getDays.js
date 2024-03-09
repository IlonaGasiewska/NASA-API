const getDays = (startDay, endDay) => {
    const days = [];
    let currentDate = new Date(startDay);

    while (currentDate <= new Date(endDay)){
        days.push(new Date(currentDate).toISOString().substring(0, 10));
        currentDate.setDate(currentDate.getDate() +1);
    }
    return days;
};

module.exports = getDays;