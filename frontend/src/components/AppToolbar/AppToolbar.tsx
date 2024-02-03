import {NavLink} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <NavLink to="/"  style={{ color: 'inherit', textDecoration: 'none' }}>News</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;