var React = require('react');

const composeButton = (
	<div className="pad10A">
    <a href="#" className="btn btn-success btn-lg btn-block" title="Compose new mail">
        Compose new mail
    </a>
  </div>    
);

class Compose extends React.Component {
  render() {
    return composeButton;
  }
}

module.exports = Compose;

