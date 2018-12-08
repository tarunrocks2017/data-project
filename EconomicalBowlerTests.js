const expect = require('chai').expect ;
const data = require('./data-project');
console.log(data);
const matches = require('./codebeautify.json');
describe('data',()=>{

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