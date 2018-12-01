import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

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
})



