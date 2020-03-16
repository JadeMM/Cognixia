/**
 * Query module for create users within the system
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {mysql.connection} connection 
 * 
 * @return ()
 */
const bcrypt = require('bcrypt');

//check if user exists and if password is correct
const fn = (req, res, model, session, callback) => {
    model.findOne({
        where: 
            {
                username: req.body.username
            } 
    }).then((dbResp) => {
        if (!dbResp) {
            callback('error');
        } else {
            let userResponse = dbResp.toJSON();
            bcrypt.compare(req.body.password, userResponse.password, function(err, result) {
                if (result === true) {
                    session.authenticated = true;
                    callback(userResponse);
                } else {
                    session.authenticated = false;
                    callback('noauth');
                }
            });
        }   
    });
}

module.exports = fn;