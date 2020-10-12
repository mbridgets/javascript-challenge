
var tableData = data;
var tbody = d3.select("tbody");
var button_date = d3.select("#filter-btn-date");
var button_city = d3.select("#filter-btn-city");
var button_state = d3.select("#filter-btn-state");
var button_country = d3.select("#filter-btn-country");
var button_shape = d3.select("#filter-btn-shape");

tableData.forEach(function(sighting){
    var row = tbody.append("tr");
    Object.entries(sighting).forEach( function([x,y]){
        row.append("td").text(y);
    });
  });

function searchDate(){
    d3.event.preventDefault();
    var date_search = d3.select("#datetime");
    var date_entered = date_search.property("value");
    var returnDate = tableData.filter(tableData => tableData.datetime === date_entered);
    
    d3.select("tbody").html(""); 

    returnDate.forEach(function(filter_date){
        var row2 = tbody.append("tr");
        Object.entries(filter_date).forEach( function([x,y]){
            row2.append("td").text(y);
        })
    });
};

function searchCity(){
    d3.event.preventDefault();

    var city_search = d3.select("#city");
    console.log(city_search);
    var city_entered = city_search.property("value");
    console.log(city_entered);
    var returnCity = tableData.filter(tableData => tableData.city == city_entered);
    console.log(returnCity);

    d3.select("tbody").html(""); 

    returnCity.forEach(function(filter_city){
        var row3 = tbody.append("tr");
        Object.entries(filter_city).forEach( function([x,y]){
            row3.append("td").text(y);
        })
    });
};

function searchState(){
    d3.event.preventDefault();
    var state_search = d3.select("#state");
    console.log(state_search);
    var state_entered = state_search.property("value");
    console.log(state_entered);

    var returnState = tableData.filter(tableData => tableData.state == state_entered);
    console.log(returnState);

    tbody_state = d3.select("tbody").html(""); 

    returnState.forEach(function(filter_state){
        var row4 = tbody_state.append("tr");
        Object.entries(filter_state).forEach( function([x,y]){
            row4.append("td").text(y);
        })
    });
};

function searchCountry(){
    d3.event.preventDefault();
    var country_search = d3.select("#country");
    console.log(country_search);
    var country_entered = country_search.property("value");
    console.log(country_entered);

    var returnCountry = tableData.filter(tableData => tableData.country == country_entered);
    console.log(returnCountry);

    d3.select("tbody").html(""); 

    returnCountry.forEach(function(filter_counrty){
        var row5 = tbody.append("tr");
        Object.entries(filter_counrty).forEach( function([x,y]){
            row5.append("td").text(y);
        })
    });
};

function searchShape(){
    d3.event.preventDefault();
    var shape_search = d3.select("#shape");
    console.log(shape_search);
    var shape_entered = shape_search.property("value");
    console.log(shape_entered);

    var returnShape = tableData.filter(tableData => tableData.shape == shape_entered);
    console.log(returnShape);

    d3.select("tbody").html(""); 

    returnShape.forEach(function(filter_shape){
        var row6 = tbody.append("tr");
        Object.entries(filter_shape).forEach( function([x,y]){
            row6.append("td").text(y);
        })
    });
};

button_date.on("click", searchDate);
button_city.on("click", searchCity);
button_state.on("click", searchState);
button_country.on("click", searchCountry);
button_shape.on("click", searchShape);


// YOUR CODE HERE!
