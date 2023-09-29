/* eslint-disable react/button-has-type */
import { PropTypes } from 'prop-types';

const Button = ({
  type, children, buttonStyles, onClick,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={buttonStyles}
  >
    <span className="font-semibold">{children}</span>
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  buttonStyles: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  buttonStyles: 'max-w-[200px] h-auto rounded-full bg-indigo-500 text-white py-1 px-6 border border-indigo-500 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline',
  onClick: () => {},
};

export default Button;
