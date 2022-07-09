import { Link } from 'react-router-dom';

import LeftSide from '../Layout/LeftSide';
import PersonalExperienceForm from './PersonalExperienceForm';

import Personal from '../../img/Personal.svg';
import Header from '../Layout/Header';
import ProgressBar from '../Layout/ProgressBar';
import Title from '../Layout/Title';

const PersonalExperiencePageContent = () => {
  return (
    <div className="flex">
      <LeftSide cover={Personal} />
      <div className='w-1/2'>
        <Header text='start creating your account' />
        <ProgressBar />
        <Title />
        <PersonalExperienceForm />
      </div>
    </div>

  );
};

export default PersonalExperiencePageContent;