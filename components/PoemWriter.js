const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      validPoem: false
    };

    this.saveCurrentState = this.saveCurrentState.bind(this)
    this.validPoemHandler = this.validPoemHandler.bind(this)
  }

  saveCurrentState(event) {
    this.setState({value: event.target.value}, () => {this.validPoemHandler}) // binds 'this' to our value
  }

  validPoemHandler(event) {
    var poem = this.state.value.replace( /  /g ,' ').split('\n');
    var more_then_3_lines = poem.length > 2
    var first_line_is_5_words = poem[0].split(' ').filter(Boolean).length === 5
    var second_line_is_3_words = poem[1] !== undefined ? poem[1].split(' ').filter(Boolean).length === 3 : false
    var last_line_is_5_words = poem[2] !== undefined ? poem[2].split(' ').filter(Boolean).length === 5 : false
    if ( more_then_3_lines && first_line_is_5_words && second_line_is_3_words && last_line_is_5_words ) {
     return true
    } else {
     return false
   }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.saveCurrentState}  />
          {this.validPoemHandler() ? <p></p> : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    )
  }
}

module.exports = PoemWriter;
