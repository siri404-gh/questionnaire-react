var React = require('react');
var Navbar = require('../../components/Navbar/Navbar');
var Panel = require('../../components/Panel/Panel');
var Login = require('../../components/Login/Login');
var Presentations = require('../../components/Presentations/Presentations');
var CollapsePanel = require('../../components/CollapsePanel/CollapsePanel');
var Jumbotron = require('../../components/Jumbotron/Jumbotron');
var users = require('../../utils/utils').users;

module.exports = React.createClass({
    getInitialState: function() {
        return {
            logged : sessionStorage.getItem('logged'),
            loginWarning: false,
            loginWarningPanelType: '',
            loginWarningPanelMessage: ''
        };
    },
    loginHandler: function(un, pw) {
        var self = this;
        users.filter(function(user) {
            if (user.username == un && user.password == pw) {
                self.setState({
                    logged: true,
                    loginWarning: false
                });
                sessionStorage.setItem('logged', Math.random());
                sessionStorage.setItem('username', un);
            } else {
                self.setState({
                    loginWarning: true,
                    loginWarningPanelType: 'danger',
                    loginWarningPanelMessage: 'Wrong Credentials!'
                });
            }
        });
    },
    render: function() {
        var content = [];
        var message = [];
        var width;
        if (this.state.logged) {
            content = [<Presentations key='1'/>];
            message = 'Please go through these documents before you proceed.';
            width = '12';
        } else {
            width = '6';
            content = [<Login key="1" handleLogin={this.loginHandler}/>];
            message = 'Login';
        }
        var PanelWarning = [];
        if(this.state.loginWarning) {
            PanelWarning.push(<Panel key='1' type={this.state.loginWarningPanelType} message={this.state.loginWarningPanelMessage}/>);
        }
        return (
            <div>
                <Navbar logged={this.state.logged}/>
                <div className='row'>
                    <div className={'col-md-'+width}>
                        {PanelWarning}
                        <CollapsePanel message={message} type='warning'>
                            {content}
                        </CollapsePanel>
                    </div>
                </div>
            </div>
        );
    }
});
