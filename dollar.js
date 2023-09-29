//5.Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
  if (request.status === 200) {
    var result = JSON.parse(request.responseText);

    var targetCurrency = "USD"; 

    // Filter countries that use the target currency
    var countriesUsingTargetCurrency = result.filter(function (country)
     {
      for (var currencyCode in country.currencies)
       {
        if (country.currencies[currencyCode].code === targetCurrency) {
          return true;
        }
      }
      return false;
    });

    if (countriesUsingTargetCurrency.length > 0) {
      console.log("Countries that use " + targetCurrency + " as currency:");
      countriesUsingTargetCurrency.forEach(function (country) {
        console.log(country.name.common);
      });
    }  else
     {
  console.log("No countries found that use " + targetCurrency + " as currency.");
    }
  } 
  else
   {
    console.error("Error fetching data. Status code: " + request.status);
  }
};
