import SubtitleCard from '../subtitleCard/SubtitleCard';
import TitleCard from '../titleCard/TitleCard';
import StyledCard from './styles';

const Card = ({ text1, text2, left }) => {
	return (
		<StyledCard left={left}>
			<TitleCard text={text1} />
			<SubtitleCard text={text2} />
		</StyledCard>
	);
};
export default Card;
