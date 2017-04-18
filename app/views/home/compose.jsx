var React = require('react');
var DefaultLayout = require('../layouts/default');
var ComposeMail = require('../layouts/ComposeMail');

class Compose extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} >
        <ComposeMail errors={this.props.errors} csrf_token={this.props.csrf_token} />
      </DefaultLayout>
    );
  }
}

module.exports = Compose;