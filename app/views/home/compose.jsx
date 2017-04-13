var React = require('react');
var DefaultLayout = require('../layouts/default');
var ComposeMail = require('../layouts/ComposeMail');
var InboxData = require('../includes/inboxData');
var Table = require('react-bootstrap/lib/Table');
var Panel = require('react-bootstrap/lib/Panel');

class Compose extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} >
        <ComposeMail />
      </DefaultLayout>
    );
  }
}

module.exports = Compose;