import { useRef, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from "axios";


import Down from '../../img/chevron-down.svg';
import Up from '../../img/chevron-up.svg';
import { useLocalStorage } from '../../useLocalStorage';

const API_URL = 'https://chess-tournament-api.devtest.ge/api';

const levelOfKnowledge = [
  'beginner',
  'intermediate',
  'professional'
];

const ChessExperienceForm = () => {

  // const beginnerRef = useRef();
  // const intermediateRef = useRef();
  // const professionalRef = useRef();

  const [grandMasters, setGrandMasters] = useState([]);

  const [experienceLevel, setExperienceLevel] = useLocalStorage('experience_level', '');
  const [alreadyParticipated, setAlreadyParticipated] = useLocalStorage('already_participated', '');
  const [characterId, setCharacterId] = useLocalStorage('character_id', '');

  const [isOpenLevel, toggleOpenLevel] = useState(false);
  const [isOpenCharacters, toggleOpenCharacters] = useState(false);

  const toggleLevel = () => {
    toggleOpenLevel(!isOpenLevel);
    console.log(isOpenLevel);
  };

  const toggleCharacters = () => {
    toggleOpenCharacters(!isOpenCharacters);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // const experience_level = beginnerRef.current.value;
    // console.log(experience_level);
  };

  const fetchData = async () => {
    try {
      await axios.get(`${API_URL}/grandmasters `).then((response) => {
        setGrandMasters(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);




  // {
  //   isOpen && (

  //     grandMasters.map(grandMaster => (
  //       <li className='flex' onClick={() => toggleOpen(false)}>
  //         <h4 className='mr-4'>{grandMaster.name}</h4>
  //         <img src={`https://chess-tournament-api.devtest.ge${grandMaster.image}`} className='w-12 h-12' />
  //       </li>
  //     ))

  //   );
  // }

  //   <input
  //               className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack outline-none"
  //               placeholder='Level of knowledge'
  //             />

  //             <button onClick={toggleLevel}>
  // {!isOpenLevel && <img src={Down} alt="chevron down" className='relative right-6' />}
  // {isOpenLevel && <img src={Up} alt="chevron up" className='relative right-6' />}
  //             </button>
  //           </div >



  //   { isOpenLevel && <div className='absolute left-[1020px] top-[540px] w-96 h-52 border-2 border-black rounded'>
  //     {levelOfKnowledge.map(level => <span className='flex'>{level}</span>)}
  //   </div>}

  // <div className="flex w-96 mt-6 ml-6">
  //   <input
  //     className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack outline-none"
  //     placeholder='Choose your character'
  //   />

  //   <button onClick={toggleCharacters}>
  //     {!isOpenCharacters && <img src={Down} alt="chevron down" className='relative right-6' />}
  //     {isOpenCharacters && <img src={Up} alt="chevron up" className='relative right-6' />}
  //   </button>

  //   {isOpenCharacters && (
  //     <div className='absolute left-[1020px] top-[540px] w-96 h-52 border-2 border-black rounded'>

  //     </div>
  //   )}

  return (

    <div className="flex ml-16 mt-12" >
      <form className="w-full max-w-4xl" onSubmit={submitHandler}>
        <div className='flex'>
          <div className="flex w-96 mt-6 mr-6">
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              onClick={toggleLevel}
              className="form-select form-select-lg appearance-none w-full text-xl font-normal border-b rounded-lg transition ease-in-out pl-3 pb-3 focus:text-gray-700 focus:bg-white  focus:outline-none" >
              <option value="beginner" >Beginner</option>
              <option value="intermediate" >Intermediate</option>
              <option value="professional">Professional</option>
            </select>

            {!isOpenLevel && <img src={Down} alt="chevron down" className='relative  right-6' />}
            {isOpenLevel && <img src={Up} alt="chevron up" className='relative right-6' />}
          </div>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
        </div>


        <div className='flex justify-between mt-80 max-w-2xl'>
          <Link to='/personal-experience'>
            <button className='w-24 h-14 border-2 border-black rounded-xl font-opensans hover:border-redberrypurple hover:bg-redberrygrey'>
              Back
            </button>
          </Link>

          <button
            className='w-24 h-14 border-2 border-black rounded-xl font-opensans bg-redberryblack text-white hover:border-redberrypurple hover:border-4'
          >
            Done
          </button>
        </div>
      </form >
    </div >
  );
};

export default ChessExperienceForm;;