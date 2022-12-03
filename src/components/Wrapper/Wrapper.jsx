import css from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
    return <div className={css.wrapper__center}>{children}</div>
}

export default Wrapper;