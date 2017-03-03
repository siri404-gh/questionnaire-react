var React = require('react');

module.exports = React.createClass({
    login() {
        var un = this.refs.un.value;
        var pw = this.refs.pw.value;
        this.props.handleLogin(un, pw);
    },
    render() {
        return (
            <div className={'col-md-'+this.props.width}>
                <form role="form" onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="email">Username:</label>
                        <input type="text" className="form-control" ref="un" id="userName" placeholder="Username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" ref="pw" id="pwd" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <div className='row'>
                            <div className='col-xs-3'>
                                <button type="button" onClick={this.login} className="btn btn-default">Submit</button>
                            </div>
                            <div className='col-xs-3'>
                                <button type="reset" id='reset-button' className="btn btn-default">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});
