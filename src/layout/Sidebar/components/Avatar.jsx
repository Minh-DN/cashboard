import React, { memo } from 'react';
import styled from 'styled-components';
import defaultAvatarImg from './default_avatar.jpeg'; 
import gongYooAvatar from './gong_yoo.png';

const Avatar = () => {
  return (
    <AvatarContainer >
      <AvatarImg src={gongYooAvatar} />
      <UserName>Gong Yoo</UserName> 
    </AvatarContainer>
  )
}

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 7px;
`;

const AvatarContainer = styled.div`
  margin-top: 20px;
  animation: fade-in 1.5s;
  text-align: center;
  height: 140px;
  
  
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } 
`;

const AvatarImg = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  border: 2px solid;
  border-color: inherit;
`;

export default Avatar;