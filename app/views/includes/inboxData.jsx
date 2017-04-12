var React = require('react');

class InboxData extends React.Component  {
	render() {
			let inboxes = [
  					{
  						name : 'Steven Koening',
  						content : 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.',
  						date : '12-April-2017'
  					},
  					{ 
  						name : 'Rubin Spinella',
  						content : 'The wise man therefore always holds in these matters to this principle of selection.',
  						date : '12-April-2017'
  					}
  			];
			let tableData = inboxes.map((item)=>
				<tr>
					<td><Checkbox></Checkbox></td>
					<td>{item.name}</td>
					<td>{item.content}</td>
					<td>{item.date}</td>
				</tr>
			);
		return tableData;
	}
}

module.exports = InboxData;