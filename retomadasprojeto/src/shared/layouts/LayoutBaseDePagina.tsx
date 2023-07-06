import { IconButton, Icon, Typography, useTheme, useMediaQuery, Theme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';


interface ILayoutBaseDePaginaPros {
    children: React.ReactNode
    titulo: string;

}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaPros> = ({ children, titulo }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const theme = useTheme();
    const  {toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>

            <Box padding={1} height={theme.spacing(12)} display='flex' alignItems='center' gap={1}>
                {smDown && (<IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>)}

                <Typography variant='h5'>
                    {titulo}
                </Typography>

            </Box>

            <Box>
                Barra de ferramentas
            </Box>

            <Box>
                {children}
            </Box>

        </Box>

    )
}