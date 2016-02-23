import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';


describe('voting', () => {

  it('renders a pair of buttons', () => {
    const component = TestUtils.renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} />
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

});
