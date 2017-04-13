var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Sidebar = require('../includes/sidebar');
var InboxData = require('../includes/inboxData');
var SearchBox = require('../includes/SearchBox');

class MailBox extends React.Component {
  render() {
    return (
			<div className="row mailbox-wrapper">
      	<Row>
      		<Col xs={12} md={3}>
      			<Sidebar />
      		</Col>
      		<Col xs={12} md={9}>
	      		<div className="mail-header clearfix row">
	      			<div className="col-md-8">
	      				<span className="mail-title">Inbox</span>
	      			</div>
	    				<div className="float-right col-md-4 pad0A">
				        <SearchBox />
				    	</div>
	      		</div>
	      		<div className="mail-header clearfix row">
	      			<div className="col-md-8">
	      				<span className="mail-title"></span>
	      				<div className="btn-grp">
	      				</div>
	      			</div>
	      			<div className="col-md-4">
	      			</div>
	      		</div>
	      		<table className="table table-hover text-center">
			      	<InboxData inboxes={this.props.inboxes} />
			      </table>
      		</Col>
      	</Row>
      </div>     		
    );
  }
}

module.exports = MailBox;