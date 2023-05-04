function gameObject(){
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black","White"],
            players:{
                AlanAnderson: {
                    number:0 ,
                    shoe: 16,
                    points:22 ,
                    rebounds:12 ,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks:1 ,
                },
                ReggieEvans: {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks:7 ,
                },
                BrookLopez: {
                    number:11 ,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks:15 ,
                },
                MasonPlumlee: {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks:5 ,
                },
                JasonTerry: {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks:1 ,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players:{
                JeffAdrien: {
                    number:4 ,
                    shoe: 18,
                    points:10 ,
                    rebounds:1 ,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks:2 ,
                },
                BismakBiyombo: {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks:10 ,
                },
                DeSagnaDiop: {
                    number:2 ,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks:5 ,
                },
                BenGordon: {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks:0 ,
                },
                BrendanHaywood: {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds:12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks:12 ,
                }
            }
        },

    }
    return game
    }

    //For printing home team name
    const homeTeamName = () =>{
        let object = gameObject()
        return object['home']['teamName']
    }
    console.log(homeTeamName())

    //for printing player points
    const numPointsScored  = (name) =>{
        let game = gameObject()

        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];

            for (let playerName in teamObj) {
              debugger;

                if(playerName === name){
                    let points = teamObj[name][`points`]
                    debugger;
                    return `${name} points scored: ${points}`
                }
            }
        }

        // for (let gameKey in game) {

        //     debugger;
        //     let teamObj = game[gameKey];
        //     for (let teamKey in teamObj) {

        //       debugger;
        //       let data = teamObj[`players`];
        //       for (let key in data) {
        //         debugger;
        //         if(key === name){
        //             let points = data[name][`points`]
        //             debugger;
        //             return points
        //         }
        //       }
        //     }
        // }
    }
    console.log(`${numPointsScored("BrendanHaywood")}`)

    //for player shoe size
    const shoeSize  = (name) =>{
        let game = gameObject()

        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];

            for (let playerName in teamObj) {
              debugger;

                if(playerName === name){
                    let shoe = teamObj[name][`shoe`]
                    debugger;
                    return `${name} shoe: ${shoe}`
                }
            }
        }

    }
    console.log(`${shoeSize("BrendanHaywood")}`)

    //for team colors
    const teamColors =(name)=>{
        let game = gameObject()
        for(let gameKey in game){
            let team = game[gameKey][`teamName`]
            if(team === name){
                let colors = game[gameKey][`colors`]
                debugger;
                return `${name} colors: ${colors}`
            }
        }
    }
    console.log(teamColors("Charlotte Hornets"))

    //for team names
    const teamNames = ()=>{
        const teamNames = []
        let game = gameObject()
        for(let gameKey in game){
            debugger;

             teamNames.push(game[gameKey][`teamName`])
        }
        console.log(teamNames)
    }
    teamNames()

    //for team numbers
    const playerNumbers = (teamName) =>{
        let game =gameObject()
        const pNumbers = []

        for(let gameKey in game){
            if(teamName === game[gameKey][`teamName`]){

                let teamObj = game[gameKey][`players`];
                for (let playerName in teamObj) {
                  debugger;
                    pNumbers.push(teamObj[playerName]['number'])
                }
            }
        }
        console.log(pNumbers)
    }
    playerNumbers("Charlotte Hornets")

    //player stats
    const playerStats = (name)=>{
        let game = gameObject()
        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];

            for (let playerName in teamObj) {
              debugger;

                if(playerName === name){

                    let stats = teamObj[playerName]
                    debugger
                    console.log(stats)
                }
            }
        }

    }
    playerStats("BrendanHaywood")

    //big shoe rebounds
    const bigShoeRebounds = ()=>{

        let game = gameObject()
        let biggestShoe = 0
        let player = undefined
        let rebounds = undefined


        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];

            for (let playerName in teamObj) {
              debugger;
              let shoe = teamObj[playerName][`shoe`]
                if(biggestShoe< shoe){
                    biggestShoe = shoe
                    player = playerName
                    rebounds =teamObj[playerName][`rebounds`]
                    debugger;

                }
            }
        }
        console.log(`${player} has ${rebounds}  rebounds with shoe is ${biggestShoe}.`)
    }
    bigShoeRebounds()

    //most points
    const   mostPointsScored = () =>{

        let game = gameObject()
        let Mostpoints = 0
        let player = undefined

        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];

            for (let playerName in teamObj) {
              debugger;
              let points = teamObj[playerName][`points`]
                if(Mostpoints< points){
                    Mostpoints = points
                    player = playerName
                    debugger;

                }
            }
        }
        console.log(`${player} scored the most points with ${Mostpoints}.`)
    }
    mostPointsScored()

    const winningTeam = () =>{
        let game = gameObject()
        let sum = 0
        let team = undefined
        let singlesum = 0

        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];


            if(singlesum> sum){
                sum = singlesum
                team = game[gameKey][`teamName`]
                debugger;
            }

            for (let playerName in teamObj) {
              debugger;
              let points = teamObj[playerName][`points`]

              singlesum += points

              debugger
            }
        }
        console.log(`${team} is the team with most points with ${sum}.`)
    }
    winningTeam()

    //longest name
    const playerWithLongestName = ()=>{
        let game = gameObject()
        let nameArr = []
        let longestname = undefined

        for (let gameKey in game) {
            debugger;

            let teamObj = game[gameKey][`players`];


            for (let playerName in teamObj) {
              debugger;
              let player = playerName.split("")

              if(player.length > nameArr.length)
                nameArr=player
                longestname=playerName
              debugger
            }
        }
        console.log(`${longestname} is the player with the longest name.`)

    }
    playerWithLongestName()