const expect = require('chai').expect ;
const data = require('./data-project');
console.log(data);
const matches = require('./codebeautify.json');
describe('data',()=>{

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

    it('should get extra runs per team in 2016',()=>{
        let matchArray = [
            {
                match_id: '500',
                extra_runs: '0',
                batting_team: 'Sunrisers Hyderabad',

            },
            {
                match_id: '577',
                extra_runs: '4',
                batting_team: 'Gujarat lions',
            },
            {
                match_id: '578',
                extra_runs: '2',
                batting_team: 'Mumbai indians',
            },
            {
                match_id: '501',
                extra_runs: '0',
                batting_team: 'Sunrisers Hyderabad'
            }
        ];
       var arrayOfYear =  [
           {
               'id':'500',
               'season':'2013'
           },

           {
                'id':'577',
                'season':'2016'
            },
            {
                'id':'578',
                'season':'2016'
            },
            {
                'id':'501',
                'season':'2013'
            }
       ]
        const result = data.getExtraRunsForEach(matchArray,'2016',arrayOfYear);
        const expected = {'Gujarat lions' :4 , 'Mumbai indians':2};
        expect(result).eql(expected);
    })

    it('should get top five economical bowler',()=>{
        var deliveryArray = [
            {
                ball: '1',
                bowler: 'HH Pandya',
                total_runs: '0',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '2',
                bowler: 'HH Pandya',
                total_runs: '3',
                noball_runs:'0',
                wide_runs:'0'

            },
            {
                ball: '3',
                bowler: 'HH Pandya',
                total_runs: '3',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '1',
                bowler: 'raghav',
                total_runs: '3',
                noball_runs:'0',
                wide_runs:'0'

            },
            {
                ball: '2',
                bowler: 'raghav',
                total_runs: '4',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '3',
                bowler: 'raghav',
                total_runs: '3',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '1',
                bowler: 'tarun',
                total_runs: '1',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '2',
                bowler: 'tarun',
                total_runs: '1',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '3',
                bowler: 'tarun',
                total_runs: '1',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '1',
                bowler: 'varun',
                total_runs: '2',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '2',
                bowler: 'varun',
                total_runs: '2',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '3',
                bowler: 'varun',
                total_runs: '4',
                noball_runs:'0',
                wide_runs:'0'

            },
            {
                ball: '1',
                bowler: 'virat',
                total_runs: '4',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '2',
                bowler: 'virat',
                total_runs: '4',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '3',
                bowler: 'virat',
                total_runs: '4',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '1',
                bowler: 'kunal',
                total_runs: '2',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '2',
                bowler: 'kunal',
                total_runs: '4',
                noball_runs:'0',
                wide_runs:'0'
            },
            {
                ball: '3',
                bowler: 'kunal',
                total_runs: '1',
                noball_runs:'0',
                wide_runs:'0'
            }
        ];

        let result =  data.getTopFiveEconomicalBowler(deliveryArray);
        let expected = [
            { name: 'tarun', value: 6 },
{ name: 'HH Pandya', value: 12 },
{ name: 'kunal', value: 14 },
{ name: 'varun', value: 16 },
{ name: 'raghav', value: 20 }
        ];
        expect(result).eql(expected);
        
    })
})