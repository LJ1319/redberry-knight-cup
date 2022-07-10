import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Next from '../../img/next-button.svg';


const PersonalExperienceForm = () => {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const birthDateInputRef = useRef();

  const [isValid, setIsValid] = useState(false);

  const validate = () => {

    let validName = nameInputRef.current.value.length > 2;
    let validEmail = emailInputRef.current.value.split('@')[1] === 'redberry.ge';

    let regExp = /^\d+$/;
    let validPhoneNumber = phoneNumberInputRef.current.value.length == 9 && regExp.test(phoneNumberInputRef.current.value);

    // console.log(validName, validEmail, validPhoneNumber);

    if (validName && validEmail && validPhoneNumber) {
      setIsValid(true);
    }

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredBirthDate = birthDateInputRef.current.value;


    console.log(`from personal page ${enteredName} ${enteredEmail} ${enteredPhoneNumber} ${enteredBirthDate}`);


  };


  return (
    <div className="flex ml-16 mt-12">
      <form className="w-full max-w-2xl" onSubmit={submitHandler}>
        <input
          className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
          type="text"
          id="name"
          required
          placeholder="Name"
          ref={nameInputRef}
        />
        <input
          className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
          type="email"
          id="email"
          required
          placeholder="Email address"
          ref={emailInputRef}
        />
        <input
          className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack"
          type="text"
          id="phone"
          required
          placeholder="Phone number"
          ref={phoneNumberInputRef}
        />
        <input
          className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh focus:outline-none placeholder:focus:text-redberryblack"
          type="date"
          id="date"
          required
          placeholder="Date of birth"
          ref={birthDateInputRef}
        />
        <div className='flex justify-between mt-20 max-w-2xl '>
          <Link to='/'>
            <button className='w-24 h-14 border-2 border-black rounded-xl hover:border-redberrypurple hover:bg-redberrygrey'>
              Back
            </button>
          </Link>

          {isValid && (
            <Navigate to='/chess-experience' />
          )}
          <button onClick={validate}>
            <img src={Next} alt="Get Started Right Arrow" className='hover:h-14 hover:border-4 hover:rounded-xl hover:border-redberrypurple' />
          </button>
        </div>

      </form>
    </div>
  );
};

export default PersonalExperienceForm;