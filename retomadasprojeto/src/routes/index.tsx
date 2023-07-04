
import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setIsDrawerOpitions} = useDrawerContext();

  useEffect(() => {
    setIsDrawerOpitions ([
        {
            icon:'home',
            label: 'Página Inicial',
            path: '/página-inicial',
        },
    ]);
  }, []);
    return (

        <Routes>
            <Route path='/pagina-inicial'element= {<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>TOGGLE DRAWER</Button>} />

            <Route path='*' element={<Navigate to= "/pagina-inicial" /> } />
        </Routes>

    );
}