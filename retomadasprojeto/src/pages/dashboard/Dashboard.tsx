import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

    return (

        <LayoutBaseDePagina
            titulo='Projeto'
            barraDeFerramentas={(
                <FerramentasDaListagem
                    mostrarInputBusca
                />
            )}
        >

            testando

        </LayoutBaseDePagina>



    )
};