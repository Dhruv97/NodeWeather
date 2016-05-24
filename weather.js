/**
 * Created by Dhruv on 5/23/16.
 */

var print = require("./printer.js");

var http = require('http');

//var zipcode = 38555;
//var country = 'US';

function get(zipcode, country) {
    var request = http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',' + country + '&APPID=b8e128014055869ddd6dacba181a9ec7', function (response) {

        var body = "";
        response.on('data', function (chunk) {
            body += chunk;
        });

        response.on('end', function () {

            if (response.statusCode === 200) {

                try {

                    var forecast = JSON.parse(body);
                    print.message(zipcode, forecast.weather[0].description, forecast.main.temp, forecast.wind.speed);

                } catch (error) {

                    print.error(error);

                }
            } else {

                print.error({message: "There was an error getting the weather for " + zipcode + " . (" + response.statusCode + ")"});

            }

        });

        request.on("error", print.error);

    });
}


module.exports.get = get;

