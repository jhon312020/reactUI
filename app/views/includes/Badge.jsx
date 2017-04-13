var React = require('react');

class Badge extends React.Component {
  render() {
 	 	const badgeContent = (
			<span className={`badge ${ this.props.badgeColor }`}>{this.props.counter}</span>
 		);
    return badgeContent;
  }
}

module.exports = Badge;

