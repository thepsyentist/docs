import React from 'react';
import styled from "styled-components";

type Props = {
    title: string;
    description: string;
}

const CardLink = ({ title, description }: Props) => {
    return (
        <Container>
            <img src="/images/docs.svg" width={24} height={24} alt="아이콘" />
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
  background-color: #f2f4f6;
  border-radius: 16px;
  padding: 16px;
  height: 132px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  & + & {
    margin-left: 16px;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
`

const Description = styled.span`
    font-size: 14px;
    margin-top: 8px;
`;
