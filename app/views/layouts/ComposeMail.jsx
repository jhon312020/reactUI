var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var ComposeButton = require('../includes/ComposeButton');
var ComposeForm = require('../includes/ComposeForm');
var Sidebar = require('../includes/sidebar');

class ComposeMail extends React.Component {
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
		      				<span className="mail-title">Compose new message</span>
		      			</div>
		    				<div className="float-right col-md-4 pad0A">
		    				</div>
		      		</div>
		      		<div className="divider"></div>
		    			<ComposeForm />
			      </div>
      		</Col>
      	</Row>
      </div>     		
    );
  }
}
module.exports = ComposeMail;