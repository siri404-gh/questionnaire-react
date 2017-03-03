var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    getDefaultProps() {
        return {
            type: 'inverse',
            logged: false
        };
    },
    render() {
        var links = [];
        if(this.props.logged) {
            links.push(
                <li key={Math.random()}>
                    <Link to="/stats">
                        <span className='glyphicon glyphicon-search'></span> <span className='navbar-link-text'>Stats</span>
                    </Link>
                </li>,
                <li key={Math.random()}>
                    <Link to="/logout">
                        <span className='glyphicon glyphicon-off'></span> <span className='navbar-link-text'>Logout</span>
                    </Link>
                </li>
            );
        }
        return (
            <div className='row'>
                <header className='col-md-12'>
                    <nav className={"navbar navbar-"+this.props.type}>
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="/"><img src='/images/logo.png'/></a>
                          <a className="navbar-brand" href="#">Navbar</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/home"><span className='glyphicon glyphicon-home'></span> <span className='navbar-link-text'>Home</span></Link></li>
                                {links}
                            </ul>
                        </div>
                      </div>
                    </nav>
                </header>
            </div>
        );
    }
});
