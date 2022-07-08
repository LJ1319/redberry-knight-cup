import { Link } from 'react-router-dom';

import Landing from '../../img/Landing.svg';
import Header from '../../img/Header.svg';
import GetStarted from '../../img/get-started-button.svg';


const StartingPageContent = () => {
  return (
    <div className='flex'>
      <div className="w-1/2 h-screen overflow-y-hidden">
        <img src={Header} alt="" className='w-full' />
        <img src={Landing} alt="" className='w-full' />
      </div>
      <div className='w-1/2 bg-redberry'>
        <div className='ml-20 mt-80'>
          <h1 className='text-7xl uppercase font-nunito text-white font-extrabold'>
            chess says <span className='text-xl text-black font-bold align-middle'>a lot about</span>
            <br></br>who we are
          </h1>
        </div>
        <div className='ml-20 mt-20'>
          <button>
            <Link to='/registration'>
              <img src={GetStarted} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartingPageContent;