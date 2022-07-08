import Header from '../../img/Header.svg';

const LeftSide = ({ cover }) => {
  return (
    <div className="w-1/2 h-screen overflow-y-hidden">
      <img src={Header} alt="Redberrry Knight Cup" className='w-full' />
      <img src={cover} alt="Queens Gambit" className='w-full' />
    </div>
  );
};

export default LeftSide;