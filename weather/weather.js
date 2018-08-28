const request = require('request');
const api_key = '47992a5ee0fe2df3e00f8ccdb65f4743'

var getWeather = (latitude,longitude, callback) =>{

  //call to Weather api
  request({
    url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to servers');
    }else if (body.cod !== 200) {
      callback('Unable to forecast');
    }else {
      //var temp = convert(body.main.temp).from('F').to('C');
      callback(undefined,{
        Temperature:body.main.temp
      });
      //console.log(`Today's Temperature in ${results.address} is ${temp} deg celcius`);
    }
  });
}


module.exports = {
  getWeather:getWeather
}
