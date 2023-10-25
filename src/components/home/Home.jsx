import StyledImageBox from '../imageBox/styles';
import StyledPlanet from '../planet/styles';
import PlanetBox from '../planetBox/PlanetBox';
import Text from '../text/Text';
import Title from '../title/Title';

const Home = ({ homeData }) => {
    const { title, img, text } = homeData
    // Crear un menú con React
    return (
        <StyledPlanet>
            <StyledImageBox>
                <img src={img} width='5000' height='500' />
            </StyledImageBox>
            <PlanetBox>
                <Title title={title} />
                <Text text={text} />
            </PlanetBox>
        </StyledPlanet>
    );
};
export default Home;