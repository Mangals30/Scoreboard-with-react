import React, { Component } from 'react'
import Player from './Player'

class Main extends Component {
    
    render() {
        const {players,sortByScore,deletePlayer,addScore,minusScore} = this.props
        const sortedPlayers = sortByScore(players)
        const playerList = sortedPlayers.map((player => 
        <Player key = {player.id} player = {player} deletePlayer = {deletePlayer} addScore = {addScore} minusScore = {minusScore}/>))    

    return(
        <div>
            {playerList}
        </div>
    )

}
    }
export default Main
