import { Route, Routes } from "react-router-dom"
import Card from './../components/card/Card';
import { v4 } from "uuid";

const Router = () => {

  return (
    <Routes>
      {planets && planets.map((planet) => (
        <Route key={v4()} path={`/${planet.title.toLowerCase()}`} element={<Card planeta={planet} imagen={`/planet-${planet.title.toLowerCase()}-internal.svg`} />} />
      ))}
    </Routes>
  )
}

export default Router

const planets = [
  {
    title: 'Mercury',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  },
  {
    title: 'Venus',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  },
  {
    title: 'Earth',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  }, {
    title: 'Mars',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  }, {
    title: 'jupiter',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  },
  {
    title: 'Saturn',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  },
  {
    title: 'Uranus',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  },
  {
    title: 'Neptune',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti blanditiis, atque quo architecto, ad recusandae sequi, a dolores quam dolore rem? Neque recusandae commodi natus, dicta ducimus deserunt veniam?',
  }]