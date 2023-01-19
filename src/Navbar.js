import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { isFocusable } from "@testing-library/user-event/dist/utils";
import { Base64 } from "js-base64";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function isTokenExpired(token) {
    try {
      // Décoder le token pour récupérer les données de payload
      const payload = JSON.parse(Base64.decode(token.split(".")[1]));
      // Récupérer la propriété 'exp' qui contient un timestamp
      const expiresAt = payload.exp;
      // Transformer le timestamp en date
      const expirationDate = new Date(expiresAt * 1000);
      // Vérifier si la date d'expiration est supérieure à l'heure actuelle
      return expirationDate < new Date();
    } catch (err) {
      console.error(err);
      return true;
    }
  }

function NavBar() {

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if(token === null || isTokenExpired(token)){
            setIsConnected(false);
            return;
        }

        setIsConnected(true);
    }, [])

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    const goToLoginPage = () => {
        if(isTokenExpired(localStorage.getItem("access_token"))){
            navigate("login");
        }     
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home">Ecole X</Link>          
          </Typography>
            {!isConnected && <Button onClick={() => goToLoginPage()} color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;