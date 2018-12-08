const expect = require('chai').expect ;
const data = require('./data-project');
console.log(data);
const matches = require('./codebeautify.json');
describe('data',()=>{

 
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


});