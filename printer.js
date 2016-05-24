/**
 * Created by Dhruv on 5/23/16.
 */
function printError(error) {

    console.log(error.message);
}

function printMessage(zipcode, weather, temp, wind ) {

    var windMPH = wind;
    var windKM = (wind/0.62137);
    windKM = windKM.toFixed(2);

    var fahr = (temp * 9/5) - 459.67;
    fahr = fahr.toFixed(2);

    var cels = temp - 273.15;
    cels = cels.toFixed(2);

    console.log("Current weather for " + zipcode);
    console.log("Weather: " + weather);
    console.log("Temperature: " + cels + " C" + ' / ' + fahr + " F" );
    console.log("Wind: " + windMPH + " MPH" + ' / ' + windKM + " KMPH");

}

//printMessage(38555, "rainy", 290, 1);

module.exports.message = printMessage;
module.exports.error = printError;


