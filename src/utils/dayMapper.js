const dayMapper = day => {
    day = day.toLowerCase();
    const mapper ={
        "monday":"วันจันทร์",
        "tuesday":"วันอังคาร",
        "wednesday":"วันพุธ",
        "thursday":"วันพฤหัสบดี",
        "friday":"วันศุกร์",
        "saturday":"วันเสาร์",
        "sunday":"วันอาทิตย์"
    }

    return mapper[day]
}

export default dayMapper