export const PrePadButton = ({ text, onClick, isDisabled, type }) => {
  return (
    <div className="prepad-button-wrapper">
      <button className="prepad-button" type={type} onClick={() => onClick()} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
};
