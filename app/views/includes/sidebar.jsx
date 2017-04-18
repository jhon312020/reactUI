var React = require('react');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var Badge = require('./Badge');
var Icon = require('./Icon');
var axios = require('axios');

const messages = ['Message1', 'Message2', 'Message3'];
const sentMessages = ['sent2', 'sent3', 'sent4', 'sent5'];

class Sidebar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {inboxCount:0, sentMailCount:0};
  }

  componentWillMount() {
    axios.get('http://localhost:3000/getUserMailCount').then(res => {
        this.setState({ inboxCount:res.data.inboxCount, sentMailCount:res.data.sentMailCount });
    });
  }

  render() {
    let sideBarContent = (
            <ListGroup>
            <ListGroupItem href="/">
                <Icon iconType={"font-gray icon-inbox"} /> Inbox 
                <Badge counter={this.state.inboxCount} badgeColor={"bg-blue"}/> 
            </ListGroupItem>
            <ListGroupItem href="/sentMail">
                <Icon iconType={"font-gray icon-envelope-o"} /> Sent Mail 
                <Badge counter={this.state.sentMailCount} badgeColor={"bg-azure"}/>
            </ListGroupItem>
            </ListGroup>
        );
    return sideBarContent;
  }
}

module.exports = Sidebar;

