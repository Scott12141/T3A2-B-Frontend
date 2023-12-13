import { Component } from "react";
import { Navigate } from "react-router-dom";


export default class ViewBookingButton extends Component {
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
                    View Bookings Here
                </button>
                { this.state.shouldReturn && <Navigate to="/bookings/bookingviewer" /> }
            </div>
        );
    };
}