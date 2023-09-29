// 1.Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    

    var result = JSON.parse(request.response);

    var countriesInAsia = result.filter(function (country)
     {
        return  country.region === "Asia";
    });

    var countryNames=countriesInAsia.map(function(country)
    {
        return country.name.common;
    }); 

     console.log('Countries in Asia are : ', countryNames);

}