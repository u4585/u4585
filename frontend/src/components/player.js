import React  from 'react'
import ReactPlayer from 'react-player'
import {withRouter}from 'react-router-dom';
import '../styles/player.css'
import  NavBarPlayer from './navBarPlayer.js'

class Player extends React.Component {
   constructor(props){
     super(props);
     this.state={
       peli:null,
       get:props.getMovie
     }
   
   }
    componentDidMount(){
      console.log(this.state.get())
    }
     
    render () {
      
    return (<div><NavBarPlayer></NavBarPlayer><div>{this.state.peli}</div></div>
  /*      <div>
          <NavBarPlayer></NavBarPlayer>
          <div style={{backgroundColor: "#151515"}}>
            <div className="movie">
                <h1>Video</h1>
            </div>
            <div className="centrarMovie">
            <div className="player-wrapper">
            <ReactPlayer
       url="https://www.youtube.com/watch?v=6ZfuNTqbHE8"
      className='react-player'
       width='60%'
      height='75%'
       controls={true}
        playing={false}
     />
            </div>
            </div>
          </div>
          </div>
  */    )
    }
  }

  export default withRouter(Player);