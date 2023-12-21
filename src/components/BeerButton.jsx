import { Component } from "react";
import { Navigate } from "react-router-dom";


export default class BeerButton extends Component {
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
                    Check out our brews 
                </button>
                { this.state.shouldReturn && <Navigate to="/beer" /> }
            </div>
        );
    };
}