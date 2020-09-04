import React from 'react';

function arraynum(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
    };
  }
  
  componentDidMount() {
    this.reset();
  }

  reset() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(arraynum(5, 1000));
    }
    this.setState({arr});
  }
  render() {
    const {arr} = this.state;
  return (
    <div>
      {arr.map((value, idx) => (
        <div className="array-bar" key={idx}>
          {value}
          </div>
          ))}
    </div>
    );
  }
}

        

