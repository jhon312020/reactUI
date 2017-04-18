var React = require('react');
var DefaultLayout = require('../layouts/default');
var SingleMailBoxRenderer = require('../layouts/SingleMailBoxRenderer');

class SingleMailBox extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} >
        <SingleMailBoxRenderer mailData={this.props.mailData} errors={this.props.errors} csrf_token={this.props.csrf_token} />
      </DefaultLayout>
    );
  }
}

module.exports = SingleMailBox;