var React = require('react');
var Header = require('../includes/header');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
					{/* To-do: This has to be changed currently loaded the minified version */}
					<link rel="stylesheet" href="/css/style-min.css" />
					<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.8/react-bootstrap.min.js"></script>
		    </head>
        <body>
        	<div id="page-wrapper" >
	        	<div className="page-header">
        			<Header />
	        	</div>
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