var React = require('react');
var Checkbox = require('react-bootstrap/lib/Checkbox');
class InboxData extends React.Component  {

	constructor() {
		super();
		this.singleMailBox = this.singleMailBox.bind(this);
	}

	singleMailBox(id) {
		console.log(id);
	}

	render() {
			const tableData = this.props.inboxes.map((item)=>
				<tr key={item} >
					<td>
						<Checkbox onClick={this.singleMailBox(item.id)}></Checkbox>
						{/* Todo: need to check on the checbox with the theme
							<div className="checker" id={`uniform-mail-checkbox-${index}`}>
							<span className="">
								<input type="checkbox" id={`mail-checkbox-${index}`} className="custom-checkbox" />
								<i className="glyph-icon icon-check"></i>
							</span>
							</div> 
						*/}
					</td>
					<td><i className="glyph-icon icon-star"></i></td>
					<td>{item.from}</td>
					<td>{item.content}</td>
					<td><i className="glyph-icon icon-paperclip"></i></td>
					<td>{(new Date(item.created)).toLocaleString()}</td>
				</tr>
			);
		return (<tbody>{tableData}</tbody>);
	}
}

module.exports = InboxData;