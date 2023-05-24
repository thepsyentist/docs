import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { SeroiLogo } from '@docs/ui/src/components/logo';

const config: DocsThemeConfig = {
  logo: <SeroiLogo />,
  project: {
    link: 'https://github.com/thepsyentist/seroi.docs',
  },
  search: {
    placeholder: '검색',
  },
};

export default config;
