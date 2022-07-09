const PersonalExperienceForm = () => {
  return (
    <div className="flex ml-16 mt-12">
      <form className="w-full max-w-lg">
        <input type="text" id="name" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack hover:bg-redberrywhite hover:text-redberrypale focus:bg-redberrygreysh focus:outline-none" placeholder="Name" />
        <input type="email" id="email" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack hover:bg-redberrywhite hover:text-redberrypale focus:bg-redberrygreysh focus:outline-none" placeholder="Email address" />
        <input type="text" id="phone" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack hover:bg-redberrywhite hover:text-redberrypale focus:bg-redberrygreysh focus:outline-none" placeholder="Phone number" />
        <input type="date" id="date" required className="w-full h-12 my-5 p-5 text-xl border-b rounded-lg placeholder:text-redberryblack hover:bg-redberrywhite hover:text-redberrypale focus:bg-redberrygreysh focus:outline-none" placeholder="Date of birth" />
      </form>
    </div>
  );
};

export default PersonalExperienceForm;