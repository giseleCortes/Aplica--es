
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { setIsDrawerOpitions} = useDrawerContext();

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
            <Route path='/pagina-inicial'element= {<Dashboard / >} />

            <Route path='*' element={<Navigate to= "/pagina-inicial" /> } />
        </Routes>

    );
}