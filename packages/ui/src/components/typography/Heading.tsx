import React from 'react';
import styled from 'styled-components';
import { styleToken } from '../../core';
import { Badge } from '../badge';

type Props = {
  title: string;
  type: 'bucket' | 'doc' | 'userData' | 'module';
};

const BadgeColors = {
  bucket: styleToken.color.primary,
  doc: styleToken.color.primary,
  userData: styleToken.color.red400,
  module: styleToken.color.orange400,
} as const;

export const Heading = ({ title, type }: Props) => {
  return (
    <Container className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-8 nx-text-2xl">
      {title}
      {type && (
        <Badge color={styleToken.color.white} backgroundColor={BadgeColors[type]} style={{ marginLeft: 10 }}>
          {type}
        </Badge>
      )}
      <span className="nx-absolute -nx-mt-20" id="container란" />
      <a href={`#${title}`} className="subheading-anchor" aria-label="Permalink for this section" />
    </Container>
  );
};

const Container = styled.h3`
  display: flex;
  align-items: center;
`;
