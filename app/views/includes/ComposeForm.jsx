var React = require('react');


class ComposeForm extends React.Component {
  render() {
  	let composeForm = (
			<form className="form-horizontal mrg15T" role="form" method="post" action="/sendEmail">
			  <div className="form-group row">
			    <label for="inputEmail1" className="col-sm-2 control-label">To:</label>
			    <div className="col-sm-8">
			      <input type="email" name="to" className="form-control" id="inputEmail1" placeholder="" />
			    </div>
			  </div>
			  <div className="form-group row">
		      <label for="inputEmail2" className="col-sm-2 control-label">CC:</label>
		      <div className="col-sm-8">
		        <input type="email" name="cc" className="form-control" id="inputEmail2" placeholder="" />
		      </div>
			  </div>
			  <div className="form-group row">
		      <label for="inputEmail3" className="col-sm-2 control-label">BCC:</label>
		      <div className="col-sm-8">
		        <input type="email" name="bcc" className="form-control" id="inputEmail3" placeholder="" />
		      </div>
			  </div>
			  <div className="form-group row">
			    <label for="inputEmail4" className="col-sm-2 control-label">Subject:</label>
			    <div className="col-sm-8">
			      <input type="text" name="subject" className="form-control" id="inputEmail4"  />
			    </div>
			  </div>
			  <div className="form-group row">
			    <label for="inputEmail4" className="col-sm-2 control-label">Message:</label>
			    <div className="col-sm-8">
			      <textarea className="form-control" rows="5" name="content"></textarea>
			    </div>
			  </div>
			  <div className="button-pane">
				  <input type="hidden" name="from"  value="jr@proisc.com" />
				  <input type="hidden" name="_csrf"  value={this.props.csrf_token} />
				  <button className="btn btn-info" >Send mail</button>
				  <a href="/" className="btn btn-link font-gray-dark">Cancel</a>
			  </div>
			</form>
		);

    return composeForm;
  }
}

module.exports = ComposeForm;

