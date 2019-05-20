import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                Name: <input id="txtName" type="text" />
                <br />
                <br />
                <input className="btn btn-primary" type="submit" value="Send" onClick={() => {alert("Hello " + document.getElementById("txtName").value);}}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}