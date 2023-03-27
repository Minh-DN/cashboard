import defaultAvatarImg from './default_avatar.jpeg'; 
import gongYooAvatar from './gong_yoo.png';

const Avatar = () => {
  return (
    <div className='avatar-container'>
      <img src={gongYooAvatar} className='avatar-image' />
      <div className='avatar-username'></div>
    </div>
  )
}


export default Avatar;