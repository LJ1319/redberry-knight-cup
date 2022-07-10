import LeftSide from "../Layout/LeftSide";

import Final from '../../img/Final.svg';
import Success from '../../img/success-rocket.svg';

const FinalPageContent = () => {
  return (
    <div className="flex">
      <LeftSide cover={Final} />
      <div className="m-auto">
        <img src={Success} alt="" />
      </div>
    </div>
  );
};

export default FinalPageContent;