import React from 'react';
import Clothes from './Clothes'; // import component
/* function App() {
  return (
    <div>
      <Clothes name="Zara" type="skinny"color="black" size="L">
      Clothes 1
      </Clothes>
      <Clothes name="Jean" type="skinny" color="black"size="L">
      Clothes 1
      </Clothes>
    </div>
  );
} */
class App extends React.Component {
  constructor(props) {
    super(props);
    //chi dinh 1 state
    this.state = {index: 1};
  }
  render() {
    return (
      <div>
        <p>
          value: {this.state.index}
        </p>
        <button onClick={() => this.setState({
          index: this.state.index + 1
        })}> UP </button>
        <button onClick={() => this.setState({
          index: this.state.index - 1
        })}> Down </button>
      </div>
    )
  }
}
export default App;
