const fn = (req, res, connection) => {
    const queryArray = Object.keys(req.query)
    let where = ''
    queryArray.map((item, index) => {
        // let andstring = '';
        // if(index <= (queryArray.length - 1)) {
        //     let andstring = ' AND ';
        // } 
        const andstring = (index < (queryArray.length - 1)) ? ' AND ' : '';
        where += `${item} = '${req.query[item]}' ${andstring}`;
    })

    // Note that ternary colon up there setting the blank string as default, that's a little
    // tricky
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