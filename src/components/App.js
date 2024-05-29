import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };

    buttonClickHandler() {

        this.setState(prevState=>({
            renderBall:true
          }))
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
   // addEventListener("keydown", myScript)
   handleKeyPress(event){
    if(event.key==="ArrowRight"){
        this.setState(prevState => {
            let newPosi = prevState.posi + 5;
            return {
                posi: newPosi,
                ballPosition: { left: `${newPosi}px` }
            }
        });
    }
}
//    handleKeyPress = (event) => {
//     if (event.key === "ArrowRight") {
//         this.setState(prevState => ({
//             posi: prevState.posi + 5,
//             ballPosition: { left: `${prevState.posi + 5}px` }
//         }));
//     }
// }
componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
}
   
   componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
}

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
