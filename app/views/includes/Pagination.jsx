var React = require('react');
var Icon = require('./Icon');

class Pagination extends React.Component {
  render() {
 	 	const paginationContent = (
	 	 	<span>
		 	 	<div className="btn-group">
					<div className="size-md mrg10R"> 1 to 11 of 21 entries</div>
		    </div>
		    <div className="btn-group">
	        <a href="#" className="btn btn-default">
	        	<i className="glyph-icon icon-angle-left"></i>
	        </a>
	        <a href="#" className="btn btn-default">
	        	<i className="glyph-icon icon-angle-right"></i>
	        </a>
	    	</div>
	    </span>
 		);
    return (paginationContent);
  }
}

module.exports = Pagination;

