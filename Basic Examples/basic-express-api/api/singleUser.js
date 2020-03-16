const axios = require('axios');

//get single user from api
const fn = (req,res) => {
    axios.get('http://reqres.in/api/users/' + req.params.userid)
        .then((resp) => {
            res.send(resp.data);
        }).catch((err) => {
            res.send(err.message);
        })
    }

module.exports = fn;