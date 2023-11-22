//Q.No:2 :--Use the rest countries API URL and display all the country flag in the console.
var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v2/all");
countries.send();
countries.onload = function () {
    var result = JSON.parse(countries.response);
    console.log(result);

for(var x=0;x<result.length;x++){
    var country_flag = result[x].flag;
    console.log(country_flag);
}
}