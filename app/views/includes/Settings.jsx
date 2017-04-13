var React = require('react');
var Icon = require('./Icon');
var Dropdown = require('./DropDown');
class Settings extends React.Component {
  render() {
 	 	const settingsContent = (
			<a href="#" title="" className="btn btn-default" data-toggle="dropdown">
      	<Icon iconType={"icon-cog"} />
        <Icon iconType={"icon-chevron-down"} />
      </a>
 		);
    return (settingsContent);
  }
}

module.exports = Settings;

