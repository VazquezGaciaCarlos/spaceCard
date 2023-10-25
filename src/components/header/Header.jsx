import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeader, StyledH1 } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<img src='/favicon.jpg' width="50" height="50"></img>
			<StyledH1><Link to='/' >THE PLANETS</Link></StyledH1>
			<Menu />
		</StyledHeader>
	);
};
export default Header;
