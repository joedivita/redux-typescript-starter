import * as React from 'react';
import * as ReactTestUtils from 'react-addons-test-utils';
import { MainLayout } from '../../../app/js/components/MainLayout/MainLayout';

describe('Footer', () => {
  it('renders', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <MainLayout/>
    );
  });
});