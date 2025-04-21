module.exports = {

    companyCheck: (companyId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) AS total_companies
                FROM companies
            `;

            db.query(sql, function (err, result) {
                resolve(result[0].total_companies);
            });
        })
    }

}