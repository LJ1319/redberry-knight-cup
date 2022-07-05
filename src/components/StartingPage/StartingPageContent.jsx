import { Link } from 'react-router-dom';

import LeftSide from "../Layout/LeftSide";
import RightSide from "../Layout/RightSide";

import Landing from '../../images/Landing.svg';
import Header from '../../images/Header.svg';

const StartingPageContent = () => {
  return (
    <div className="flex">
      <LeftSide header={Header} image={Landing} />
      <RightSide>
        <h1>Chess Says A Lot About Who We Are</h1>
        <button>
          <Link to='/registration'>
            Get Started
          </Link>
        </button>
      </RightSide>
    </div>
  );
};

export default StartingPageContent;