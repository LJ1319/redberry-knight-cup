import { Fragment, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from "axios";

import { useLocalStorage } from '../../useLocalStorage';

import { Listbox, Transition } from '@headlessui/react';

import Down from '../../img/chevron-down.svg';
import Up from '../../img/chevron-up.svg';

const API_URL = 'https://chess-tournament-api.devtest.ge/api';
const IMAGES_URL = 'https://chess-tournament-api.devtest.ge/';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ChessExperienceForm = () => {


  const [grandMasters, setGrandMasters] = useState([]);
  const [selected, setSelected] = useState([...grandMasters]);

  const [experienceLevel, setExperienceLevel] = useLocalStorage('experience_level', '');
  const [alreadyParticipated, setAlreadyParticipated] = useLocalStorage('already_participated', '');
  const [characterId, setCharacterId] = useLocalStorage('character_id', '');

  const [isOpenLevel, toggleOpenLevel] = useState(false);
  const [isOpenCharacters, toggleOpenCharacters] = useState(false);

  const toggleLevel = () => {
    toggleOpenLevel(!isOpenLevel);
  };

  // const toggleCharacters = () => {
  //   toggleOpenCharacters(!isOpenCharacters);
  // };

  const handleChange = (e) => {
    setAlreadyParticipated(e.target.value);
  };

  const handleSelect = () => {

  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const fetchData = async () => {
    try {
      await axios.get(`${API_URL}/grandmasters`).then((response) => {
        setGrandMasters(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (

    // <>
    //   {grandMasters.map(grandMaster => <img src={`https://chess-tournament-api.devtest.ge${grandMaster.image}`} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />)}

    // </>


    <div className="flex ml-16 mt-10" >
      <form className="w-full max-w-4xl" onSubmit={submitHandler}>
        <div className='flex'>
          <div className="flex w-96 mt-6 mr-6">
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              onClick={toggleLevel}
              className="form-select form-select-lg appearance-none w-full text-xl font-normal border-b rounded-lg transition ease-in-out pl-3 pb-3 focus:text-gray-700 focus:bg-white  focus:outline-none" >
              <option value="beginner">Beginner</option>
              <option value="intermediate" >Intermediate</option>
              <option value="professional">Professional</option>
            </select>

            {!isOpenLevel && <img src={Down} alt="chevron down" className='relative right-6' />}
            {isOpenLevel && <img src={Up} alt="chevron up" className='relative right-6' />}
          </div>

          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="mt-6 relative">
                  <Listbox.Button className="relative w-full text-xl font-normal border-b rounded-lg transition ease-in-out pl-3 pb-3 focus:text-gray-700 focus:bg-white  focus:outline-none">
                    <span className="flex items-center">
                      <span>Choose Your Character</span>
                      <span className="ml-3 block truncate">{selected.name}</span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {grandMasters.map((grandMaster) => (
                        <Listbox.Option
                          key={grandMaster.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-white bg-indigo-600' : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={grandMaster}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                  {grandMaster.name}
                                </span>
                                <img src={`${IMAGES_URL}${grandMaster.image}`} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        <p className='mt-20 mb-4 text-lg font-opensans'>Have You Participated in the Redberry Championship?</p>
        <div className="flex">
          <div className="form-check form-check-inline">
            <input className="form-check-input form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white  checked:border-blue-600 checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={alreadyParticipated === 'yes'} value='yes' onChange={handleChange} />
            <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left ml-16 mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" checked={alreadyParticipated === 'no'} value='no' onChange={handleChange} />
            <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">No</label>
          </div>
        </div>

        <div className='flex justify-between mt-56 max-w-2xl'>
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