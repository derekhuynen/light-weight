import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { userService } from "../../service/endpoints";
import { User } from "../../types/user";


const Dashboard = () => {
    const { isPending, isError, data } = useQuery({ queryKey: ['user'], queryFn: userService.get })

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>Error...</div>

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography sx={{
                typography:
                {
                    md: "h1",
                    sm: 'h2',
                    xs: 'h3'
                }
            }}>Dashboard</Typography>

            {data.data.map((user: User) => (
                <Typography variant="caption" color="text.secondary">{user.name}</Typography>
            ))}
        </Box>
    )
}

export default Dashboard;