import { useLocalStorage } from "../../useLocalStorage";

import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Correct from '../../img/correct.svg';
import Next from '../../img/next-button.svg';
import ErrorModal from "../Layout/ErrorModal";


const PersonalExperienceForm = () => {

  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [phoneNumber, setPhoneNumber] = useLocalStorage('phone', '');
  const [birthDate, setBirthDate] = useLocalStorage('date_of_birth', '');

  const [isValidName, setIsValidName] = useLocalStorage('isValidName', 'not_filled');
  const [isValidEmail, setIsValidEmail] = useLocalStorage('isValidEmail', 'not_filled');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useLocalStorage('isValidPhoneNumber', 'not_filled');
  const [isValid, setIsValid] = useState();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const birthDateInputRef = useRef();

  const validate = () => {

    let validName = nameInputRef.current.value.length > 2;
    let validEmail = emailInputRef.current.value.split('@')[1] === 'redberry.ge';

    let regExp = /^\d+$/;
    let validPhoneNumber = phoneNumberInputRef.current.value.length == 9 && regExp.test(phoneNumberInputRef.current.value);

    if (validName) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }

    if (validEmail) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    if (validPhoneNumber) {
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }

    if (validName && validEmail && validPhoneNumber) {
      setIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };


  return (
    <div className="flex ml-16 mt-12">
      <form className="w-full max-w-2xl" onSubmit={submitHandler}>

        {isValidName === 'not_filled' &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
              type="text"
              id="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameInputRef}
            />
          </div>
        }

        {isValidName === true &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
              type="text"
              id="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameInputRef}
            />
            <img src={Correct} alt="valid" className="relative right-7" />
          </div>
        }

        {isValidName === false &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg bg-redberrypalered text-redberrylightred outline-none "
              type="text"
              id="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameInputRef}
            />
          </div>
        }

        {isValidEmail === 'not_filled' &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
              type="email"
              id="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailInputRef}
            />
          </div>
        }

        {isValidEmail === true &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
              type="email"
              id="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailInputRef}
            />
            <img src={Correct} alt="valid" className="relative right-7" />
          </div>

        }

        {isValidEmail === false &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg bg-redberrypalered text-redberrylightred outline-none"
              type="email"
              id="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailInputRef}
            />
          </div>

        }


        {isValidPhoneNumber === 'not_filled' &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
              type="text"
              id="phone"
              required
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ref={phoneNumberInputRef}
            />
          </div>
        }

        {isValidPhoneNumber === true &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
              type="text"
              id="phone"
              required
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ref={phoneNumberInputRef}
            />
            <img src={Correct} alt="valid" className="relative right-7" />
          </div>

        }

        {isValidPhoneNumber === false &&
          <div className="flex">
            <input
              className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg bg-redberrypalered text-redberrylightred outline-none "
              type="text"
              id="phone"
              required
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ref={phoneNumberInputRef}
            />
          </div>

        }

        <div className="flex">
          <input
            className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh focus:outline-none placeholder:focus:text-redberryblack"
            type="date"
            id="date"
            required
            placeholder="Date of birth"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            ref={birthDateInputRef}
          />
          {birthDate && <img src={Correct} alt='valid' className="relative left-3" />}
        </div>

        {!isValid && < ErrorModal

          error='Invalid name, email or/and phone number'

        />}

        <div className='flex justify-between mt-20 max-w-2xl '>
          <Link to='/'>
            <button className='w-24 h-14 border-2 border-black rounded-xl hover:border-redberrypurple hover:bg-redberrygrey'>
              Back
            </button>
          </Link>

          {isValid && (<Navigate to='/chess-experience' />)}
          <button onClick={validate}>
            <img src={Next} alt="Get Started Right Arrow" className='hover:h-14 hover:border-4 hover:rounded-xl hover:border-redberrypurple' />
          </button>
        </div>

      </form >
    </div >
  );
};

export default PersonalExperienceForm;