import Button from '../button/Buttom';
import ButtonBox from '../buttonBox/ButtonBox';
import Card from '../card/Card';
import CardBox from '../cardBox/CardBox';
import Image from '../image/Image';
import StyledImageBox from '../imageBox/styles';
import PlanetBox from '../planetBox/PlanetBox';
import Text from '../text/Text';
import Title from '../title/Title';
import StyledPlanet from './styles';
import { titleCardPlanets, infoTabsPlanets } from '../../constants/planet'
import { v4 } from 'uuid';
import { useState } from 'react';

const Planet = ({ planet }) => {
	const { title, img, text, color, units } = planet
	const [activeTab, setActiveTab] = useState("OVERVIEW");

	const handleTabClick = (tabLabel) => {
		setActiveTab(tabLabel);
	};

	return (
		<>
			<StyledPlanet>
				<StyledImageBox>
					{
						(title !== 'Planet Data') ? <Image image={img} /> : <img src={img} width='5000' height='500' />
					}
				</StyledImageBox>
				<PlanetBox>
					<Title title={title} />
					<Text text={text} />
					{
						(title !== 'Planet Data') ?
							<ButtonBox>
								{infoTabsPlanets && infoTabsPlanets.map((infoTab) => (
									<Button key={v4()} label={infoTab.label} action={handleTabClick} color={color} disebled={(activeTab === infoTab.label)} />
								))}
							</ButtonBox>
							: <></>
					}
				</PlanetBox>
			</StyledPlanet>
			{
				(title !== 'Planet Data') ?
					<CardBox>
						{units && units.map((value, i) => (
							<Card key={v4()} text1={titleCardPlanets[i]} text2={value.unit} />
						))}
					</CardBox>
					: <></>
			}
		</>
	);
};
export default Planet;
