import { Link } from 'react-router-dom';

import LeftSide from '../Layout/LeftSide';
import PersonalExperienceForm from './PersonalExperienceForm';

import Personal from '../../img/Personal.svg';
import Header from '../Layout/Header';

const PersonalExperiencePageContent = () => {
  return (
    <div className="flex">
      <LeftSide cover={Personal} />
      <div className='w-1/2'>
        <Header text='start creating your account' />
        <PersonalExperienceForm />
      </div>
    </div>

  );
};

export default PersonalExperiencePageContent;