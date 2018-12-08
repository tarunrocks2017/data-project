const expect = require('chai').expect ;
const data = require('./data-project');
console.log(data);
const matches = require('./codebeautify.json');
describe('data',()=>{

// 1.)  Test cases for MatchPerYear  ---->

    it('should get match per year',()=>{
        let matchArray = [
            {season:2017,id:1},
            {season:2017,id:2},
            {season:2016,id:3},
            {season:2017,id:4},
            {season:2016,id:5},
            {season:2016,id:6},
            {season:2015,id:7},
            {season:2015,id:8},
            {season:2015,id:9},
        ] ;
       
        const result = data.getMatchesPerYear(matchArray);
        const expected = {'2016':3,'2017':3,'2015':3};
        expect(result).eql(expected);

    })

    
})