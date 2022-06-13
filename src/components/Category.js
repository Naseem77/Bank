import React, { Component } from "react";
import "./style/category.css"

export default class Category extends Component {
    constructor() {
        super();
        this.category = {};
    }
    categoryTranSum() {
        this.category = {};
        let tempDummyData = [...this.props.dummyData];
        for (let i = 0; i < this.props.dummyData.length; i++) {
            let transaction = tempDummyData[i];
            let categoryVal = transaction.category;
            let amount = transaction.amount;

            if (!this.category[categoryVal]) {
                this.category[categoryVal] = amount;
            } else {
                this.category[categoryVal] += amount;
            }
        }
    }
    render() {
        this.categoryTranSum();

        return (
            <div className="category-fields">
                <div id="title">BreakDown</div>
                {Object.keys(this.category).map((c, i) => (
                    <div key={i}>
                        <div id="values">{c} : {this.category[c]}</div>
                    </div>
                ))}
            </div>
        );
    }
}
