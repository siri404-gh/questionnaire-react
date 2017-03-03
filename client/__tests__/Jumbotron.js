jest.unmock('../src/js/components/Jumbotron/Jumbotron');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Jumbotron from '../src/js/components/Jumbotron/Jumbotron';

describe('Jumbotron', () => {
    it('should exist', function() {
        var Jumbo = TestUtils.renderIntoDocument(<Jumbotron/>);
        expect(TestUtils.isCompositeComponent(Jumbo)).toBeTruthy();
    });

    // it('displays a given message of the given type', () => {
    //     var message = 'test';
    //     var type = "success";
    //     const panel = TestUtils.renderIntoDocument(
    //         <Panel message={message} type={type}/>
    //     );
    //     const heading = TestUtils.scryRenderedDOMComponentsWithClass(panel, 'panel-heading');
    //     expect(heading.length).toEqual(1);
    //     expect(heading[0].textContent).toEqual(message);
    //
    //     const panelType = TestUtils.scryRenderedDOMComponentsWithClass(panel, 'panel-success');
    //     expect(panelType.length).toEqual(1);
    // });
});
