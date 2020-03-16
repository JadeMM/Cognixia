import React from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import PieChart from './components/PieChart';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page: '',
      height : 400,
      width : 600,
    }
  }

  updateView = () => {
    switch(this.state.page) {
      case 'BarGraph':
        return <BarGraph/>
      case 'PieChart':
        return <PieChart width={this.state.width} height={this.state.height}/>
      default:
        return <PieChart width={this.state.width} height={this.state.height}/>
    }
  }

  render() {
    return (
        <div className="App">
          {this.updateView()}
          <div>
            <button onClick={() => this.setState({page: 'BarGraph'})}>Bar Graph</button>
            <button onClick={() => this.setState({page: 'PieChart'})}>Pie Chart</button>
            <button onClick={() => this.setState({page: 'DonutChart'})}>Donut Chart</button>
          </div>
        </div>
    );
  }
}

export default App;
