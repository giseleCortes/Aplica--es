import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {

	return (

		<LayoutBaseDePagina
			titulo='Projeto'
			barraDeFerramentas={(
				<FerramentasDeDetalhe mostrarBotaoSalvarEFechar/>
			)}
		>

            testando

		</LayoutBaseDePagina>



	);
};