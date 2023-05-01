import { useTheme } from "@mui/material"
import '../../assets/scss/pages/signin.scss';
import { useDispatch, useSelector } from "react-redux";
import { toggleColorMode } from "../../redux/slices/themeSlice";
import { selectAuthState, toggleAuth } from "../../redux/slices/authSlice";
import { tokens } from "../../assets/theme/theme";
import { useNavigate, useLocation } from 'react-router-dom';

const SignIn = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const auth = useSelector(selectAuthState);
  const navigate = useNavigate();
  const { state } = useLocation();
 
  const colors = tokens(theme.palette.mode);
  
  if (auth) {
    navigate(state?.path || '/');
  }
  
  const handleToggleTheme = () => {
    dispatch(toggleColorMode());
  }

  const handleToggleAuth = () => {
    dispatch(toggleAuth());
  }

  return (
    <div 
      className="sign-in__wrapper"
      style={{ backgroundColor: colors.primary[400] }}
    > 
      
      <div
        className="sign-in__form-container"
        style={{ backgroundColor: colors.primary[700] }}
      >

      </div>
      <button onClick={handleToggleTheme}>change theme</button>
      <button onClick={handleToggleAuth}>sign in</button>
    </div>
  )
}

export default SignIn