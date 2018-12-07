const data = require('./data-project');
var matches = require('./codebeautify.json');

const csv=require('csvtojson');
 var csvfilepath = "/home/tarun/Documents/weather-web-project/02-data-project-javascript/deliveries.csv" ;
var deliveries = [];

csv().fromFile(csvfilepath).then((result)=>{

     var json  = result ;
    
     var output = data.getExtraRunsForEach(json,'2016',matches);
     console.log(output);
  
});

// var team_object = data.getWonMatchesByTeam(matches);
// console.log(team_object);

// var matches = data.getMatchesPerYear(matches);
// console.log(matches);

