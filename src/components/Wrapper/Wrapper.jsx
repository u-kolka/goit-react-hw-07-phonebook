import PropTypes from 'prop-types';
import css from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
    return <div className={css.wrapper__center}>{children}</div>
}

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.array.isRequired,
};