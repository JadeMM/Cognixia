
//Get users from db
const fn = (req, res, connection) => {
    const query = `
        SELECT * FROM user;`;

    connection.query(query,function (err, result, fields) {
        if (err) throw err;

        let dataArray = [];
        for(let i of result) {
            console.log(i.email);
            dataArray.push(i.email);
        }
        res.send(dataArray);
    });
}

module.exports = fn;