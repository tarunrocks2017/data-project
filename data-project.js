const data = require('./data-prohject.js');
const csvtoJSON = require('csvtojson');

module.exports = {
    getMatchesPerYear: function getMatchesPerYear(match_array){
       match_array.sort((a,b)=>a.season-b.season);

        var match_object = {};
        var length = match_array.length ;
        var count = 1 ;

        for(let i = 0 ; i < length-1 ; i++){
            if(match_array[i].season == match_array[i+1].season){
                count++ ;
            }else{
                if(!(match_array[i].season in match_object)){
                     match_object[match_array[i].season] = count ;
                     count = 1;
                }
                
            }
            if(i == length-2){
                match_object[match_array[i].season] = count ;
            }
        }
       return match_object ;
       
    },

    getWonMatchesByTeam : function getWonMatchesByTeam(match_array){

    var mathesplayByTeams = [];
    var length = match_array.length ;
    
    var winningTeamBySeasonObject = new Object();
    
   match_array.forEach((element) => {
      
    if(!winningTeamBySeasonObject.hasOwnProperty(element.season)){

        var winningTeamObject = {};

        winningTeamBySeasonObject[element.season] = winningTeamObject;
        if(element.result == 'normal')
        winningTeamObject[element.winner] = 1 ;
        

    }else{
        
        var tempObject = Object.assign(winningTeamBySeasonObject[element.season]);
        
        if(!(tempObject.hasOwnProperty(element.winner)) && element.result == 'normal'){
            tempObject[element.winner] = 1 ;
            winningTeamBySeasonObject[element.season] = tempObject ;
        }else if((tempObject.hasOwnProperty(element.winner)) && element.result == "normal"){
            var count = tempObject[element.winner];
            count = count + 1 ;
            tempObject[element.winner] = count ;
            winningTeamBySeasonObject[element.season] = tempObject ;
        }

    }
});
return winningTeamBySeasonObject;
}
,
getExtraRunsForEach: function getExtraRunsForEach(arrayByDelivery,yearValue,arrayByYear){
  
    var matchIdArray = [];
    var teamObject = {};
    for(let i = 0 ; i < arrayByYear.length ;i++){

        if (arrayByYear[i].season == yearValue){

            matchIdArray.push(arrayByYear[i].id);
        }
    }

    for(let j = 0 ; j < arrayByDelivery.length ; j++){

        if(matchIdArray.includes(arrayByDelivery[j].match_id)){

            var battinTeam = arrayByDelivery[j].batting_team ;
            var ExtraRuns = arrayByDelivery[j].extra_runs ;

            if(!(battinTeam in teamObject)){
                teamObject[battinTeam] = parseInt(ExtraRuns) ;
            }else{
                var runByTeam = teamObject[battinTeam];
                runByTeam = runByTeam + parseInt(ExtraRuns) ;
                teamObject[battinTeam] = runByTeam ;
            }
        }
    }
    return teamObject ;
},
getTopFiveEconomicalBowler: function getTopFiveEconomicalBowler(deliveryArray){

    var bolwlerEconomyArray = [];
    var bowlerObject = {};
    var runsObject = {};

    deliveryArray.forEach(element => {
        
        if(!bowlerObject.hasOwnProperty(element.bowler) &&  !runsObject.hasOwnProperty(element.bowler)){
           
            if(element.noball_runs == 0 && element.wide_runs == 0 && element.total_runs >= 0){
                bowlerObject[element.bowler] = 1 ;
                runsObject[element.bowler] = parseInt(element.total_runs) ;
            }else{
                bowlerObject[element.bowler] = 0 ;
                runsObject[element.bowler] = parseInt(element.total_runs) ;
            }

        }else{

            var runs = runsObject[element.bowler] ;
            var balls = bowlerObject[element.bowler];

            if(element.noball_runs == 0 && element.wide_runs == 0 && element.total_runs >= 0){
                balls = balls + 1 ;
                bowlerObject[element.bowler] = balls ;
                runs = runs + parseInt(element.total_runs) ;
                runsObject[element.bowler] = runs ;
            }else{
                runs = runs + parseInt(element.total_runs) ;
                runsObject[element.bowler] = runs ;
            }
        }
    });

    var bowlerNameArray = Object.keys(bowlerObject);

    bowlerNameArray.forEach(element => {
        

        var total_over = bowlerObject[element] / 6 ;
        var economyOfBowler = runsObject[element]/total_over ;

        var player = {};
        player["name"] = element ;
        player["value"] = economyOfBowler ;
       
        bolwlerEconomyArray.push(player);
       
    });
   
    bolwlerEconomyArray.sort((a,b)=>a.value-b.value);
    var topFiveBowler = bolwlerEconomyArray.slice(0,5);
    return topFiveBowler ;
}



}
