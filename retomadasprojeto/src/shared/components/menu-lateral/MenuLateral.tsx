import { Avatar, Divider, Drawer, useTheme, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from "@mui/material"
import { Box } from '@mui/system'
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined
}
const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (

        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>

    );
};


export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, drawerOptions, toggleDrawerOpen } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();



    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="Ivan Bites"
                            src="https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/304804933_590443099441369_6796837091118310259_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE7MeiPu0kvpsI4o_tUvmL2zFgVChYZ7UvMWBUKFhntS5wAfW95z6tYPe5T5dSuDzFOLBKbHb3N8wivld_thQWS&_nc_ohc=uKRU5UN7UD8AX8ZDcqD&_nc_ht=scontent.fudi1-2.fna&oh=00_AfA-H6_CHotyvJn5zYKSLAmqlH5GHffZ37nXhPXMxQ_l1w&oe=64A6947C" />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    label={drawerOption.label}
                                    to={drawerOption.path}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>

                    </Box>

                    <Box>
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                            <Brightness4TwoToneIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Alternar tema' />
                        </ListItemButton>

                    </Box>
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>

        </>
    )
}