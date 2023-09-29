//2.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    
        var result = JSON.parse(request.responseText);

        var countriesWithLowPopulation = result.filter(function (country)
         {
            var population = country.population;

            return population < 200000; 
        });

        var countryNames = countriesWithLowPopulation.map(function (country)
         {
            return country.name.common;
        });

        console.log('Countries with a population of less than 2 lakhs:', countryNames);
    } 

