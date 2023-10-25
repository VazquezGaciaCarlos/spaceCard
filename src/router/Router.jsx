import { Route, Routes } from 'react-router-dom';
import Planet from '../components/planet/Planet';
import { planetData } from '../constants/planet';
import { v4 } from 'uuid';

const Router = () => {
	return (
		<Routes>
			{planetData.map(item => (
				<Route key={v4()} path={item.path} element={
					<Planet planet={item} />
				}
				/>
			))}
		</Routes>
	);
};

export default Router;
