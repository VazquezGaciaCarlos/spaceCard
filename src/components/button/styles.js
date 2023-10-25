import styled from 'styled-components';

const StyledButton = styled.button`
	height: 48px;
	width: 350px;
	color: white;
	background-color: ${({ color }) => color};
	text-align: left;
`;
export { StyledButton };
