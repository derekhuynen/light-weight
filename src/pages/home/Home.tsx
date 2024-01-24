import { Key } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../store/useAuth";

const Home = () => {
    const nav = useNavigate();
    const setRole = useAuth().setRole;

    const handleOnClick = () => {
        setRole("admin");
        nav("/dashboard");
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Typography sx={{
                typography:
                {
                    md: "h1",
                    sm: 'h2',
                    xs: 'h3'
                }
            }}>Welcome!</Typography>
            <Typography variant="caption" color="text.secondary">Half Stack Developer</Typography>

            <Box sx={{
                position: "absolute",
                bottom: "10%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <IconButton
                    aria-label="login-button"
                    id="login-button"
                    onClick={handleOnClick}
                    size="large"
                    sx={{
                        color: "primary.main",
                        "&:hover": {
                            color: "primary.dark"
                        }
                    }}
                >
                    <Key />
                </IconButton>
            </Box>
        </Box>
    );

}

export default Home;


