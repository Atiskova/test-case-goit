// import { Card } from './Card/Card';
import plate1 from '../image/3623760.png';
import plate2 from '../image/2205.png'
import plate7 from '../image/2206.png'
import plate3 from '../image/3637115.png';
import plate4 from '../image/3674377.png';
import plate5 from '../image/3702865.png';
import plate6 from '../image/5451609.png';


export const App = () => {
  return (
    <>
      {/* <Card /> */}
      <div>
        <img src={plate1} alt="plate" width="1200"/>
        <img src={plate2} alt="plate" width="1200"/>
        <img src={plate7} alt="plate" width="1200"/>
        <img src={plate3} alt="plate" width="1200"/>
        <img src={plate4} alt="plate" width="1200"/>
        <img src={plate5} alt="plate" width="1200"/>
        <img src={plate6} alt="plate" width="1200"/>
      </div>
    </>
  );
};
