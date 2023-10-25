import { v4 } from 'uuid';
import { StyledLink, StyledMenu } from './styles';
import { menuData } from '../../constants/menu';

const Menu = () => {
  return (
    <nav>
      <StyledMenu>
        {menuData.map(item => (
          <li key={v4()}>
            <StyledLink to={item.path}>{item.text}</StyledLink>
          </li>
        ))}
      </StyledMenu>
    </nav>
  );
};
export default Menu;
