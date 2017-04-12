var React = require('react');
var Header = require('../includes/header');
var Sidebar = require('../includes/sidebar');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var PageHeader = require('react-bootstrap/lib/PageHeader');


class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />

        	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.8/react-bootstrap.min.js"></script>
        </head>
        <body>
        	<Grid>
	        	<PageHeader>
	        			<Header />
	        	</PageHeader>
	        	<Row>
	        		<Col xs={12} md={3}>
	        			<Sidebar />
	        		</Col>
	        		<Col xs={12} md={9}>
	        			{this.props.children}
	        		</Col>
	        	</Row>
	        </Grid>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;