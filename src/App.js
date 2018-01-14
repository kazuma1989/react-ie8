const React = require('react');

module.exports = class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Enter your name'
    };
  }

  handleInput = ({ target: { value } }) => {
    this.setState({
      name: value.toUpperCase()
    });
  }

  render() {
    return (
      <div>
        <h1>Upper case changer</h1>
        <input type="text" value={this.state.name} onChange={this.handleInput} />
      </div>
    );
  }
};
