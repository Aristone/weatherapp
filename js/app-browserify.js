
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

var key = 'c91eeae561eca7bb95874e5914fbe4d0'

var GPS = new Promise((res, rej) => {
    
    navigator.geolocation.getCurrentPosition(
        
        (gpsData) => res({ 
            lat: gpsData.coords.latitude, 
            lon: gpsData.coords.longitude }),
        (error) => rej(error.message)
    )
})
	

GPS.then((ll) => {
    
    var url = `https: api.forecast.io/forecast/${key}/${ll.lat},${ll.lon}?callback=?`
    var x = $.getJSON(url).then((result) => ${key}: ${ll.lat[key]}(result))


   
    // $.getJSON("demo_ajax_json.js", function(result){
    //     $.each(result, function(i, field){
    //         $("div").append(field + " ");


    


    var .lat = `${ll.lat}`
    var .long = `${ll.lon}`
    var current_temp = current_data.apparentTemperature
    var current_weather = 
        

        
    qs('.lat').innerHtml = 
    qs('.long').innerHtml =  
    qs('.temp').innerHtml =
    qs('.weather').innerHtml =



})












