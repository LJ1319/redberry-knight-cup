import { Link } from 'react-router-dom';

const Button = ({ destination, src }) => {

  return (
    <button>
      <Link to={destination}>
        <img src={src} alt="Get Started Right Arrow" />
      </Link>
    </button>
  );

};

export default Button;