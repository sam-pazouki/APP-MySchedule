import React, { Component } from "react";
import Myitems from "./Myitems";
import "./MySchedule.css";
import FlipMove from "react-flip-move";


class MySchedule extends Component {
constructor(props) {
    super (props);

    this.state = {
        items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
}

addItem(e) {
    if (this._inputElement.value !==""){
        var newItem = {
            text: this._inputElement.value,
            key: Date.now()
        };

        this.setState((prevState) => {
            return {
                items: prevState.item.concat(newItem)
            };
        });
    }


    this._inputElement.value ="";

    console.log(this.state.items);

    e.preventDefault();
}

deleteItem(key) {
var filteredItems = this.state.items.filter(function (item) {})
return (item.key !== key)
};
};

this.setState({
    item: filteredItems
});


render() 
return (
    <div className="myscheduleprimary">
        <div className="header">
            <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                  placeholder="enter task">
                </input>
                <button type="submit">add</button>
                </form>
                </div>
                <Myitems entries={this.state.item}
                         delete={this.deleteItem}/>                       
                </div>

   );
  ;



export default MySchedule;