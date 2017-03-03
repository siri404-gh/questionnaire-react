var React = require('react');
var Link = require('react-router').Link;
var NavBar = require('../../components/Navbar/Navbar');
var CollapsePanel = require('../../components/CollapsePanel/CollapsePanel');
var Pagination = require('../../components/Pagination/Pagination');
var questions = require('./questions');
module.exports = React.createClass({
    answer: function(el) {
        for (var question in this.refs) {
            sessionStorage.setItem(question, el.target.value);
        }
    },
    render: function() {
        var totalQuestions = 15;
        var next = +this.props.params.id+1;
        var previous = +this.props.params.id-1;
        if(this.props.params.id == 1) {
            previous = 15;
        }
        if (this.props.params.id == totalQuestions) {
            next = 1;
        }
        var question = questions.getQuestion(this.props.params.id, this);
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <div className='row'>
                    <div className='col-md-12'>
                        <CollapsePanel message={"Question "+this.props.params.id}>
                            {question}
                            <Pagination previous={previous} next={next}/>
                        </CollapsePanel>
                    </div>
                </div>
            </div>
        );
    },
    componentDidMount: function() {
        var answer = sessionStorage.getItem(this.props.params.id);
        if(answer) {
            $('input[value='+answer+']').attr('checked', true);
        }
    },
    componentDidUpdate: function() {
        var answer = sessionStorage.getItem(this.props.params.id);
        if(answer) {
            $('input[value='+answer+']').attr('checked', true);
        }
    }
});
