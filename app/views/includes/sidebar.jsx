var React = require('react');
var Col = require('react-bootstrap').Col;
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var Badge = require('./Badge');
var Icon = require('./Icon');

const messages = ['Message1', 'Message2', 'Message3'];
const sentMessages = ['sent2', 'sent3', 'sent4', 'sent5'];
const sideBarContent = (
	<ListGroup>
    <ListGroupItem href="/">
    	<Icon iconType={"font-gray icon-inbox"} /> Inbox 
    	<Badge counter={messages.length} badgeColor={"bg-blue"}/> 
    </ListGroupItem>
    <ListGroupItem href="#/Send-an-email">
    	<Icon iconType={"font-gray icon-envelope-o"} /> Sent Mail 
    	<Badge counter={sentMessages.length} badgeColor={"bg-azure"}/>
    </ListGroupItem>
	</ListGroup>
);

class Sidebar extends React.Component {
  render() {
    return sideBarContent;
  }
}

module.exports = Sidebar;

