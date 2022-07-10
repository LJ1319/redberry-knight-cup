const PersonalExperienceForm = () => {
  return (
    <div className="flex ml-16 mt-12">
      <form className="w-full max-w-2xl">
        <input type="text" id="name" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack" placeholder="Name" />
        <input type="email" id="email" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack" placeholder="Email address" />
        <input type="text" id="phone" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh outline-none placeholder:focus:text-redberryblack" placeholder="Phone number" />
        <input type="date" id="date" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack placeholder:hover:text-redberrypale hover:bg-redberrywhite  focus:bg-redberrygreysh focus:outline-none placeholder:focus:text-redberryblack" placeholder="Date of birth" />
      </form>
    </div>
  );
};

export default PersonalExperienceForm;