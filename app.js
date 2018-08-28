const yargs = require('yargs');
const request = require('request');
var convert = require('convert-units');
const weather = require('./weather/weather');
const geocode = require('./geocode/geocode');
const api_key = '47992a5ee0fe2df3e00f8ccdb65f4743'

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    //console.log('Results',results);
    //console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results.latitude,results.longitude,(error, res) =>{
      if (error) {
        console.log(error);
      }else {
        console.log(JSON.stringify(`Today temperature of ${results.address} is ${res.Temperature}`, undefined, 2));
      }
    });
  }
});
