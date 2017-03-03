var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function(){
        var questions = [];
        for (var i = 0; i < 15; i++) {
            questions.push(
                <Link key={i} to={"/question/"+(i+1)}>
                    <button className='btn btn-default padder'>{i+1}</button>
                </Link>
            );
        }
        var count = 0;
        for(var i=1; i<=15; i++){
            count+= (sessionStorage.getItem(i))? 1 : 0;
        }

        return (
            <div>
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Well Done</h4>
                      </div>
                      <div className="modal-body">
                        <p>You have answered {count} questions. Are you sure you want to submit?</p>
                      </div>
                      <div className="modal-footer">
                        <Link to="/submit">
                          <button className='btn btn-primary padder'>Submit</button>
                        </Link>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <Link to={"/question/"+this.props.previous}>
                            <button className='btn btn-primary padder'>Previous</button>
                        </Link>
                    </div>
                    <div className='col-md-8'>
                        {questions}
                    </div>
                    <div className='col-md-2'>
                        <Link to={"/question/"+this.props.next}>
                            <button className='btn btn-primary padder'>Next</button>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 center-align'>
                        <button className='btn btn-danger' data-toggle="modal" data-target="#myModal">Submit</button>
                    </div>
                </div>
            </div>
        );
    },
    componentWillUnmount: function() {
        $('#myModal').modal('toggle');
    }
});
