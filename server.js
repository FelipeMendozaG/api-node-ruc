const express = require("express");
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
const port = process.env.PORT || 3005;


app.get('/ruc/:number', async function (req, res) {
  let number = req.params["number"];
  if(number){
    var config = {
      method: 'get',
      url: `https://api.apis.net.pe/v1/ruc?numero=${number}`,
      headers: { }
    };
    let response = await axios(config)
    .then(res=>res.data)
    .catch(function (error) {
      console.log(error);
    });
    res.json(response);
  }else{
    res.json({status:'error'});
  }
});
app.get('/dni/:number', async function (req, res) {
  let number = req.params["number"];
  if(number){
    var config = {
      method: 'get',
      url: `https://api.apis.net.pe/v1/dni?numero=${number}`,
      headers: { }
    };
    let response = await axios(config)
    .then(res=>res.data)
    .catch(function (error) {
      console.log(error);
    });
    res.json(response);
  }else{
    res.json({status:'error'});
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`))

