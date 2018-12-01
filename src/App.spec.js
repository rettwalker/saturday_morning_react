import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Login from './components/login'

describe('tests for the main component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  let wrapper
  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  it('render a component that has a class called App', () => {
    expect(wrapper.find('.App')).toHaveLength(1)
  })

  it('render a component called Login', () => {
    expect(wrapper.find(Login)).toHaveLength(1)
  })
})



