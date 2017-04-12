var React = require('react');
var Col = require('react-bootstrap').Col;
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

const sideBarContent = (
        <ListGroup>
            <ListGroupItem href="#/Inbox" active>Inbox</ListGroupItem>
            <ListGroupItem href="#/Send-an-email">Send an email</ListGroupItem>
        </ListGroup>
);

class Sidebar extends React.Component {
  render() {
    return sideBarContent;
  }
}

module.exports = Sidebar;

