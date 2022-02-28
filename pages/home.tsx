import * as React from 'react';
import type { NextPage } from 'next';
import Typography, { TypographyProps } from '@mui/material/Typography';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box, { BoxProps } from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RectangleIcon from '@mui/icons-material/Rectangle';
import { StyledAvatar , IMG } from '../components/Style';

import { collectiblesList, transactionsList } from '../data';

export const HighlightedTypography = styled(Typography)<TypographyProps>`
  span{
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  p {
    font-size:${({ theme }) => theme.typography.body1.fontSize};
  }

` as typeof Typography;


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

export const HalfBox = styled(Box)<BoxProps>`
  flex: 1;
  display: flex;
  height: 100%;
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Collectible {
  title: string;
  user: string;
}
interface Transaction {
  amount: string;
  user: string;
  sent: boolean;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  const [value, setValue] = React.useState(0);
  const [collectibles, setCollectibles] = React.useState<Collectible[] | null>(
    collectiblesList
  );
  const [transactions, setTransactions] = React.useState<Transaction[] | null>(
    transactionsList
  );
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setCollectibles(collectiblesList);
    setTransactions(transactionsList);
  }, [collectiblesList, transactionsList]);

  console.log(collectibles);
  return (
    <Grid container>
      <Grid item xs={6} p={1} justifyContent="center" alignItems="stretch">
        <HalfBox p={1} pb={3}>
          <Grid item xs={10}>
            <h1>Contacts</h1>
            <AvatarGroup max={4}>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 24, height: 24 }}
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                sx={{ width: 24, height: 24 }}
                src="/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                sx={{ width: 24, height: 24 }}
                src="/static/images/avatar/3.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                sx={{ width: 24, height: 24 }}
                src="/static/images/avatar/4.jpg"
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Grid>
          <Grid item xs={2}>
            <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
          </Grid>
        </HalfBox>
      </Grid>
      <Grid item xs={6} p={1} justifyContent="center" alignItems="stretch">
        <HalfBox p={1} pb={3}>
          <Grid item xs={10}>
            <h1>web3 Apps</h1>
            <Button variant="contained">Create NFT</Button>
          </Grid>
          <Grid item xs={2}>
            <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
          </Grid>
        </HalfBox>
      </Grid>
      <Grid item xs={12} p={1}>
        <BannerBox p={1}>
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

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab label="Collectibles" {...a11yProps(0)} />
            <Tab label="Transactions" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <List>
            {collectibles &&
              collectibles.map((collect: Collectible, index: number) => {
                return (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <ArrowForwardIosIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <StyledAvatar>
                        <RectangleIcon color="primary" />
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText
                      disableTypography
                      primary={collect.title}
                      secondary={
                        <HighlightedTypography>
                          By <span>{collect.user}</span>
                        </HighlightedTypography>
                      }
                    />
                  </ListItem>
                );
              })}
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <List>
            {transactions &&
              transactions.map((transac: Transaction, index: number) => {
                return (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <HighlightedTypography><p>3 days ago</p></HighlightedTypography>
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <StyledAvatar>
                        {transac.sent ? (
                          <IMG src="./assets/icons/sent.png" alt="#" />
                        ) : (
                          <IMG src="./assets/icons/receive.png" alt="#" />
                        )}
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<HighlightedTypography><span>{transac.amount}</span> Near</HighlightedTypography>}
                      secondary={
                        <HighlightedTypography>
                          {transac.sent ? 'Sent to' : 'Receive' } <span>{transac.user}</span>
                        </HighlightedTypography>
                      }
                    />
                  </ListItem>
                );
              })}
          </List>
        </TabPanel>
      </Box>
    </Grid>
  );
};
export default Home;
