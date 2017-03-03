var React = require('react');
var $ = require('jquery');
var NavBar = require('../../components/Navbar/Navbar');
var CollapsePanel = require('../../components/CollapsePanel/CollapsePanel');
var count = 0;
var answerKey = require('../../utils/utils').answers;

module.exports = React.createClass({
    componentDidMount: function() {
        $.ajax({
            method: 'POST',
            url: 'http://localhost:5000/response',
            data: {
                employeeID: 100,
                emailID: sessionStorage.getItem('username'),
                marks: count
            },
            success: function(data) {
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
        });
    },
    render: function() {
        var markedAns = [];
        for(var i = 0; i < 15; i++){
            markedAns[i] = sessionStorage.getItem(i+1);
            count+= (markedAns[i]==answerKey[i])?1:0;
        }
        var marks = (count/15)*100;
        return (
            <div>
            <NavBar logged={sessionStorage.getItem('logged')}/>
            <h3>Congratulations!!!</h3>
            You scored {Math.round(marks)}%
            </div>
        );
    },
    componentDidmountt: function() {
        $('#myModal').modal('toggle');
    }
});
