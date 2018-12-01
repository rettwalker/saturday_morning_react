import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';
import InputField from '../inputField'

describe('tests for the login component', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Login />)
    })

    it('renders', () => {
        expect(wrapper.find('.Login')).toHaveLength(1)
    })

    it('render email field component', () => {
        expect(wrapper.find('InputField[name="email"]')).toHaveLength(1)
    })

    it('render password field component', () => {
        expect(wrapper.find('InputField[name="password"]')).toHaveLength(1)
    })

    xit('render submit button', () => {
        expect(wrapper.contains(<button>Login</button>)).toBe(true)
    })

    it('render register button', () => {
        expect(wrapper.contains(<button>Register</button>)).toBe(true)
    })
})