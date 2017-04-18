var React = require('react');
var Icon = require('./Icon');
class DropDown extends React.Component {
	/* Todo: Need to modify */
  render() {
 	 	const dropDownContent = (
			<ul className="dropdown-menu float-right">
        <li>
          <a href="#" title="">
            <i className="glyph-icon icon-edit mrg5R"></i>
              Edit
          </a>
        </li>
        <li>
          <a href="#" title="">
            <i className="glyph-icon icon-calendar mrg5R"></i>
              Schedule
          </a>
          
        </li>
        <li>
          <a href="#" title="">
            <i className="glyph-icon icon-download mrg5R"></i>
              Download
          </a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#" className="font-red" title="">
            <i className="glyph-icon icon-remove mrg5R"></i>
              Delete
          </a>
        </li>
      </ul>
 		);
    return dropDownContent;
  }
}

module.exports = DropDown;

