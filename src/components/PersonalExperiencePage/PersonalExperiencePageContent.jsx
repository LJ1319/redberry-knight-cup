import { Link } from 'react-router-dom';

import LeftSide from '../Layout/LeftSide';
import PersonalExperienceForm from './PersonalExperienceForm';

import Personal from '../../img/Personal.svg';
import Header from '../Layout/Header';
import ProgressBar from '../Layout/ProgressBar';
import Title from '../Layout/Title';
import Next from '../../img/next-button.svg';

const PersonalExperiencePageContent = () => {

  const test = () => {
    console.log('from personal page');
  };

  return (
    <div className="flex">
      <LeftSide cover={Personal} />
      <div className='w-1/2'>
        <Header text='start creating your account' />
        <ProgressBar text={1} />
        <Title title='Personal Information' info='this is basic information fields' />
        <PersonalExperienceForm />
        <div className='flex justify-between ml-20 mt-20 max-w-2xl '>
          <Link to='/'>
            <button className='w-24 h-14 border-2 border-black rounded-xl hover:border-redberrypurple hover:bg-redberrygrey'>
              Back
            </button>
          </Link>

          <Link to='/chess-experience'>
            <button onClick={test}>
              <img src={Next} alt="Get Started Right Arrow" className='hover:h-14 hover:border-4 hover:rounded-xl hover:border-redberrypurple' />
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default PersonalExperiencePageContent;