import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: row;
	align-content: center;
	/* justify-content: space-evenly; */
	align-items: center;
	gap: 30px;
	list-style: none;
	position: absolute;
	right: 20px;
`;

const StyledLink = styled(Link)`
	color: white;
`;

export { StyledMenu, StyledLink };
