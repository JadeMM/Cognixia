const fn = (req, res, connection) => {
    const query = `
        INSERT INTO user (name, email, address) 
        VALUES ("${req.body.name}", "${req.body.email}", "${req.body.address}")`;

    connection.query(query, function(err, result, fields) {
        if (err) {
            res.send(err)
            throw err;
        }
        console.log("1 document inserted, mongo result: " + query);
        res.send(query);
    });
}

module.exports = fn;