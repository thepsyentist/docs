import { SeroiLogo } from '@docs/ui/src/components/logo';
import { DocsThemeConfig } from 'nextra-theme-docs';

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
