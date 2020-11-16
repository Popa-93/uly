import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import Touche from './Touche';
import Sound from 'react-sound';

describe( 'Each Touche', () => {
    test('contains an image', () => {
        const wrapper = shallow(<Touche name="Coq" soundURL="coq.mp3" img="coq.jpg"/>);
        expect(wrapper.find("img")).to.exist;
    });
    test('contains an associated sound', () => {
        const wrapper = shallow(<Touche name="Coq" soundURL="coq.mp3" img="coq.jpg"/>);
        expect(wrapper.find("Sound")).to.exist;
    });
  });