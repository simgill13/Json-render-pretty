import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    var data = 
  { "action": "addChatNotesIntegration", "componentType": "ChatNote", "header": "Account Balance", "payload": [ { "component": "ChatNote", "title": "Account Balance", "subcomponents": [ { "subcomponent": "Markup", "markupType": "TimeSelector", "label": "Accounts", "markupProps": { "hasSmallBarGraph": "true", "horizontal": "true", "selected": "JUN", "dates": [ "JUN", "JUL", "AUG" ], "dateStrings": {}, "subComponents": [ { "graphType": "metrics", "metricComponents": [ { "graphType": "metric", "title": "Checking", "keyColor": "#F4B644", "dates": { "JUN": { "primary": "$43,480.00 ", "secondary": "100%" } } },{ "graphType": "metric", "title": "Savings", "keyColor": "#F4B644", "dates": { "JUN": { "primary": "$40,503.00 ", "secondary": "100%" } } }]}, { "graphType": "bar", "orientation": "horizontal", "colors": [ "#37283F", "#CEC6BD", "#F4B644", "#70a6ff", "#ff8484", "#96d872", "#76dbc7", "#7eb1ea", "#a582e5", "#dd89e5" ], "dataPoints": [ { "x": 1500, "y": "JUN", "color": 9 }, { "x": 1000, "y": "JUL", "color": 2 } ] } ] } }] } ] }

    setTimeout(()=>{
    document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);
    },500)
    return (
      <div>
        <pre style={{fontSize:'9px'}} id="json"></pre>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
