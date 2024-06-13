/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import { it, jest } from '@jest/globals';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HomeScreen from '../../src/screens/home';
import { wrapper } from '../queryClient.test';

jest.mock('native-base', () => {
  return {
    Center: 'Center',
    Heading: 'Heading',
    Text: 'Text',
    Box: 'Box',
    Spinner: 'Spinner',
  };
});

it('renders correctly', () => {
  renderer.create(wrapper({ children: <HomeScreen /> }));
});

// it('renders correctly with searchbar open', () => {
//   jest.mock('../../src/hooks/useSearchbar', () => {
//     return {
//       useSearchbar: () => ({ isOpen: true }),
//     };
//   });
//   const tree = renderer.create(wrapper({ children: <HomeScreen /> }));
//   expect(tree.toJSON()).toMatchSnapshot();
// });

// it('renders correctly with searchbar closed', () => {
//   jest.mock('../../src/hooks/useSearchbar', () => {
//     return {
//       useSearchbar: () => ({ isOpen: false }),
//     };
//   });
//   const tree = renderer.create(wrapper({ children: <HomeScreen /> }));
//   expect(tree.toJSON()).toMatchSnapshot();
// });
