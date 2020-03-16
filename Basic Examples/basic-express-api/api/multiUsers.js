const axios = require('axios');

//retrieve multiple users info from api
const fn = (req,res) => {
    axios.get('http://reqres.in/api/users?page=' + req.params.pagenum)
        .then((resp) => {
            res.send(resp.data.data);
        }).catch((err) => {
            res.send(err.message);
        })
    }

module.exports = fn;