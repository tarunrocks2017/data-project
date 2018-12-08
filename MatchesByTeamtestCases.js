const expect = require('chai').expect ;
const data = require('./data-project');
console.log(data);
const matches = require('./codebeautify.json');
describe('data',()=>{
    it('should get all matches by team',()=>{
        var matchArray = [
            {
                "season":'2017',
                "winner": "Rising Pune Supergiant",
                "result": "normal"
            },
            {
                "season":'2017',
                "winner": "Kolkata Knight Riders",
                "result": "normal"
            },
            {
                "season":'2016',
                "winner": "Kings XI Punjab",
                "result": "normal"
            },
            { "season":'2016',
                "winner": "Mumbai Indians",
                "result": "tie"
            }
        ];

        const result = data.getWonMatchesByTeam(matchArray);
        const expected = { '2016': { 'Kings XI Punjab': 1},
        '2017': { 'Rising Pune Supergiant': 1, 'Kolkata Knight Riders': 1 } } ;
      
        expect(result).eql(expected);
    })
})