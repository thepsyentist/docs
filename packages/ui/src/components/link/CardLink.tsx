import React from 'react';
import styled from 'styled-components';
import styleToken from '../../core/styleToken';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
};

const CardLink = ({ title, description, imageSrc, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <img src={imageSrc} width={24} height={24} alt="아이콘" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default CardLink;

const Container = styled.div`
  color: #191f28;
  position: relative;
  width: 100%;
  background-color: ${styleToken.color.backgroundGrayLight};
  border-radius: 16px;
  padding: 16px;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: ${styleToken.color.gray200};
    transition: background-color 0.2s ease-in-out;
  }
  & + & {
    margin-left: 16px;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
`;

const Description = styled.span`
  font-size: 14px;
  margin-top: 8px;
`;
