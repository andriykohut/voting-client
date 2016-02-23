import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';


describe('voting', () => {

  it('renders a pair of buttons', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Voting pair={['Trainspotting', '28 Days Later']} />
    );
    const component = renderer.getRenderOutput();
    const buttons = component.props.children;

    expect(buttons.length).to.equal(2);
    expect(buttons[0].key).to.equal('Trainspotting');
    expect(buttons[1].key).to.equal('28 Days Later');
  });

  it('invokes callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = TestUtils.renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']}
              vote={vote} />
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
    TestUtils.Simulate.click(buttons[0]);

    expect(votedWith).to.equal('Trainspotting');
  });

});
