var React = require('react');

const composeForm = (
	<form className="form-horizontal mrg15T" role="form">
	  <div className="form-group row">
	    <label for="inputEmail1" className="col-sm-2 control-label">To:</label>
	    <div className="col-sm-8">
	      <input type="email" className="form-control" id="inputEmail1" placeholder="" />
	    </div>
	  </div>
	  <div className="form-group row">
      <label for="inputEmail2" className="col-sm-2 control-label">CC:</label>
      <div className="col-sm-8">
        <input type="email" className="form-control" id="inputEmail2" placeholder="" />
      </div>
	  </div>
	  <div className="form-group row">
      <label for="inputEmail3" className="col-sm-2 control-label">BCC:</label>
      <div className="col-sm-8">
        <input type="email" className="form-control" id="inputEmail3" placeholder="" />
      </div>
	  </div>
	  <div className="form-group row">
	    <label for="inputEmail4" className="col-sm-2 control-label">Subject:</label>
	    <div className="col-sm-8">
	      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label for="inputEmail4" className="col-sm-2 control-label">Message:</label>
	    <div className="col-sm-8">
	      <textarea rows="5" cols="56"></textarea>
	    </div>
	  </div>
	</form>   
);

class ComposeForm extends React.Component {
  render() {
    return composeForm;
  }
}

module.exports = ComposeForm;

