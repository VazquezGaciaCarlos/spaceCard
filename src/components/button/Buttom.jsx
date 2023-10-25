import { StyledButton } from './styles';

const Button = ({ tab, planet, activeTab, action }) => {
	const { color, img } = planet
	const { label } = tab

	return <StyledButton onClick={() => { action(tab, img) }} color={(activeTab) ? color : 'black'} disabled={(activeTab)}>{label}</StyledButton>;
};
export default Button;
