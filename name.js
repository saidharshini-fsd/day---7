//3.Print the following details name, capital, flag using forEach function


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  
    var result = JSON.parse(request.responseText);

    result.forEach(function (country) {
      var name = country.name.common;
      var capital = country.capital;
      var flag = country.flags.png; 

      console.log("Name: " + name);
      console.log("Capital: " + capital);
      console.log("Flag: " + flag);
      console.log("----------------------------------");
    });
  
};
