
const Header = ({ text }) => {

  return (
    <header className='border-b-2 border-redberrygrey w-full h-20 p-6 mt-2'>
      <h2 className='text-base font-opensans capitalize font-semibold ml-12'>{text}</h2>
    </header>
  );

};

export default Header;