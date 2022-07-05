import classes from './LeftSide.module.css';


const LeftSide = (props) => {
  return (
    <div>
      <img src={props.header} alt="" className={classes.header} />
      <img src={props.image} alt="" className={classes.image} />
      <div className={classes.quote}>
        <h1>{props.quote}</h1>
        <h2>{props.author}</h2>
      </div>
    </div>
  );
};

export default LeftSide;