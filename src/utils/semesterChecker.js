const config = require('../config');

getCurrentSemester = () => {
    const today = new Date();
    const year = today.getFullYear();
    if (Date.parse(today) >= Date.parse(`07/01/${year}`) && Date.parse(today) <= Date.parse(`12/19/${year}`)) {
        return config.SEM1_URL_PART;
    }
    else {
        return config.SEM2_URL_PART;
    }
}

module.exports = sem => {
    const url =
        (!sem)
            ? getCurrentSemester()
            : sem === '0'
                ? config.SEM1_URL_PART
                : sem === '1'
                    ? config.SEM2_URL_PART
                    : getCurrentSemester();

    return url;
}
