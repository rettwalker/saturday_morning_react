import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from './index';

describe('tests for the login component', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Login />)
    })

    it('renders', () => {
        expect(wrapper.find('.Login')).toHaveLength(1)
    })

    it('render email field component', () => {
        //expect(wrapper.find('.App')).toHaveLength(1)
        fail("todo")
    })

    it('render password field component', () => {
        //expect(wrapper.find('.App')).toHaveLength(1)
        fail("todo")
    })

    it('render submit button', () => {
        //expect(wrapper.find('.App')).toHaveLength(1)
        fail("todo")
    })

    it('render register button', () => {
        //expect(wrapper.find('.App')).toHaveLength(1)
        fail("todo")
    })
})