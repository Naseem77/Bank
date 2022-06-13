import React, { Component } from "react";
import "./style/transaction.css"

export default class Transaction extends Component {
    deleteTrans = () => {
        this.props.deleteTrans(this.props.dummyData._id);
    };

    render() {
        return (

            <div className="trans-contanier1">

                <div id="first-values">
                    <span id="vendor-data"> {this.props.dummyData.vendor} </span>
                    <span id="amount-data"> {this.props.dummyData.amount} </span>
                </div>
                <div id="second-values">
                    <span id="vendor-data"> {this.props.dummyData.category} </span>
                    <button id="btn-delete" onClick={this.deleteTrans}>DELETE</button>
                </div>
            </div>
        );
    }
}
