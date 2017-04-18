var React = require('react');
var ComposeButton = require('../includes/ComposeButton');
var Sidebar = require('../includes/sidebar');
var InboxData = require('../includes/inboxData');
var SearchBox = require('../includes/SearchBox');
var Icon = require('../includes/Icon');
var Settings = require('../includes/Settings');
var DropDown = require('../includes/DropDown');
var Pagination = require('../includes/Pagination');
var ComposeForm = require('../includes/ComposeForm');

class MailBox extends React.Component {

	constructor(props) {
		super(props);
		this.handlePageChange = this.handlePageChange.bind(this);
		this.state = {page:'inbox'};
	}

	handlePageChange(pageValue) {
		this.setState({
	    page:pageValue
	  });
	}

  render() {
  	let inboxContent = (<div className="content-box">
				      		<div className="mail-header clearfix row">
				      			<div className="col-md-8">
				      				<span className="mail-title">{this.props.title}</span>
				      			</div>
				    				<div className="float-right col-md-4 pad0A">
							        <SearchBox />
							    	</div>
				      		</div>
				      		<div className="mail-toolbar clearfix">
			      				<div className="float-left">
			      					<a href="#" className="btn btn-default mrg5R">
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
					      </div>);

		let composeMailContent = (<div className="content-box">
				      		<div className="mail-header clearfix row">
				      			<div className="col-md-8">
				      				<span className="mail-title">Compose new message</span>
				      			</div>
				    				<div className="float-right col-md-4 pad0A">
				    				</div>
				      		</div>
				      		<div className="divider"></div>
				    			<ComposeForm />
					      </div>);

  	let content = (this.state.page == 'inbox' && inboxContent ||
  									this.state.page == 'compose' && composeMailContent);

    return (
			<div className="row mailbox-wrapper">
      		<div className="col-xs-12 col-md-3">
      			<div className="content-box nav-list mrg15B">
      				<ComposeButton onClick={this.handlePageChange} />
      				<Sidebar />
      			</div>
      		</div>
      		<div className="col-xs-12 col-md-9">
      			{content}
      		</div>
      </div>
    );
  }
}

module.exports = MailBox;