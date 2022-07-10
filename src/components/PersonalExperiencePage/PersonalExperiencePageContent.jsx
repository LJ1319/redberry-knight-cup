import { Link } from 'react-router-dom';

import LeftSide from '../Layout/LeftSide';
import PersonalExperienceForm from './PersonalExperienceForm';

import Personal from '../../img/Personal.svg';
import Header from '../Layout/Header';
import ProgressBar from '../Layout/ProgressBar';
import Title from '../Layout/Title';
import Next from '../../img/next-button.svg';

const PersonalExperiencePageContent = () => {
  return (
    <div className="flex">
      <LeftSide cover={Personal} />
      <div className='w-1/2'>
        <Header text='start creating your account' />
        <ProgressBar />
        <Title />
        <PersonalExperienceForm />
        <div className='flex justify-between ml-20 mt-20 max-w-2xl h-14'>
          <button className='w-20 border-2 border-black rounded-xl hover:border-redberrypurple hover:bg-redberrygrey'>Back</button>
          <button>
            <Link to='/chess-experience'>
              <img src={Next} alt="Get Started Right Arrow" className='hover:border-4 hover:rounded-xl hover:border-redberrypurple' />
            </Link>
          </button>
        </div>
      </div>
    </div>

  );
};

export default PersonalExperiencePageContent;