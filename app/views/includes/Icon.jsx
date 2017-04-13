var React = require('react');

class Icon extends React.Component {
  render() {
 	 	const iconContent = (
			<i className={`glyph-icon ${ this.props.iconType }`}> </i>
 		);
    return iconContent;
  }
}

module.exports = Icon;

