"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel

require("babel/register")
var backbone = require('backbone')
var Promise = require('es6-promise').Promise
require('whatwg-fetch') 

window.backbone = backbone
window.$ = backbone.$
window._ = require("underscore")

var key = `c91eeae561eca7bb95874e5914fbe4d0`

window.Forecast = backbone.Model.extend({
    defaults: {
        key: key
    },

    validate: function(attrs) {
        if (!attrs.lat || !attrs.lng) return "No lat/lng provided."
    },

    initialize: function(){
        this.on("request", () => {
            console.log('requesting data')
        })
        this.on("sync", () => {
            console.log('request finished')
        })
        this.on("error", (...args) => {
            console.error(args)
        })
    },



    urlRoot: function(){
        return `https://api.forecast.io/forecast/${this.get('key')}/${this.get('lat')},${this.get('lng')}?callback=?`
    }
})

var f = new Forecast({lat:26, lng: -90})

var ForecastView = backbone.View.extend({
    el: '.container',
    id: 'forecast-view',
    template: (forecastJSON) => `<div class="temp">Current Temp<br>
        <p>${forecastJSON.currently.temperature}</p>
    </div>, <div class="current">Current Weather<br>
        <p>${forecastJSON.currently.summary}</p>
    </div>`, 
    // el: '.current'
    // id: 'forecast-view'
    // template: (forecastJSON) => `<div>Current Weather
    //     <p>${forecastJSON.currently.summary}</p>
    // </div>`,
    render: function(data){
        this.el.innerHTML = this.template(data)
    },
    initialize: function(){
        this.listenTo(this.model, "sync", function(m){
            this.render(m.toJSON())
        })
    }
})

window.x = new ForecastView({
    model: f
})

setInterval(() => {
    f.fetch()
}, 5*100000)

f.fetch()