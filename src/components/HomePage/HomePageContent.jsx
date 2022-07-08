import LeftSide from '../Layout/LeftSide';

import Home from '../../img/Home.svg';
import Button from '../Layout/Button';

import GetStarted from '../../img/get-started-button.svg';

const StartingPageContent = () => {
  return (
    <div className='flex'>
      <LeftSide cover={Home} />
      <div className='w-1/2 bg-redberry'>
        <div className='ml-20 mt-80'>
          <h1 className='text-7xl uppercase font-nunito text-white font-extrabold'>
            chess says <span className='text-xl text-black font-bold align-middle'>a lot about</span>
            <br></br>who we are
          </h1>
        </div>
        <div className='ml-20 mt-20'>
          <Button destination='registration' src={GetStarted} />
        </div>
      </div>
    </div>
  );
};

export default StartingPageContent;