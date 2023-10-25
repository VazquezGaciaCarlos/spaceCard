import { StyledButton } from './styles';

const Button = ({ label, action, color, disebled }) => {
	return <StyledButton onClick={() => { action(label) }} color={(disebled) ? color : 'black'} disabled={disebled}>{label}</StyledButton>;
};
export default Button;
