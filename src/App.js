import react from "react";
import data from "../src/data.json";
import Card from "./Card";


class App extends react.Component {
  render(){
    return (
      <div className="App container">
        <Card details={data.list} history={this.props.history}/>
      </div>
    );
  }
}

export default App;
