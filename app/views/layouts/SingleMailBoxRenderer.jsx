var React = require('react');
var Sidebar = require('../includes/sidebar');
var ComposeButton = require('../includes/ComposeButton');

class SingleMailBoxRenderer extends React.Component {

  render() {
    let errors = '';
    let mailData = this.props.mailData;

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
		      				<span className="mail-title">View Message</span>
		      			</div>
		    				<div className="float-right col-md-4 pad0A">
		    				</div>
		      		</div>
		      		<div className="divider"></div>
              <div className="pad15A clearfix mrg10B">
                <div className="float-left">
                    <b>{mailData.from}</b> <i>to</i> <b>{mailData.to}</b>
                </div>

                <div className="float-right opacity-80">
                    <i className="glyph-icon icon-clock-o mrg5R"></i>
                    {new Date(mailData.created).toLocaleString()}
                </div>
              </div>

              <div className="mail-toolbar clearfix">
                <div className="float-left">
                    <h4 className="font-primary">{mailData.subject}</h4>
                </div>
                <div className="float-right">
                    <a href="#" className="btn btn-primary" title="Reply">
                        Reply
                        <i className="glyph-icon icon-mail-reply"></i>
                    </a>&nbsp;&nbsp;
                    <a href="#" className="btn btn-default" title="Print">
                        <i className="glyph-icon icon-print"></i>
                    </a>&nbsp;
                    <a href="#" className="btn btn-danger mrg10L" title="Delete">
                        <i className="glyph-icon icon-trash-o"></i>
                    </a>
                </div>
              </div>

              <div className="email-body">
                {mailData.content}
              </div>

              <div className="button-pane">
                <a href="#" className="btn btn-blue-alt" title="Reply">
                    <i className="glyph-icon icon-mail-reply"></i>&nbsp;
                    Reply
                </a>
                &nbsp;&nbsp;
                <a href="#" className="btn btn-default" title="Reply">
                    Forward &nbsp;
                    <i className="glyph-icon icon-mail-forward"></i>
                </a>
              </div>

			      </div>
      		</div>
      </div>     		
    );
  }
}

module.exports = SingleMailBoxRenderer;