var React = require('react');

class ComposeButton extends React.Component {
  render() {
  	let composeButton = (
		<div className="pad10A">
	    <a href="/compose" className="btn btn-success btn-lg btn-block" title="Compose new mail" onClick={this.props.onClick} >
	        Compose new mail
	    </a>
	  </div>    
	);

    return composeButton;
  }
}

module.exports = ComposeButton;

