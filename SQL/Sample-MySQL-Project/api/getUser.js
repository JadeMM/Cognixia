
//Get user from db
const fn = (req, res, connection) => {
    const queryArray = Object.keys(req.query)
    let where = ''
    queryArray.map((item, index) => {
        const andstring = (index < (queryArray.length - 1)) ? ' AND ' : '';
        where += `${item} = '${req.query[item]}' ${andstring}`;
    })

    const query = `
        SELECT * FROM user 
        WHERE ${where};`;

    connection.query(query, function(err, data) {
        if (err) {
            res.send(err)
            throw err;
        }
        console.log(`Documents found, mongo result: ${query} + ${data[0].email}` );
        res.send(data[0].email);
    });
}

module.exports = fn;