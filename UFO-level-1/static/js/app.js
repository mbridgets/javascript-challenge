// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
// var form = d3.select("#form");


tableData.forEach(function(sighting){
    var row = tbody.append("tr");
    Object.entries(sighting).forEach( function([x,y]){
        row.append("td").text(y);
    });
  });
function searchDate(){
    d3.event.preventDefault();
    var date_search = d3.select("#datetime");
    console.log(date_search);
    var date_entered = date_search.property("value");
    console.log(date_entered);

    var returnDate = tableData.filter(tableData => tableData.datetime === date_entered);
    console.log(returnDate);

    d3.select("tbody").html(""); 

    returnDate.forEach(function(filter_date){
        var row2 = tbody.append("tr");
        Object.entries(filter_date).forEach( function([x,y]){
            row2.append("td").text(y);
        })
    });
};

button.on("click", searchDate);



// YOUR CODE HERE!
