import { Component } from "react";
import { Navigate } from "react-router-dom";


export default class ReturnHomeButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            shouldReturn: false
        }
    }

    render(){
        return (
            <div>
                <button onClick={() => this.setState({shouldReturn: true})}>
                    Return Home
                </button>
                { this.state.shouldReturn && <Navigate to="/" /> }
            </div>
        )
    }
}