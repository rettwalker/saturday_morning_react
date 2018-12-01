import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InputField from './index'

describe('tests for the InputField component', () => {
    let wrapper
    let props = { name: 'email' }
    beforeAll(() => {
        wrapper = shallow(<InputField {...props} />)
    })

    it('renders', () => {
        expect(wrapper.find('.InputField')).toHaveLength(1)
    })

    it('check for label tag', () => {
        expect(wrapper.find('label')).toHaveLength(1)
    })

    it('check for input box', () => {
        expect(wrapper.find('input')).toHaveLength(1)
    })

    it('check for valid label name', () => {
        expect(wrapper.find('label').text()).toEqual(props.name)
    })






})