const Title = ({ title, info }) => {
  return (
    <div className="ml-16 mt-20">
      <h4 className="font-opensans capitalize font-semibold text-[32px]">{title}</h4>
      <span className="font-opensans capitalize font-semibold text-sm text-redberrydarksilver">{info}</span>
    </div>
  );
};

export default Title;