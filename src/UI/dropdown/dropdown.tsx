import {forwardRef, useImperativeHandle, useState} from 'react';
import { DropdownComponentProps, DropdownProps } from "../../interfaces/task";

const Dropdown = forwardRef(({options} : DropdownComponentProps, ref) => {
    const [selectedValue, setSelectedValue] = useState<string>();

    // Expose `getSelectedValue` to parent via useImperativeHandle
    useImperativeHandle(ref, () => ({
        getSelectedValue: () => selectedValue,
    }));

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    };

    const renderedOptions = options.map((option: DropdownProps) => {
        return <option value={option.value}>{option.label}</option>
    })
    return(
        <select onChange={handleChange}>
            {renderedOptions}
        </select>
    )
});

export default Dropdown;