
import LeftSide from '../Layout/LeftSide';

import Header from '../Layout/Header';
import ProgressBar from '../Layout/ProgressBar';
import Title from '../Layout/Title';
import ChessExperienceForm from './ChessExperienceForm';

import Chess from '../../img/Chess.svg';
import Checked from '../../img/check-all.svg';

const ChessExperiencePageContent = () => {

  return (
    <div className="flex">
      <LeftSide cover={Chess} />
      <div className='w-1/2'>
        <Header text='first step is done, continue to finish onboarding' />
        <ProgressBar content={Checked} />
        <Title title='chess experience' info='this is basic information fields' />
        <ChessExperienceForm />
      </div>
    </div >

  );
};

export default ChessExperiencePageContent;