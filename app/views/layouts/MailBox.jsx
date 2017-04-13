var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var ComposeButton = require('../includes/ComposeButton');
var Sidebar = require('../includes/sidebar');
var InboxData = require('../includes/inboxData');
var SearchBox = require('../includes/SearchBox');
var Icon = require('../includes/Icon');
var Settings = require('../includes/Settings');
var DropDown = require('../includes/DropDown');
var Pagination = require('../includes/Pagination');

class MailBox extends React.Component {
  render() {
    return (
			<div className="row mailbox-wrapper">
      	<Row>
      		<Col xs={12} md={3}>
      			<div className="content-box nav-list mrg15B">
      				<ComposeButton />
      				<Sidebar />
      			</div>
      		</Col>
      		<Col xs={12} md={9}>
      			<div className="content-box">
		      		<div className="mail-header clearfix row">
		      			<div className="col-md-8">
		      				<span className="mail-title">Inbox</span>
		      			</div>
		    				<div className="float-right col-md-4 pad0A">
					        <SearchBox />
					    	</div>
		      		</div>
		      		<div className="mail-toolbar clearfix">
	      				<div className="float-left">
	      					<a href="#" title="" className="btn btn-default mrg5R">
	          				<Icon iconType={"font-size-11 icon-refresh"} />
	          				<Settings />
	          				<DropDown />
	      					</a>
	      				</div>
	      				<div className="float-right">
	      					<div className="btn-toolbar">
	      						<Pagination />
	      					</div>
	      				</div>
		      		</div>
		      		<table className="table table-hover text-center">
				      	<InboxData inboxes={this.props.inboxes} />
				      </table>
			      </div>
      		</Col>
      	</Row>
      </div>     		
    );
  }
}

module.exports = MailBox;