//Use the same Rest countries and print all countries name,regions,sub-regions and populations

var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v2/all");
countries.send();
countries.onload = function () {
    var result = JSON.parse(countries.response);
    console.log(result);

for(var x=0;x<result.length;x++){
    var Country_name = result[x].name;
    var Country_regions= result[x].region;
    var Country_subreg = result[x].subregion;
    var Country_population = result[x].population;
    console.log("Country_name:"+Country_name,";region:"+Country_regions,";sub_region:"+Country_subreg,";Population:"+Country_population);

}
}