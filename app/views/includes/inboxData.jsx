var React = require('react');
var Checkbox = require('react-bootstrap/lib/Checkbox');
class InboxData extends React.Component  {
	render() {
			const tableData = this.props.inboxes.map((item)=>
				<tr>
					<td><Checkbox></Checkbox></td>
					<td>{item.name}</td>
					<td>{item.content}</td>
					<td>{item.date}</td>
				</tr>
			);
		return (<tbody>{tableData}</tbody>);
	}
}

module.exports = InboxData;