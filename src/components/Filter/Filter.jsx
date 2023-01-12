import { FormLabel } from "components/ContactForm/ContactForm.styled"
import { useDispatch } from "react-redux";
import { setFilter } from "Redux/filterSlice";
import { useState } from "react";

export const Filter = () => {

    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState("");
     
    const handleFilterChange = e => {
        const value = e.target.value;
        setFilterValue(value);

        dispatch(setFilter(value));
}
    

    return (
        <FormLabel>Find contacts by name
            <input type="text" value={filterValue}  onChange={ handleFilterChange } />
        </FormLabel>
    )
}

