import React, { Component } from 'react'
import './Header.css'
class Header extends Component{
    
    render() {
        const {player,handleChange,addPlayer} = this.props
        const {firstName,lastName,country,score} = player
        return (
            <div>
              <h3 className="heading">Player Leaderboard</h3>
              <div>
                 <form onSubmit = {addPlayer} className="search-container">   
                   <input type="text" className="first-name" placeholder="First Name" name = "firstName" value = {firstName} onChange = {handleChange}></input>
                   <input type="text" className="last-name" placeholder="Last Name" name = "lastName" value = {lastName} onChange = {handleChange}></input>
                   <input type="text" className="country" placeholder="Country" name = "country" value = {country} onChange = {handleChange}></input>
                   <input type="text" className="player-score" placeholder="Player Score" name = "score" value = {score} onChange = {handleChange}></input>
                   <button className="add-player">Add Player</button>
                 </form>
              </div>
            </div>
        )

    }
    
}

export default Header
