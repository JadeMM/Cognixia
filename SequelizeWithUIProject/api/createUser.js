/**
 * Query module for create users within the system
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {mysql.connection} connection 
 * 
 * @return ()
 */

const bcrypt = require('bcrypt');

const saltRounds = 10;

const fn = (req, res, model, callback) => {
    bcrypt.hash(req.body.password, saltRounds, (err,hash) => {
        model.create({
            username: req.body.username,
            password: hash,
            email: req.body.email
        }).then(dbResp => {
            console.log(dbResp.toJSON());
            callback(dbResp.toJSON());
        }).catch((err) => {
            if (err) {
                res.send(err)
                throw err;
            }
        });
    });
}

module.exports = fn;