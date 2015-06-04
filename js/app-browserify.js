"use strict";
// just Node?
// var fetch = require('node-fetch')
// Browserify?
require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
 

 
// function app() {
    // start app
    // new Router()
// }

"use strict";
require("es5-shim")
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')



function qs(selector) {
    return document.querySelector(selector)
}
			
var key = 'c91eeae561eca7bb95874e5914fbe4d0'

var GPS = new Promise((res, rej) => {
    // if gps successful, resolve with coordinates
    // else reject with error
    navigator.geolocation.getCurrentPosition(
        (gpsData) => res({ lat: gpsData.coords.latitude, lon: gpsData.coords.longitude }),
        (error) => rej(error.message)
    )
})

GPS.then((ll) => {
    var url = `https: api.forecast.io/forecast/${key}/${ll.lat},${ll.lon}?callback=?`
    var x = $.getJSON(url).then((r) => <li>${key}: ${ll.lat[key]}</li>(r))


    qs('.lat ul').innerHtml = x
    // qs('.long ul').innerHtml = 

// function b(){

//             var apiKey = 'c91eeae561eca7bb95874e5914fbe4d0';
//             var url = 'https://api.forecast.io/forecast/';
//             var lati = 0;
//             var longi = 0;
//             var data;

//             $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
//               //console.log(data);
//               $('.top').html('and the temperature is: ' + data.currently.temperature);
//             });
//         }
    
})