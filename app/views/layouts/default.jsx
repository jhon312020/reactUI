var React = require('react');
var Header = require('../includes/header');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var PageHeader = require('react-bootstrap/lib/PageHeader');


class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
					<link rel="stylesheet" href="/css/app.css" />
					<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.8/react-bootstrap.min.js"></script>
		    </head>
        <body>
        	<div id="page-wrapper" className="container">
	        	<PageHeader>
        			<Header />
	        	</PageHeader>
	        	<div id="page-content-wrapper">
	        		<div id="page-content">
	        			<div id="container">
	        				{this.props.children}
	        			</div>
	        		</div>
	        	</div>
	        </div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;