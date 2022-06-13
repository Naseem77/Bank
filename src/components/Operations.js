import React, { Component } from "react";
import './style/operations.css'
import { Redirect } from "react-router-dom";

export default class Operations extends Component {
    constructor() {
        super();
        this.state = {
            amount: "",
            vendor: "",
            category: "",
            isRedirect: false,
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    deposit = () => {
        let amount = parseInt(this.state.amount)
        let category = this.state.category
        let vendor = this.state.vendor

        if (this.state.amount.length !== null && category.length > 0 && vendor.length > 0) {
            this.props.newTrans(
                amount, vendor, category
            );
            this.setState({ amount: "", category: "", vendor: "" })
            this.setState({ isRedirect: true });
            alert("successfully deposit")
        } else {
            alert("Please insert details in all fields")
        }
    };

    withdraw = () => {
        let amount = parseInt(this.state.amount)
        let category = this.state.category
        let vendor = this.state.vendor

        if (amount > 0 && category.length > 0 && vendor.length > 0) {
            this.props.newTrans(
                -amount, vendor, category
            );
            this.setState({ amount: "", category: "", vendor: "" })
            this.setState({ isRedirect: true });
            alert("successfully withdraw")
        } else {
            alert("Please insert details in all fields")
        }
    };

    render() {
        return (
            <form>
                <div className="container">
                    <div id="title">Insert Transactions</div>
                    <div className="input-fields">
                        <input id="amount-field"
                            type="text"
                            placeholder="Transaction amount"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />

                        <input id="vendor-field"
                            type="text"
                            placeholder="Transaction vendor"
                            name="vendor"
                            value={this.state.vendor}
                            onChange={this.handleChange}
                        />

                        <input id="category-field"
                            type="text"
                            placeholder="Transaction category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="buttons">
                        <button id="deposit" type="button" onClick={this.deposit}>Deposit</button>
                        <button id="withdraw" type="button" onClick={this.withdraw}>Withdraw</button>
                    </div>
                    {this.state.isRedirect ? <Redirect to="/" /> : <></>}
                </div>
            </form>
        );
    }
}
