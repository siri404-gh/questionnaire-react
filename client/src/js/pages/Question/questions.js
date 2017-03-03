var React = require('react');
module.exports = {
    getQuestion: function(i, self) {
        var questions = [
            [
                <div key='1' className='col-md-12 question'>
                    In the question given below, a statement is followed by two arguments. You have to decide which of the given arguments is/are a/the strong argument. Mark the answer accordingly.<br/><br/>
                    <b>Statement</b>:<br/> Should jobs be delinked with academic degrees and diplomas? <br/><br/>
                    <b>Arguments</b>:<br/>
                    I. Yes, a very large number of candidates will apply so that the competition will be tough and the candidates will prepare more.<br/>
                    II. No, the importance of higher education will be diminished.<br/><br/>

                    <form role="form" key='1'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="1" name="optradio"/>A. Only argument I is strong.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="1" name="optradio"/>B. Neither argument I nor II is strong.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="1" name="optradio"/>C. Only argument II is strong.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="1" name="optradio"/>D. Both arguments I and II are strong.</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='2' className='col-md-12 question'>
                    Study the flowchart given below and answer the questions that follow:<br/><br/>
                    <img src='/images/2.png'/><br/><br/>
                    What is the purpose of the given flow­chart?<br/><br/>
                    I. Yes, a very large number of candidates will apply so that the competition will be tough and the candidates will prepare more.<br/>
                    II. No, the importance of higher education will be diminished.<br/><br/>

                    <form role="form" key='2'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="2" name="optradio"/>A. Organizing training for new employee.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="2" name="optradio"/>B. Recruitment process.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="2" name="optradio"/>C. Advertising hiring requirements.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="2" name="optradio"/>D. HR management process.</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='3' className='col-md-12 question'>
                    State whether the given statement is True or False.<br/><br/>
                    <b>Statement</b>: The given flowchart will never fail.<br/>

                    <form role="form" key='3'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="3" name="optradio"/>A. True</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="3" name="optradio"/>B. False</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="3" name="optradio"/>C. Cant be determined</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='4' className='col-md-12 question'>
                    In which of the following cases, the performance of an employee gets appraised?<br/><br/>
                    <form role="form" key='4'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="4" name="optradio"/>A. When performance expectations are met.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="4" name="optradio"/>B. When training outcome is evaluated.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="4" name="optradio"/>C. When required skills are achieved.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="4" name="optradio"/>D. When training is not required.</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='5' className='col-md-12 question'>
                    How many times decisions are taken during the flow of the given chart?<br/><br/>
                    <form role="form" key='5'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="5" name="optradio"/>A. 1</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="5" name="optradio"/>B. 2</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="5" name="optradio"/>C. 3</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="5" name="optradio"/>D. 4</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='6' className='col-md-12 question'>
                    In which of the following conditions the induction process is performed?<br/><br/>
                    <form role="form" key='6'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="6" name="optradio"/>A. When current employee is moved to the new position</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="6" name="optradio"/>B. When contractor/temp is engaged</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="6" name="optradio"/>C. When new employee is selected and appointed</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="6" name="optradio"/>D. In all of the mentioned conditions</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='7' className='col-md-12 question'>
                    Read the following information carefully and answer the questions that are given below it:<br/><br/>
                    A sales representative plans to visit each of the six companies M, N, P, Q, R and S exactly once during the course of one day. She is setting up her schedule for the day according to the following conditions:<br/><br/>
                    I. She must visit M before N and R. <br/>
                    II. She must visit N before Q. <br/>
                    III. The third company she visits must be P.<br/><br/>
                    Which of the following must be true regarding the sales representatives schedule?<br/>
                    <form role="form" key='7'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="7" name="optradio"/>A. She visits M before Q</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="7" name="optradio"/>B. She visits N before R</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="7" name="optradio"/>C. She visits P before M</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="7" name="optradio"/>D. She visits P before S</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='8' className='col-md-12 question'>
                    If the sales representative visits S first, which company must she visit second?<br/><br/>
                    <form role="form" key='8'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="8" name="optradio"/>A. M</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="8" name="optradio"/>B. N</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="8" name="optradio"/>C. P</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="8" name="optradio"/>D. Q</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='9' className='col-md-12 question'>
                    The sales representative could visit any of the following companies immediately after P; except:<br/><br/>
                    <form role="form" key='9'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="9" name="optradio"/>A. S</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="9" name="optradio"/>B. R</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="9" name="optradio"/>C. Q</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="9" name="optradio"/>D. M</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='10' className='col-md-12 question'>
                    Which of the following skills will you definitely measure while hiring for the role of Software Developer?<br/><br/>
                    <form role="form" key='10'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="10" name="optradio"/>A. Domain knowledge</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="10" name="optradio"/>B. Problem­Solving Skills</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="10" name="optradio"/>C. Learnability</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="10" name="optradio"/>D. Numerical Reasoning</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="e" onClick={self.answer} ref="10" name="optradio"/>E. Spoken English</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='11' className='col-md-12 question'>
                    Why is it important for a candidate applying for a job role in IT industry to have the zeal to keep learning?<br/><br/>
                    <form role="form" key='11'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="11" name="optradio"/>A. The IT industry is growing constantly and softwares are often frequently updated with new features.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="11" name="optradio"/>B. As zeal to keep learning accounts for a candidates will to acquire strong interpersonal skills, which is a must ­have skill in IT industry.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="11" name="optradio"/>C. To  explain  the  information  clearly  to  their  seniors  and  other  colleagues  and  should  also  be  able  to  work collaboratively with them to achieve results a candidate must possess zeal to keep learning.</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="11" name="optradio"/>D. To master the skills and also understands the business significance of the software application.</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='12' className='col-md-12 question'>
                    Shruti has been working as a salesperson for the past two years and has consistently achieved great sales numbers. Due to personal reasons, she has recently been unfocused at work and, as a result, her work performance has declined. Additionally, due to changes in the market, the sales figures of her team have decreased. Her director does not seem to be taking the changes in the market into account and is blaming her teams poor performance on poor leadership on her part.<br/>
                    Given the above scenario which skills must Shruti have to tackle the situation wisely?<br/><br/>
                    I. Emotional stability<br/>
                    II. Articulate<br/>
                    III. Benevolent<br/>
                    IV. Dissenting<br/>
                    V. Eloquent<br/>
                    VI. Tactful<br/><br/>
                    Choose the correct answer from the options given below.
                    <form role="form" key='12'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="12" name="optradio"/>A. Only I, II, IV and VI</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="12" name="optradio"/>B. Only I, III, V and VI</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="12" name="optradio"/>C. Only II, III, V and VI</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="d" onClick={self.answer} ref="12" name="optradio"/>D. All I, II, III, IV, V and VI</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='13' className='col-md-12 question'>
                    Consider the following psychometric report of a candidate and answer the questions that follow::<br/><br/>
                    <img src='/images/13.png'/> <br/> <br/>
                    Do you think that the candidate is fit to be interviewed for the hiring of a member in the Recruitment of an organisation?<br/><br/>
                    <form role="form" key='13'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="13" name="optradio"/>A. Yes</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="13" name="optradio"/>B. No</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="13" name="optradio"/>C. Cant Say</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='14' className='col-md-12 question'>
                    Do you think that the candidate is fit to be interviewed for the role of UI/UX designer of an organisation?<br/><br/>
                    <form role="form" key='14'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="14" name="optradio"/>A. Yes</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="14" name="optradio"/>B. No</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="14" name="optradio"/>C. Cant Say</label>
                        </div>
                    </form>
                </div>
            ],
            [
                <div key='15' className='col-md-12 question'>
                    Do you think that the candidate is fit to be interviewed for the role of Manager ­Client Relations of an organisation?<br/><br/>
                    <form role="form" key='15'>
                        <div className="radio">
                          <label><input type="radio" value="a" onClick={self.answer} ref="15" name="optradio"/>A. Yes</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="b" onClick={self.answer} ref="15" name="optradio"/>B. No</label>
                        </div>
                        <div className="radio">
                          <label><input type="radio" value="c" onClick={self.answer} ref="15" name="optradio"/>C. Cant Say</label>
                        </div>
                    </form>
                </div>
            ]
        ];
        return questions[+i-1];
    }
};
