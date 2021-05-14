import React, { Component } from "react";


class Myitems extends Component {
constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
}

createTasks (item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    delete(key) {
        console.log("key is:" + key);
        this.props.delete(key);
    }
    
    
   render() {
        var ScheduleEntries = this.props.entries;
        var listItems = ScheduleEntries.map(this.createTasks)

        return (
 <ul className="theList">
     <FlipMove duration={250} easing="ease-out">
    {listItems}
    </FlipMove>
</ul>
        );
    }
}

export default Myitems;
