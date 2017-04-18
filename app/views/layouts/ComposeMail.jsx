var React = require('react');
var ComposeButton = require('../includes/ComposeButton');
var ComposeForm = require('../includes/ComposeForm');
var Sidebar = require('../includes/sidebar');

class ComposeMail extends React.Component {

  render() {
    let errors = '';

    if (this.props.errors) {
      errors = this.props.errors.map((item) =>
        <p>{item}</p>
      );
      if (errors != '') {
        errors = (<div className="alert alert-danger">{errors}</div>);
      }
    }

    return (
			<div className="row mailbox-wrapper">
      		<div className="col-xs-12 col-md-3">
      			<div className="content-box nav-list mrg15B">
      				<ComposeButton />
      				<Sidebar />
      			</div>
      		</div>
      		<div className="col-xs-12 col-md-9">
            {errors}
      			<div className="content-box">
		      		<div className="mail-header clearfix row">
		      			<div className="col-md-8">
		      				<span className="mail-title">Compose new message</span>
		      			</div>
		    				<div className="float-right col-md-4 pad0A">
		    				</div>
		      		</div>
		      		<div className="divider"></div>
		    			<ComposeForm csrf_token={this.props.csrf_token} />
			      </div>
      		</div>
      </div>     		
    );
  }
}
module.exports = ComposeMail;