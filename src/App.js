import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
} from 'react-vis';

import './App.css';

function App() {
  const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];
  const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

  return (
    <div className="App">
      <header className="App-header">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <LineSeries data={[
            {x: 0, y: 7.1},
            {x: 1, y: 7.6},
            {x: 2, y: 7.1},
            {x: 3, y: 7.3},
            {x: 4, y: 6.9},
            {x: 5, y: 7.4},
            {x: 6, y: 7.6},
            {x: 7, y: 7.3},
            {x: 8, y: 6.9},
            {x: 9, y: 7.4}
          ]} />
          <LineSeries data={[
            {x: 0, y: 7.0},
            {x: 1, y: 7.5},
            {x: 2, y: 7.0},
            {x: 3, y: 7.2},
            {x: 4, y: 6.8},
            {x: 5, y: 7.3},
            {x: 6, y: 7.5},
            {x: 7, y: 7.2},
            {x: 8, y: 6.8},
            {x: 9, y: 7.3}
          ]} />
        </XYPlot>
        <XYPlot width={300} height={300} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeriesCanvas data={[{x: 2, y: 10}, {x: 4, y: 5}, {x: 5, y: 15}]} color='#102832'/>
          <VerticalBarSeriesCanvas data={[{x: 2, y: 12}, {x: 4, y: 2}, {x: 5, y: 11}]} color='#529482'/>
        </XYPlot>
        <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries
            data={[
              {x: 'Apples', y: 10},
              {x: 'Bananas', y: 5},
              {x: 'Cranberries', y: 15}
            ]}
          />
          <VerticalBarSeries
            data={[
              {x: 'Apples', y: 12},
              {x: 'Bananas', y: 2},
              {x: 'Cranberries', y: 11}
            ]}
          />
        </XYPlot>
      </header>
    </div>
  );
}

export default App;
