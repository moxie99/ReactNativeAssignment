/**
 * **Classes Challenge**:

Create a class Player with the following:

- Add a Name and Country properties

- Add a function that when it runs should print into the console ("Messi was born in Argentina");

- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player

- Add a new property Age.

- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");

- Make sure the Name and Age are dynamic.
 */


class Player  {
    constructor(playerName, playerCountry){
        this.playerName = playerName
        this.playerCountry = playerCountry
    }

    printPlayersDetails(){
        console.log(`${this.playername} was born in ${this.playerCountry}`)
    }
}

const player1 = new Player("Messi", "Argentina")

class Player extends TennisPlayer{
    constructor(playerName, playerCountry, playerAge){
        super(playerName, playerCountry)
        this.playerAge = playerAge
    }
    playersFullDetails(){
        console.log(`${this.playername} is ${this.playerAge} years old and knows how to play Tennis`)
    }
}




