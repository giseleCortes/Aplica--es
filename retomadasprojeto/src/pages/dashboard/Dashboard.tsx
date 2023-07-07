import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

    return (

        <LayoutBaseDePagina
            titulo='Projeto'
            barraDeFerramentas={(
                <BarraDeFerramentas
                    mostrarInputBusca
                />
            )}
        >

            testando

        </LayoutBaseDePagina>



    )
};