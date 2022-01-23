var country_flag = new XMLHttpRequest();
country_flag.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
country_flag.send();
country_flag.onload = function(){
    
    var data = JSON.parse(country_flag.response);

    for(var i=0;i<data.length;i++){
        console.log(
        `flag: ${data[i].flag}
        name: ${data[i].name}
        region: ${data[i].region}
        sub region: ${data[i].subregion}
        population: ${data[i].population}`);
    } 
}     




