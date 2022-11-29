import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import css from "./Filter.module.css";

const Filter = () => {
    const dispatch = useDispatch();

    const changeFilterField = event => {
        const flterFieldValue = event.currentTarget.value.toLowerCase();
        dispatch(setFilter(flterFieldValue));
    };

    return (
        <label className={css.filter__label}> Find contacts by name
            <input className={css.filter__input} type="text" onChange={changeFilterField} />
        </label>
    )
};

export default Filter;