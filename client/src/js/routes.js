var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var Logout = require('./pages/Logout/Logout');
var Question = require('./pages/Question/Question');
var Stats = require('./pages/Stats/Stats');
var Submit = require('./pages/Submit/Submit');

module.exports = (
    <Route>
        <Route handler={Master}>
            <DefaultRoute handler={Home} name="Home"/>
        </Route>
        <Route handler={Home} name="a" path="/home*"/>
        <Route handler={Logout} name="b" path="/logout"/>
        <Route handler={Question} name="c" path="/question/:id"/>
        <Route handler={Submit} name="d" path="/submit"/>
        <Route handler={Stats} name="e" path="/stats"/>
    </Route>
);
