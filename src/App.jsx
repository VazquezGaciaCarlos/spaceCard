import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Header from './components/header/Header';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Header />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
