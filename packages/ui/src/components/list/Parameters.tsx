import React from 'react';
import styled from 'styled-components';
import styleToken from '../../core/styleToken';
import { Attribute } from '../../types/list.type';
import { HStack } from '../flex';
import VStack from '../flex/VStack';

type Props = {
  title: string;
  attributes: Attribute[];
};

const Parameters = ({ title, attributes }: Props) => {
  return (
    <Container>
      <HStack style={{ padding: '12px 20px', backgroundColor: styleToken.color.backgroundGrayLight }}>
        <Text fontSize={14} fontWeight={700} color="#2a2f45">
          {title}
        </Text>
      </HStack>
      {attributes.map((attribute) => (
        <Parameter key={attribute.name} attribute={attribute} />
      ))}
    </Container>
  );
};

export default Parameters;

const Parameter = ({ attribute }: { attribute: Attribute }) => (
  <VStack style={{ borderTop: `1px solid ${styleToken.color.border}`, padding: '16px 20px' }}>
    <ParameterHeading>
      <Text fontSize={14} fontWeight={500} color="#2a2f45" style={{ marginRight: '10px' }}>
        {attribute.name}
      </Text>
      <Text fontSize={12} fontWeight={700} color={attribute.required ? styleToken.color.textRequired : styleToken.color.textSelection}>
        {attribute.required ? '필수' : '선택'}
      </Text>
      <Dot />
      <Text fontSize={12} fontWeight={700} color={styleToken.color.textDataType}>
        {attribute.type}
      </Text>
      {attribute.link && (
        <Link href={attribute.link} target="_blank" rel="noreferrer">
          자세히
        </Link>
      )}
    </ParameterHeading>
    <p style={{ marginTop: '8px', whiteSpace: 'pre-wrap' }}>
      <Text fontSize={13} fontWeight={500} color={styleToken.color.textDescription}>
        {attribute.description}
      </Text>
    </p>
  </VStack>
);

const Container = styled(VStack)`
  max-width: 730px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  margin-top: 20px;
`;

const ParameterHeading = styled(HStack)`
  & > * {
    margin-right: 2px;
  }
`;

type TextProps = {
  fontSize: number;
  fontWeight: number;
  color: string;
  alignItems?: string;
};

const Text = styled.span<TextProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const Link = styled.a`
  color: ${styleToken.color.link};
  font-size: 12px;
  line-height: 24px;
  font-weight: 700;
  margin-left: 10px;
  text-decoration: underline;
`;

const Dot = styled.span`
  &::before {
    content: '⋅';
  }
`;
