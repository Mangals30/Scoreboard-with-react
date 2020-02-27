import React, { Component } from 'react'
import './Player.css'
class Player extends Component {
    
    render () {
        const {player,deletePlayer,addScore,minusScore} = this.props
        const {firstName,lastName,country,score,time} = player
        return (
            <div className = "player-div" key = {player.id}> 
                <div className = "name-div">
        <div className = "full-name-div">
           {firstName.toUpperCase()} {lastName.toUpperCase()}
         </div>
         <div className = "time-div">
            {time}
         </div>
     </div>
              <div className = "country-div">
                  {country}
              </div>
              <div className = "score-div">
                  {score}
              </div>
              <div className = "del-add-div">
            <button className = "del-button" onClick = {() => deletePlayer(player.id)}>
               <i className="fas fa-trash-alt"></i>
            </button>
            <button className = "plus-button" onClick = {() => addScore(player.id)}>+5</button>
            <button className = "minus-button" onClick = {() => minusScore(player.id)}>-5</button>
         </div>
              </div>
        )

    }
    
}

export default Player
