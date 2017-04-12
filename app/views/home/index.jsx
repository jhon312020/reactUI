var React = require('react');
var DefaultLayout = require('../layouts/default');
var InboxData = require('../includes/inboxData');
var Table = require('react-bootstrap/lib/Table');
var Panel = require('react-bootstrap/lib/Panel');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} >
        <Panel>
        	<Table>
        			<InboxData inboxes={this.props.inboxes} />
        	</Table>
        </Panel>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;