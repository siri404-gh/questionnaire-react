var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Panel = require('../../components/Panel/Panel');

module.exports = React.createClass({
    componentWillMount: function() {
        sessionStorage.clear();
    },
    render: function() {
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <Panel message="Successfully logged out!" type="success"/>
            </div>
        );
    }
});
