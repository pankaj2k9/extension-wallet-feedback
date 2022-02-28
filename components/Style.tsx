import styled from '@emotion/styled';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
export const StyledAvatar = styled(Avatar)<AvatarProps>`
  background-color: #ffffff;
`;

export const IMG = styled.img<{ size?: string }>`
  margin: 10px;
  flex: 1;
  max-width: ${({ size }) => (size === 'small' ? '15px' : '25px')};
  max-height: 25px;
`;