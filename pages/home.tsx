import * as React from 'react';
import type { NextPage } from 'next';
import Typography, { TypographyProps } from '@mui/material/Typography';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const BannerBox = styled(Box)<BoxProps>`
  flex: 1;
  display: flex;
  background-color: #f4e9fc;
  background-image: url('/assets/images/bg-image1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 150%;
  border-radius: 10px;
  h1 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
  }
` as typeof Box;

export const LeftBox = styled(Box)<BoxProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f4e9fc;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 150%;
  border-radius: 10px;
  h1 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    margin: 0px;
  }
` as typeof Box;

export const RightBox = styled(Box)<BoxProps>`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  background-image: url('/assets/images/bg-image2.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 150%;
  border-radius: 10px;
  h1 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    margin: 0px;
  }
  button {
    background-color: #18d7a9;
    svg {
      font-size: 15px;
    }
  }
` as typeof Box;

const Home: NextPage = () => {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={6}>
        <LeftBox p={2}>
          <Grid item xs={8}>
            <h1>Contacts</h1>
          </Grid>
          <Grid item xs={3}>
            <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
          </Grid>
          <Grid item xs={12}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp"  sx={{ width: 24, height: 24 }} src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard"  sx={{ width: 24, height: 24 }} src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker"  sx={{ width: 24, height: 24 }} src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker"  sx={{ width: 24, height: 24 }} src="/static/images/avatar/4.jpg" />
              <Avatar
               sx={{ width: 24, height: 24 }}
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Grid>
        </LeftBox>
      </Grid>
      <Grid item xs={6}>
        <RightBox p={2}>
          <Grid item xs={10}>
            <h1>web3 Apps</h1>
            <Button variant="contained">Create NFT</Button>
          </Grid>
          <Grid item xs={2}>
            <ArrowForwardIosIcon sx={{ fontSize: 15 }}/>
          </Grid>
        </RightBox>
      </Grid>
      <Grid item xs={12}>
        <BannerBox p={2}>
          <Grid item xs={5}>
            <h1>Start Creating your NFT Today</h1>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 15 }} />}
            >
              Create NFT
            </Button>
          </Grid>
        </BannerBox>
      </Grid>
    </Grid>
  );
};
export default Home;
