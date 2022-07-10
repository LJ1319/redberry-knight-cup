import { Link } from 'react-router-dom';

import LeftSide from '../Layout/LeftSide';

import Home from '../../img/Home.svg';

import GetStarted from '../../img/get-started-button.svg';

const StartingPageContent = () => {
  return (
    <div className='flex'>
      <LeftSide cover={Home} />
      <div className='w-1/2 bg-redberryred'>
        <div className='ml-20 mt-80'>
          <h1 className='text-7xl uppercase font-nunito text-white font-extrabold'>
            chess says <span className='text-xl text-black font-bold align-middle'>a lot about</span>
            <br></br>who we are
          </h1>
        </div>
        <div className='ml-20 mt-20 w-48 h-14'>
          <Link to='/personal-experience'>
            <button className='hover:border-4 hover:rounded-xl hover:border-redberrypurple'>
              <img src={GetStarted} alt="Get Started Right Arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartingPageContent;