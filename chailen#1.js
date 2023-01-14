const game = {
    team1 :'bayern munich',
    team2 :'borrussia dortmund',
    players:[
        [
            'neuer',
            'oavard',
            'martinez',
            'alaba',
            'davies',
            'kimmich',
            'goretzka',
            'coman',
            'muller',
            'gnarby'
        ],
        ['burki',
        'schulz',
        'hummels',
        'ajabji',
        'hakimi',
        'weigl',
        'witsel',
        'hazard']
    ],
    score: '4:0',
    scored: ['gnaby','hakimi','muler','coman'],
    date:'nov 9th,2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};


const [players1,players2]=game.players
console.log(players1,players2);