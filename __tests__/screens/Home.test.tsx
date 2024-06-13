/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import { expect, it, jest } from '@jest/globals';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HomeScreen from '../../src/screens/home';

jest.mock('native-base', () => {
  return {
    Center: 'Center',
  };
});

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});

it('renders correctly with searchbar open', () => {
  jest.mock('../../src/hooks/useSearchbar', () => {
    return {
      useSearchbar: () => ({ isOpen: true }),
    };
  });
  const tree = renderer.create(<HomeScreen />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders correctly with searchbar closed', () => {
  jest.mock('../../src/hooks/useSearchbar', () => {
    return {
      useSearchbar: () => ({ isOpen: false }),
    };
  });
  const tree = renderer.create(<HomeScreen />);
  expect(tree.toJSON()).toMatchSnapshot();
});
