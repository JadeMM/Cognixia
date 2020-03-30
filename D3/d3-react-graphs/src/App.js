import React from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import PieChart from './components/PieChart';
import DonutChart from './components/DonutChart';

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
        return <BarGraph canvasWidth={this.state.width} canvasHeight={this.state.height}/>
      case 'PieChart':
        return <PieChart width={this.state.width} height={this.state.height}/>
      case 'DonutChart':
        return <DonutChart width={this.state.width} height={this.state.height}/>
      default:
        return <BarGraph canvasWidth={this.state.width} canvasHeight={this.state.height}/>
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
