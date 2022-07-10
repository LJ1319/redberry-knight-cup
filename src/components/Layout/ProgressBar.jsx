import { useLocation } from 'react-router-dom';
import Line from '../../img/Line.svg';

const ProgressBar = ({ content, text }) => {

  let location = useLocation();

  return (
    <>
      <div className="flex mt-16 ml-32 mb-4">

        {location.pathname === '/personal-experience' && <div className="bg-redberrygreen w-10 h-10 border-none border-redberrylightgrey rounded-lg text-center p-1">
          <span className="text-lg font-opensans font-bold">{text}</span>
        </div>}


        {location.pathname === '/chess-experience' && <div className="bg-redberrygreen w-10 h-10 border-none border-redberrylightgrey rounded-lg text-center">
          <img src={content} alt="" className='ml-2 mt-3' />
        </div>}

        <img src={Line} alt="In Between Line" className='ml-2 mr-2' />

        {location.pathname === '/personal-experience' && <div className="w-10 h-10 border-2 border-redberrylightgrey rounded-lg bg-redberrylightsilver text-center p-1">
          <span className="text-lg text-redberrydarksilver font-opensans font-bold">2</span>
        </div>}

        {location.pathname === '/chess-experience' && <div className="w-10 h-10 bg-redberrygreen rounded-lg text-center p-1">
          <span className="text-lg font-opensans font-bold">2</span>
        </div>}

      </div>

      <div className='flex ml-20'>
        <span className='capitalize mr-10 font-opensans'>personal information</span>
        <span className='capitalize ml-10 font-opensans'>chess experience</span>
      </div>
    </>
  );
};

export default ProgressBar;