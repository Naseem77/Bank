import React, { Component } from "react";
import "../App.css";

export default class Balance extends Component {

    render() {
        return (
            <div>
                <div id="balance"> Balance : {this.props.balance}</div>
            </div>
        );
    }
}
