var React = require('react');
var DefaultLayout = require('../layouts/default');
var MailBox = require('../layouts/MailBox');
var InboxData = require('../includes/inboxData');
var Table = require('react-bootstrap/lib/Table');
var Panel = require('react-bootstrap/lib/Panel');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} >
        <MailBox title={this.props.title} inboxes={this.props.inboxes} />
      </DefaultLayout>
    );
  }
}

module.exports = Index;