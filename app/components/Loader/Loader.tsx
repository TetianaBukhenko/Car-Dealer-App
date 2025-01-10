import './style.css';

export const Loader = () => {
  return (
    <div className="flex w-full">
      <div className=" m-auto lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
