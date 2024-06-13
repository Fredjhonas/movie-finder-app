/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import { expect, it, jest } from '@jest/globals';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SearchBar from '../../src/components/SearchBar';

jest.mock('native-base', () => {
  return {
    IconButton: 'IconButton',
    Input: 'Input',
    SearchIcon: 'SearchIcon',
    SmallCloseIcon: 'SmallCloseIcon',
    VStack: 'VStack',
  };
});

it('renders correctly searchbar', () => {
  renderer.create(<SearchBar search="" onChange={() => {}} />);
});

it('calls onChange when text is changed', () => {
  const onChange = jest.fn();
  const tree = renderer.create(<SearchBar search="" onChange={onChange} />);
  tree.root.findByProps({ testID: 'search-input' }).props.onChangeText('text');
  expect(onChange).toBeCalledWith('text');
});

it('calls onChange when close button is pressed', () => {
  const onChange = jest.fn();
  const tree = renderer.create(<SearchBar search="text" onChange={onChange} />);
  tree.root.findByProps({ testID: 'search-input' }).props.InputRightElement.props.onPress();
  expect(onChange).toBeCalledWith('');
});
