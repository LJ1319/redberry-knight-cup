import { Link } from 'react-router-dom';

import LeftSide from '../Layout/LeftSide';

import Header from '../Layout/Header';
import ProgressBar from '../Layout/ProgressBar';
import Title from '../Layout/Title';
import ChessExperienceForm from './ChessExperienceForm';

import Chess from '../../img/Chess.svg';
import Checked from '../../img/check-all.svg';

const ChessExperiencePageContent = () => {

  const test = () => {
    console.log('test');
  };

  return (
    <div className="flex">
      <LeftSide cover={Chess} />
      <div className='w-1/2'>
        <Header text='first step is done, continue to finish onboarding' />
        <ProgressBar content={Checked} />
        <Title title='chess experience' info='this is basic information fields' />
        <ChessExperienceForm />
        <div className='flex justify-between ml-20 mt-20 max-w-2xl'>
          <Link to='/personal-experience'>
            <button className='w-24 h-14 border-2 border-black rounded-xl font-opensans hover:border-redberrypurple hover:bg-redberrygrey'>
              Back
            </button>
          </Link>

          <Link to='/complete'>
            <button
              className='w-24 h-14 border-2 border-black rounded-xl font-opensans bg-redberryblack text-white hover:border-redberrypurple hover:border-4'
              onClick={test}>
              Done
            </button>
          </Link>
        </div>
      </div>
    </div >

  );
};

export default ChessExperiencePageContent;