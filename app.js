/**
 * Created by Dhruv on 5/23/16.
 */

var forecast = require("./weather.js");
var zipcode = process.argv[2];
var country = process.argv[3];

forecast.get(zipcode, country);