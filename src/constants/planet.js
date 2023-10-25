export const infoTabsPlanets = [
	{ index: 'OVERVIEW', label: 'OVERVIEW' },
	{ index: 'Internal', label: 'Internal Structure' },
	{ index: 'Surface', label: 'Surface Geology' }
];

export const titleCardPlanets = [
	'ROTATION TIME',
	'REVOLUTION TIME',
	'RADIUS',
	'AVERAGE TEMP.'
];
export const homeData = [
	{
		path: '/',
		title: 'Planet Data',
		img: 'images/pizzaplanet.jpg',
		text: '¡Hola! Los planetas del sistema solar son fascinantes. Hay ocho planetas en total, divididos en dos grupos: los planetas rocosos y los gigantes gaseosos. Los planetas rocosos son Mercurio, Venus, La Tierra y Marte. Son los más cercanos al Sol y tienen superficies sólidas. Los gigantes gaseosos son Júpiter, Saturno, Urano y Neptuno. Están más lejos del Sol y tienen atmósferas compuestas principalmente de hidrógeno y helio.'
	}
];
export const planetData = [
	{
		path: '/mercury',
		title: 'MERCURY',
		img: [
			{
				OVERVIEW: 'images/planet-mercury.svg',
				Internal: 'images/planet-mercury-internal.svg',
				Surface: 'images/geology-mercury.png'
			}
		],
		text: 'Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planets density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earths density.',
		color: '#419EBB',
		units: [
			{ unit: '58.6 days' },
			{ unit: '87.97 days' },
			{ unit: '2,439.7 km' },
			{ unit: '430°c' }
		]
	},
	{
		path: '/venus',
		title: 'VENUS',
		img: [
			{
				OVERVIEW: 'images/planet-venus.svg',
				Internal: 'images/planet-venus-internal.svg',
				Surface: 'images/geology-venus.png'
			}
		],
		text: 'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
		color: '#EDA249',
		units: [
			{ unit: '243 days' },
			{ unit: '224.7 days' },
			{ unit: '6,051.8 kmm' },
			{ unit: '471°c' }
		]
	},
	{
		path: '/earth',
		title: 'EARTH',
		img: [
			{
				OVERVIEW: 'images/planet-earth.svg',
				Internal: 'images/planet-earth-internal.svg',
				Surface: 'images/geology-earth.png'
			}
		],
		text: 'Earths interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.',
		color: '#6D2ED5',
		units: [
			{ unit: '0.99 days' },
			{ unit: '365.26 days' },
			{ unit: '6,371 km' },
			{ unit: '16°c' }
		]
	},
	{
		path: '/mars',
		title: 'MARS',
		img: [
			{
				OVERVIEW: 'images/planet-mars.svg',
				Internal: 'images/planet-mars-internal.svg',
				Surface: 'images/geology-mars.png'
			}
		],
		text: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet',
		color: '#D14C32',
		units: [
			{ unit: '1.03 days' },
			{ unit: '1.88 years' },
			{ unit: '3,389.5 km' },
			{ unit: '-28°c' }
		]
	},
	{
		path: '/jupiter',
		title: 'JUPITER',
		img: [
			{
				OVERVIEW: 'images/planet-jupiter.svg',
				Internal: 'images/planet-jupiter-internal.svg',
				Surface: 'images/geology-jupiter.png'
			}
		],
		text: "'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
		color: '#D83A34',
		units: [
			{ unit: '9.93 hours' },
			{ unit: '11.86 years' },
			{ unit: '69,911 km' },
			{ unit: '-108°c' }
		]
	},
	{
		path: '/saturn',
		title: 'SATURN',
		img: [
			{
				OVERVIEW: 'images/planet-saturn.svg',
				Internal: 'images/planet-saturn-internal.svg',
				Surface: 'images/geology-saturn.png'
			}
		],
		text: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
		color: '#CD5120',
		units: [
			{ unit: '10.8 hours' },
			{ unit: '29.46 years' },
			{ unit: '58,232 km' },
			{ unit: '-138°c' }
		]
	},
	{
		path: '/uranus',
		title: 'URANUS',
		img: [
			{
				OVERVIEW: 'images/planet-uranus.svg',
				Internal: 'images/planet-uranus-internal.svg',
				Surface: 'images/geology-uranus.png'
			}
		],
		text: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
		color: '#1EC1A2',
		units: [
			{ unit: '17.2 hours' },
			{ unit: '84 years' },
			{ unit: '25,362 km' },
			{ unit: '-195°c' }
		]
	},
	{
		path: '/neptune',
		title: 'NEPTUNE',
		img: [
			{
				OVERVIEW: 'images/planet-neptune.svg',
				Internal: 'images/planet-neptune-internal.svg',
				Surface: 'images/geology-mercury.png'
			}
		],
		text: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
		color: '#2D68F0',
		units: [
			{ unit: '16.08 hours' },
			{ unit: '164.79 years' },
			{ unit: '24,622 km' },
			{ unit: '-201°c' }
		]
	}
];
