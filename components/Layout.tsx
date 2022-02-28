import * as React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Box, { BoxProps } from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { StyledAvatar , IMG } from './Style';
export const NavWarpper = styled.div`
  display: flex;
  background-color: #f5f5f5;
  margin-bottom: 5px;
  align-items: center;
`;
export const RightNavWarpper = styled.div`
  display: flex;
  flex: 4;
  justify-content: flex-end;
  align-items: center;
`;
export const LeftNavWarpper = styled.div`
  flex: 1;
`;
export const StyledButton = styled(Button)`
  flex: 8;
  margin-right: 20px;
  border-radius: 20px;
  padding:0px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 20px;
  text-transform: none;
  color: ${({ theme }) => theme.palette.primary.main}; 
  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
    border-color: ${({ theme }) => theme.palette.common.white};
    border-radius: 20px;
    text-transform: none;
  }
`;

export const StyledBox = styled(Box)<BoxProps>`
  width: 70vw;
  height: auto;
  border-radius: 10px;
  top: 10vh;
  position: relative;
  background-color: #fff;
  margin: auto;
  background-color: ${({ theme }) => theme.palette.common.white};
` as typeof Box;



export const MenuWarpper = styled.div``;
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<string>('Johndoe.near');
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onChangeUser = (name: string) => {
    setUser(name);
    handleClose();
  };
  return (
    <Container maxWidth="lg" disableGutters>
      <NavWarpper>
        <LeftNavWarpper>
          <IMG src="./assets/icons/home-dark.png" alt="#" />
        </LeftNavWarpper>
        <RightNavWarpper>
          <StyledButton variant="outlined" onClick={handleOpen}>
            <IMG src="./assets/icons/nav-dropdown.png" alt="#" size="small" />
            {user}
            <ArrowDropDownIcon/>
          </StyledButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <StyledBox>
              <nav aria-label="main mailbox">
                <List disablePadding>
                  <ListItem
                    onClick={() => onChangeUser('Johndoe.near')}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        {user === 'Johndoe.near' && <DoneIcon />}
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <StyledAvatar>
                        <IMG src="./assets/icons/nav-dropdown.png" alt="#" />
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Johndoe.near"
                      secondary="0.34 NEAR"
                    />
                  </ListItem>
                  <ListItem
                    onClick={() => onChangeUser('Mike.near')}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        {user === 'Mike.near' && <DoneIcon />}
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <StyledAvatar>
                        <IMG src="./assets/icons/nav-dropdown.png" alt="#" />
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mike.near" secondary="0.20 NEAR" />
                  </ListItem>
                  <ListItem
                    onClick={() => onChangeUser('John.near')}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        {user === 'John.near' && <DoneIcon />}
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <StyledAvatar>
                        <IMG src="./assets/icons/nav-dropdown.png" alt="#" />
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="John.near" secondary="0.20 NEAR" />
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <StyledAvatar>
                        <IMG src="./assets/icons/plus.png" alt="#" />
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="Create Account" secondary="" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <StyledAvatar>
                        <IMG src="./assets/icons/download.png" alt="#" />
                      </StyledAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="Import Accounts" secondary="" />
                  </ListItem>
                </List>
              </nav>
            </StyledBox>
          </Modal>
          <IMG src="./assets/icons/notification.png" alt="#" />
          <IMG src="./assets/icons/settings.png" alt="#" />
        </RightNavWarpper>
      </NavWarpper>
      {children}
    </Container>
  );
};

export default Layout;
