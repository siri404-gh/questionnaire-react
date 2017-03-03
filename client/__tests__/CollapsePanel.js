jest.unmock('../src/js/components/CollapsePanel/CollapsePanel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import CollapsePanel from '../src/js/components/CollapsePanel/CollapsePanel';
let Component;
let type;
let message;
let content;

describe('CollapsePanel', () => {
    beforeEach(function() {
        message = 'test';
        type = "success";
        content = [];
        content.push(
            <div className='testDiv' key="1">
                some content
            </div>
        );
        Component = TestUtils.renderIntoDocument(<CollapsePanel message={message} type={type} content={content}/>);
    });

    it('should exist', function() {
        expect(TestUtils.isCompositeComponent(Component)).toBeTruthy();
    });

    // it('Should render the correct panel type with the correct message', () => {
    //     const panelType = TestUtils.scryRenderedDOMComponentsWithClass(Component, 'panel-'+type);
    //     expect(panelType.length).toEqual(1);
    //
    //     const heading = TestUtils.scryRenderedDOMComponentsWithClass(Component, 'panel-heading');
    //     expect(heading[0].textContent).toEqual(message);
    //
    //     Component.toggleClass = jest.genMockFunction();
    //     var testDivContent = TestUtils.scryRenderedDOMComponentsWithClass(Component, 'in');
    //     var node = TestUtils.scryRenderedDOMComponentsWithClass(Component, 'panel-heading');
    //     // TestUtils.Simulate.click(node[0]);
    //     $('.panel-heading').click();
    //     expect(Component.toggleClass).toBeCalled();
    //     // var testDivContent = TestUtils.scryRenderedDOMComponentsWithClass(Component, 'in');
    //     // expect(testDivContent.length).toEqual(0);
    // });
});
