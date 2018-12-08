
module.exports = {
    getMatchesPerYear: function getMatchesPerYear(match_array){
        let seasonObject = {};
        match_array.forEach(element => {
            if(element.id == "")return ;
            if(!seasonObject.hasOwnProperty(element.season)){
                seasonObject[element.season] = 1 ;
            }else{
                let count = seasonObject[element.season];
                count++ ;
                seasonObject[element.season] = count ;
             }
        });
      return seasonObject;
     },

    getWonMatchesByTeam :function getWonMatchesByTeam(match_array){

        var winningTeamBySeason = new Object();
        match_array.forEach((element) => {
            if(element.id == "")return ;
            if(element.result != "normal")return ;
            if(!winningTeamBySeason.hasOwnProperty(element.season)){
                var winningTeams ={};
                winningTeamBySeason[element.season] = winningTeams;
                winningTeams[element.winner] = 1 ;
                
            }else{
                if(!winningTeamBySeason[element.season].hasOwnProperty(element.winner))
                    winningTeamBySeason[element.season][element.winner] = 1 ;
                else
                    winningTeamBySeason[element.season][element.winner] = winningTeamBySeason[element.season][element.winner] + 1 ;  // better to use variable or not ? 
            }
    });
            return winningTeamBySeason;
    }
,
getExtraRunsForEach: function getExtraRunsForEach(arrayByDelivery,yearValue,arrayByYear){

    var matchIdArray =  arrayByYear.map(element => {
        if(element.season == yearValue)
        return element.id ;
    });
    var teamObject = {};
  
    arrayByDelivery.forEach(element => {
        if(!matchIdArray.includes(element.match_id))return ;
            if(!teamObject.hasOwnProperty(element.batting_team))
                teamObject[element.batting_team] = parseInt(element.extra_runs) ;     //  should we take this line in one statement ?
            else
                teamObject[element.batting_team] = teamObject[element.batting_team] + parseInt(element.extra_runs) ;
    });
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
        player["economyValue"] = economyOfBowler ;
        bolwlerEconomyArray.push(player);
    });
    bolwlerEconomyArray.sort((a,b)=>a.economyValue-b.economyValue);
    var topFiveBowler = bolwlerEconomyArray.slice(0,5);
    return topFiveBowler ;
}

}
