/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import { expect, it, jest } from '@jest/globals';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SearchButton from '../../src/components/SearchButton';

jest.mock('native-base', () => {
  return {
    IconButton: 'IconButton',
    CloseIcon: 'CloseIcon',
    SearchIcon: 'SearchIcon',
  };
});

it('renders correctly search button', () => {
  renderer.create(
    <SearchButton openSearchbar={() => {}} closeSearchbar={() => {}} isOpenSearchbar={false} />
  );
});

it('renders correctly search button when searchbar is open', () => {
  renderer.create(
    <SearchButton openSearchbar={() => {}} closeSearchbar={() => {}} isOpenSearchbar={true} />
  );
});

it('calls openSearchbar when search button is pressed', () => {
  const openSearchbar = jest.fn();
  const closeSearchbar = jest.fn();
  const tree = renderer.create(
    <SearchButton
      openSearchbar={openSearchbar}
      closeSearchbar={closeSearchbar}
      isOpenSearchbar={false}
    />
  );
  tree.root.findByProps({ testID: 'search-button' }).props.onPress();
  expect(openSearchbar).toBeCalled();
});

it('calls closeSearchbar when search button is pressed', () => {
  const openSearchbar = jest.fn();
  const closeSearchbar = jest.fn();
  const tree = renderer.create(
    <SearchButton
      openSearchbar={openSearchbar}
      closeSearchbar={closeSearchbar}
      isOpenSearchbar={true}
    />
  );
  tree.root.findByProps({ testID: 'search-button' }).props.onPress();
  expect(closeSearchbar).toBeCalled();
});
