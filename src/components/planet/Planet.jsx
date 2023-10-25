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
	const { title, img, text, units } = planet
	const [activeTab, setActiveTab] = useState("OVERVIEW");
	const [activeImg, setActiveImg] = useState(img[0].OVERVIEW);

	const handleTabClick = (tab, img) => {
		setActiveTab(tab.label);
		setActiveImg(img[0][tab.index])
	};

	return (
		<>
			<StyledPlanet>
				<StyledImageBox>
					<Image image={activeImg} />
				</StyledImageBox>
				<PlanetBox>
					<Title title={title} />
					<Text text={text} />
					<ButtonBox>
						{infoTabsPlanets && infoTabsPlanets.map((infoTab) => (
							<Button key={v4()} tab={infoTab} planet={planet} action={handleTabClick} activeTab={(activeTab === infoTab.label)} />
						))}
					</ButtonBox>
				</PlanetBox>
			</StyledPlanet>
			<CardBox>
				{units && units.map((value, i) => (
					<Card key={v4()} text1={titleCardPlanets[i]} text2={value.unit} />
				))}
			</CardBox>
		</>
	);
};
export default Planet;
