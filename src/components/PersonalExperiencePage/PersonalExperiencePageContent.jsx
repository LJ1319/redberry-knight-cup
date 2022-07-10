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
        <ProgressBar text={1} />
        <Title title='Personal Information' info='this is basic information fields' />
        <PersonalExperienceForm />
      </div>
    </div>

  );
};

export default PersonalExperiencePageContent;