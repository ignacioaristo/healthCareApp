// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

let component: any;

describe("<App />", () => {
  beforeEach(() => {
    component = render(<App />);
  })

  it('Renderiza correctamente'), () => {
    expect(component).toBeDefined;
  }
})
