import LeftSide from "../components/Layout/LeftSide";

import Header from '../images/Header.svg';
import Personal from '../images/Personal.svg';

const Registration = () => {
  const quote = 'when you see a good move look for a better one';
  const author = 'emanuel lasker';
  return (
    <div>
      <LeftSide header={Header} image={Personal} quote={quote} author={author} />
    </div>
  );
};

export default Registration;