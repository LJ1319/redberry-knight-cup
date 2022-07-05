import classes from './RightSide.module.css';

const RightSide = (props) => {
  return (
    <div className={classes.button}>
      {props.children}
    </div>
  );
};

export default RightSide; 