import { Link } from 'react-router-dom';

import axios from "axios";
import { useRef, useState } from 'react';
import { useEffect } from 'react';


const API_URL = 'https://chess-tournament-api.devtest.ge/api';

const ChessExperienceForm = () => {

  const beginnerRef = useRef();
  const intermediateRef = useRef();
  const professionalRef = useRef();


  const [grandMasters, setGrandMasters] = useState([]);


  const [isOpen, toggleOpen] = useState(false);
  const toggle = () => {
    toggleOpen(!isOpen);
  };


  const submitHandler = (e) => {
    e.preventDefault();
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


  console.log(grandMasters);

  return (




    <div className="flex ml-16 mt-12" >
      <form className="w-full max-w-2xl" onSubmit={submitHandler}>
        <div className='flex'>
          <div className="relative w-72 m-6">
            <select className="block appearance-none w-full h-12 border-b rounded-lg text-gray-700 py-3 px-4 pr-8 rounded leading-tight outline-none ">
              <option ref={beginnerRef}>Beginner</option>
              <option ref={intermediateRef}>Intermediate</option>
              <option ref={professionalRef}>Professional</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>

          <div className="relative w-72 m-6">
            {/* <select className="block appearance-none w-full h-12 border-b rounded-lg text-gray-700 py-3 px-4 pr-8 rounded leading-tight outline-none ">

            </select> */}

            <button onClick={toggle} className="block appearance-none w-full h-12 border-b rounded-lg text-gray-700 py-3 px-4 pr-8 rounded leading-tight outline-none">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>


            {isOpen ? (

              grandMasters.map(grandMaster => (
                <li className='flex' onClick={() => toggleOpen(false)}>
                  <h4 className='mr-4'>{grandMaster.name}</h4>
                  <img src={`https://chess-tournament-api.devtest.ge${grandMaster.image}`} className='w-12 h-12' />
                </li>
              ))

            ) : (
              'hello'

            )
            }


            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>






        <div className='flex justify-between ml-20 mt-20 max-w-2xl'>
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

export default ChessExperienceForm;