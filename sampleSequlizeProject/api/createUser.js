/**
 * Query module for create users within the system
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {mysql.connection} connection 
 * 
 * @return ()
 */

const fn = (req, res, model) => {
    //Sequelize syncs the data
    model.create({
        username: req.body.username,
        password: req.body.password
    }).then(dbResp => {
        console.log(dbResp.toJSON());
        res.send(dbResp.toJSON());
    }).catch((err) => {
        if (err) {
            res.send(err)
            throw err;
        }
    });
}

module.exports = fn;