var React = require('react');

const composeButton = (
	<div className="pad10A">
    <a href="/compose" className="btn btn-success btn-lg btn-block" title="Compose new mail">
        Compose new mail
    </a>
  </div>    
);

class ComposeButton extends React.Component {
  render() {
    return composeButton;
  }
}

module.exports = ComposeButton;

