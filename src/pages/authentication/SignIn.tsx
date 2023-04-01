import { useTheme } from "@mui/material"
import { tokens, ColorModeContext} from "../../theme/theme";

import '../../assets/scss/authentication/SignIn.scss';
import { useContext } from "react";

const SignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div 
      className="sign-in-page-wrapper"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <button onClick={colorMode.toggleColorMode}>Change Theme</button>
      
    </div>
  )
}

export default SignIn