const request = require('request');
const database = require('../services/database');

module.exports = function (app) {

    app.get('/', async (req, res) => {
        let listLimitUrl = req.params.limit;
        console.log(listLimitUrl);

        let latestCompanies = await database.companyCheck();
        res.json(latestCompanies);x
    });

};