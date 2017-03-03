var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            type: 'success',
            message: ''
        };
    },
    render() {
        return (
            <div className='row'>
                <div className="panel-group col-md-12">
                    <div className={"panel panel-"+this.props.type}>
                        <div className="panel-heading">
                            {this.props.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
