var city = "Seattle";
var apiKey = "a5db6018f19e8b611518d1732375d68e";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="  + apiKey;



console.log(queryURL);

 $.ajax({
     url: queryURL,
     method: "GET"
 }).then(function(response){
    var k = response.main.temp;
    var fahrenheitConversion = (k - 273.15)* 1.8000 + 32;
    console.log(response);
    console.log(response.main);
    //temp in Kelvin
    console.log(response.main.temp);
    //temp conversion for Kelvin
    console.log(fahrenheitConversion);
    $(".temp").text(Math.round(fahrenheitConversion * 10)/ 10);
    //humidity
    console.log(response.main.humidity);
    $(".humidity").text(response.main.humidity);
 });
