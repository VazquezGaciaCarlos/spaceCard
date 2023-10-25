import { Route, Routes } from 'react-router-dom';
import Planet from '../components/planet/Planet';
import { planetData, homeData } from '../constants/planet';
import { v4 } from 'uuid';
import Home from '../components/home/Home';

const Router = () => {
  return (
    <Routes>
      <Route key={v4()} path='/' element={
        <Home homeData={homeData[0]} />
      }
      />
      {planetData.map(item => (
        <Route key={v4()} path={item.path} element={
          <Planet planet={item} />
        }
        />
      ))}
    </Routes>
  );
};

export default Router;
