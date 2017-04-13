var React = require('react');
var Checkbox = require('react-bootstrap/lib/Checkbox');
class SearchBox extends React.Component  {
	render() {
		return(
			<div className="input-group">
        <input type="text" className="form-control" />
      	<div className="input-group-btn">
        	<button type="button" className="btn btn-default" tabindex="-1">
          	<i className="glyph-icon icon-search"></i>
          </button>
        </div>
      </div>
			);
	}
}

module.exports = SearchBox;