import { useState } from 'react';
import defaultAvatarImg from '../../../assets/default_avatar.jpeg'; 

const gongYooAvatarSrc = 'https://i.ibb.co/Jp5wv0V/gong-yoo.png'; // temporary

const Avatar = () => {
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatarImg);

  const onError = () => {
    setAvatarSrc(defaultAvatarImg);
  };

  const onLoad = () => {
    setAvatarSrc(gongYooAvatarSrc);
  };

  return (
    <div className='avatar-container'>
      <img
        src={avatarSrc}
        className='avatar-image' 
        onError={onError}
        onLoad={onLoad}
      />
      <div className='avatar-username'>Gong Yoo</div>
    </div>
  )
}


export default Avatar;