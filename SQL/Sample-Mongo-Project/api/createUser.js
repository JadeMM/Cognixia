//Insert new user into db
const fn = (req, res, db) => {
    const myobj = {
        name: req.body.name,
        email: req.body.email
    };

    db.collection("person").insertOne(myobj, function(err, result) {
        if (err) {
            res.send(err)
            throw err;
        }
        console.log("1 document inserted, mongo result: " + result);
        res.send("1 document inserted, mongo result: " + result);
    });
}

module.exports = fn;