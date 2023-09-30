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
  buttonStyles: 'px-8 py-3.5 bg-[#0290ff] rounded font-robotoSlab text-white text-sm font-bold tracking-[0.5px]',
  onClick: () => {},
};

export default Button;
