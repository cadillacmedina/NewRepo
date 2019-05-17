const request = require('request');
const argv = require('yargs');
const express = require('express');
var dataFixer = express();
let url = 'http://data.fixer.io/api/convert?access_key=8c82f84a2f5d2a368a98d9201160100b&from=EUR&to=USD&amount=';
dataFixer=request({
    url: url,
    json: true
},(error,Response,body)=>{
    console.log(JSON.stringify(body,undefined,1));

})

/*
request('http://data.fixer.io/api/latest?access_key=8c82f84a2f5d2a368a98d9201160100b', function (error,res,body)
{
    console.log('error:', error);
    console.log('statusCode:', res && res.statusCode);
    console.log('body: ', body);
}
);
*/
module.exports= dataFixer;




