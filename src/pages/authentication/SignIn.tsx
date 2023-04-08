import { useTheme } from "@mui/material"
import '../../assets/scss/authentication/SignIn.scss';
import { useDispatch } from "react-redux";
import { toggleColorMode } from "../../store/slices/themeSlice";
import { toggleAuth } from "../../store/slices/authSlice";
import { tokens } from "../../theme/theme";

const SignIn = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);

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