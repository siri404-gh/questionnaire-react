var React = require('react');
var $  = require('jquery');

module.exports = React.createClass({
    getDefaultProps() {
        return  {
            type: 'primary',
            message: 'Collapsible Panel',
        };
    },
    toggleClass(e) {
        var el = e.target;
        var elem = $(el).find('.rotateLeft');
        if(elem.length) $(elem).removeClass('rotateLeft').addClass('rotateRight');
        else $(el).find('.indicator').removeClass('rotateRight').addClass('rotateLeft');
    },
    render() {
        var id = 'collapse-div-'+Math.floor(Math.random()*1000);
        return (
            <div>
                <div className='row'>
                    <div className={"panel-group col-md-12 collapse-panel"} data-toggle="collapse" data-target={"#"+id}>
                        <div className={"panel panel-"+ this.props.type}>
                            <div className="panel-heading" onClick={this.toggleClass}>
                                <b>{this.props.message}</b>
                                <i className="indicator glyphicon glyphicon-chevron-down pull-right rotate"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={id} className='collapse in'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});
