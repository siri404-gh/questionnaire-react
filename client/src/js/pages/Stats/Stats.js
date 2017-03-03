var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            results: []
        };
    },
    componentWillMount: function() {
        var results = [];
        var self = this;
        $.ajax({
            method: 'GET',
            url: 'http://localhost:5000/response',
            success: function(data) {
                data.forEach(function(d, i) {
                    results.push(
                        <div className='row row-underline' key={i}>
                            <div className='col-md-3'>
                                {d.emailID}
                            </div>
                            <div className='col-md-3'>
                                {d.marks}
                            </div>
                        </div>
                    );
                });
                self.setState({
                    results: results
                });
            },
            error: function(data) {
                console.log(data);
            }
        });
    },
    render: function() {
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h2> Stats </h2>
                <div className='results col-md-6'>
                    {this.state.results}
                </div>
            </div>
        );
    }
});
