const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    // props.maxChars is 140 (from index.js file)

    this.twitterCountState = this.twitterCountState.bind(this)

    this.state = {
      message: ""
    };
  }

  twitterCountState(event) {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.twitterCountState}
        />

        {this.props.maxChars - this.state.message.length}

      </div>
    );
  }
}

module.exports = TwitterMessage;
