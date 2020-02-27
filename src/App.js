import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import dateToday from './components/dateToday'
import './App.css';

class App extends Component{
  state = {
    player: {
        id : '',
        firstName: '',
        lastName: '',
        country: '',
        score: '',
        time: ''
    },
    players: [{
      id: 1,
      firstName: 'Mangalam',
      lastName: 'Krishnan',
      country: 'India',
      score:   60,
      time: 'February 4, 2020 13:20:42'
  },
  {
      id: 2,
      firstName: 'Sharanya',
      lastName: 'Sanjay',
      country: 'Finland',
      score: 50,
      time: 'February 3, 2020 14:20:42'
  },
  {
      id: 3,
      firstName: 'Sanjay',
      lastName: 'Jayaraman',
      country: 'Belgium',
      score: 40,
      time: 'February 2, 2020 15:20:42'
  
  
  }]
  }

sortByScore = (players) => {
    players.sort((a,b) => {
        if(a.score < b.score) return 1
        if(a.score > b.score) return -1
        return 0
    })
    return players
}
deletePlayer = playerId => {
    const {players} = this.state
    const newPlayers = players.filter(player => playerId!==player.id)
    this.setState({players : newPlayers})
    }
addScore = playerId => {
   const {players} = this.state
   for (const player of players) {
       if(player.id === playerId) {
           player.score = player.score + 5
       }
   }
   this.setState({players})
}    
minusScore = playerId => {
    const {players} = this.state
    for (const player of players) {
        if(player.id === playerId) {
            player.score = player.score - 5
        }
    }
    this.setState({players})
 } 
  
 handleChange = (e) => {
   let {name,value} = e.target
   //const player = {...this.state.player,[name] : value,time:dateToday(), id : this.state.players.length+1}
   const player = {...this.state.player,[name] : value}
   this.setState({player})
 }

 addPlayer = (e) => {
   e.preventDefault()
   const player = {...this.state.player, time: dateToday(),id : this.state.players.length+1}
   this.setState({player})
   const newPlayers = [...this.state.players]
   newPlayers.push(player)
   this.setState({players : newPlayers})
   //this.setState({players : [...this.state.players,this.state.player]})
  
 }
  render () {
    const {player,players} = this.state
    return (
      <div className = "wrapper">
       <Header
       player = {player}
       handleChange = {this.handleChange}
       addPlayer = {this.addPlayer}
       />
       <Main
       players = {players}
       sortByScore = {this.sortByScore}
       deletePlayer = {this.deletePlayer}
       addScore = {this.addScore}
       minusScore = {this.minusScore}
       />
      </div>
    )
    
  
}
}
export default App;
