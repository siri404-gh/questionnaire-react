var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');

module.exports = React.createClass({
    render() {

        return (
            <div>
                <div className= 'row padder'>
                    <div className='col-md-4'>
                        <a href = "/files/1.pp" download>
                                <img src="/images/ppt1.png" id="src1" className="img-thumbnail imgs_size" alt="Cinque Terre"/>
                        </a>
                    </div>
                    <div className='col-md-4'>
                        <a href = "/files/PPT_TechProc.pptx" download>
                            <img src="/images/ppt2.png" className="img-thumbnail imgs_size" alt="Cinque Terre"/>
                        </a>
                    </div>
                    <div className='col-md-4'>
                        <a href = "/files/PPT_Interview.pdf" download>
                            <img src="/images/pdf1.png" className="img-thumbnail imgs_size" alt="Cinque Terre"/>
                        </a>
                    </div>
                </div>
                <div className='row padder'>
                    <div className='col-md-12'>
                        <Link to="/question/1" className='centerify'>
                            <button className='btn btn-default padder'>Start</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
});
