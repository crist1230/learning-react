import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
<<<<<<< HEAD
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
=======
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    );
>>>>>>> relearning-firebase
};

export default Button;