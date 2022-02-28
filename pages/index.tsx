import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import styled from '@emotion/styled';
import Box, { BoxProps } from '@mui/material/Box';

export const StyledBox = styled(Box)<BoxProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/assets/images/home-bg.png');
  background-size: cover;
  background-repeat: no-reapeat;
  position: relative;
  color: ${({ theme }) => theme.palette.common.white};
` as typeof Box;

export const HeadingWarpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
    margin-right:5px;
  }
`;

export const Heading = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
` as typeof Typography;

export const Paragraph = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
` as typeof Typography;

export const FooterWarpper = styled.div`
  position: absolute;
  bottom: 20px;
  text-align:center;
  img {
    width: 100px;
    height: auto;
  }
`

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <HeadingWarpper>
          <img src="./assets/icons/home.png" alt="#" />
          <Heading>Homepage</Heading>
        </HeadingWarpper>
        <Typography component="p" gutterBottom>
          a web3 gateway to hidden experiences
        </Typography>
        <FooterWarpper>
          <Typography component="p"  gutterBottom>
            powered by
          </Typography>
          <img src="./assets/images/logo.png" alt="#" />
        </FooterWarpper>
      </StyledBox>
    </Container>
  );
};

export default Home;
