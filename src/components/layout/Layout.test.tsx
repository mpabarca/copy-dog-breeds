import React from 'react';
import {render} from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
