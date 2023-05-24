import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { SeroiLogo } from '@docs/ui/src/components/logo';

const config: DocsThemeConfig = {
  logo: <SeroiLogo />,
  search: {
    placeholder: '검색',
  },
  navigation: {
    prev: false,
    next: false,
  },
};

export default config;
