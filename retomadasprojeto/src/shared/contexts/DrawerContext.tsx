import React, { createContext, useCallback, useContext, useState } from 'react';


interface IDrawerOption{
    icon: string;
    path: string;
    label: string;
}
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption [];
    setIsDrawerOpitions: (newDrawerOptions : IDrawerOption[] ) => void;

}

const DrawerContext = createContext({} as IDrawerContextData);


export const useDrawerContext = () => {
	return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [drawerOptions, setIsDrawerOpitions] = useState<IDrawerOption[]>([]);


	const toggleDrawerOpen = useCallback(() => {
		setIsDrawerOpen(oldDraweOpen => !oldDraweOpen);
	}, []);

	const hadleSetDrawerOptions = useCallback((newDrawerOptions : IDrawerOption[] ) => {
		setIsDrawerOpitions(newDrawerOptions);
	}, []);



	return (
		<DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, setIsDrawerOpitions:hadleSetDrawerOptions, toggleDrawerOpen }}>

			{children}

		</DrawerContext.Provider>
	);
};

