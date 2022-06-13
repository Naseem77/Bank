import React, { Component } from "react";
import Transaction from "./Transaction";
import "./style/transaction.css"

export default class Transactions extends Component {
    render() {
        return (
            <div className="container-trans">
                <div id="title-home">Transactions</div>
                {this.props.dummyData.length > 0
                    ? this.props.dummyData.map((d) => (
                        <Transaction
                            key={d._id}
                            dummyData={d}
                            deleteTrans={this.props.deleteTrans}
                        />
                    ))
                    : ""}
            </div>
        );
    }
}
