import Error from '../../img/error.svg';

const ErrorModal = ({ error }) => {
  return (
    <div className='flex-column w-96 h-28 absolute left-[1500px] top-[220px] border-2 rounded'>
      <div className='flex w-full h-5 m-2 text-center'>
        <img src={Error} alt="" />
        <span className='ml-5 text-redberryred font-opensans font-bold align-middle'>
          {error}
        </span>
      </div>
      <hr />
      <div className='text-center'>
        <span className='text-center font-opensans font-bold align-middle'>
          Please enter valid data
        </span>
      </div>
    </div>
  );
};

export default ErrorModal;