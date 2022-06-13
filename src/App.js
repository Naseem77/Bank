import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Category from "./components/Category"
import Balance from "./components/Balance"

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      balance: 0,
    };
  }

  async getDataFromDB() {
    const response = await axios.get("http://localhost:8080/transactions");
    this.setState({ dummyData: response.data });
    this.getBalance();
  }
  getBalance() {
    let sumAmount = 0;
    for (let i = 0; i < this.state.dummyData.length; i++) {
      sumAmount += this.state.dummyData[i].amount;
    }
    this.setState({ balance: sumAmount });
  }

  async componentDidMount() {
    this.getDataFromDB();
  }

  deleteTrans = async (id) => {
    await axios.delete(
      `http://localhost:8080/transaction/${id}`
    );
    let tempData = this.state.dummyData.filter((d) => d._id !== id);
    this.setState({ dummyData: tempData }, () => {
      this.getBalance();
    });
  };

  newTrans = async (amount, vendor, category) => {
    const transaction = { amount, vendor, category };
    const response = await axios.post(
      "http://localhost:8080/transaction",
      transaction
    );
    let currDummyData = [...this.state.dummyData];
    currDummyData.push(response.data);
    this.setState({ dummyData: currDummyData }, () => {
      this.getBalance();
    });

  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="header">
              <Link className="header-link" to="/">Transactions </Link>
              <Link className="header-link" to="/Operations"> Operations</Link>
              <Link className="header-link" to="/Category"> Category</Link>
              <Balance balance={this.state.balance} />
            </div>
            <Route
              path="/"
              exact
              render={() => (
                <Transactions
                  key={"Transactions"}
                  deleteTrans={this.deleteTrans}
                  dummyData={this.state.dummyData}
                />
              )}
            />
            <Route
              path="/Operations"
              exact
              render={() => (
                <Operations
                  key={"Operations"}
                  newTrans={this.newTrans}
                />
              )}
            />
            <Route
              path="/Category"
              exact
              render={() => (
                <Category key={"Category"} dummyData={this.state.dummyData} />
              )}
            />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
