const yargs = require('yargs');
const request = require('request');
const api_key = '47992a5ee0fe2df3e00f8ccdb65f4743'
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


var encodedAddress = encodeURIComponent(argv.address);
var geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeURL).then((response) => {

  if (response.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var address = response.data.results[0].formatted_address;
  var weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`;
  console.log(address);
  return axios.get(weatherURL);
}).then((response) => {
  console.log(`Temperature is ${response.data.main.temp}`);
}).catch((error) => {
  if(error.code === 'ENOTFOUND'){
    console.log('Cannot connect to API servers');
  }else {
    console.log(error.message);
  }
});
