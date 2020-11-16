import ReactDOM from 'react-dom'
import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import App from './App';


describe( 'Ulybox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  });
  it('contains 3 <Touche>s', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Touche')).to.have.length(3);
  });
});

describe( 'Each Touche', () => {
  if('contains an image', () => {
  });
  if('contains a <Sound>', () => {
    expect(false).to.be(true);
  });
});
