//find multiple user in db
const fn = (req, res, db) => {

    db.collection("person").find({}).toArray(function(err, result) {
        if (err) {
            res.send(err)
            throw err;
        }
        console.log("Documents found, mongo result: " + result);
        res.send(result);
    });
}

module.exports = fn;