import React from "react";

const Filter = ({onCategoryChange}) => {
    function handleChange(event) {
        onCategoryChange(event.target.value)
    }
    return (
        <select name="filter" onChange={handleChange}>
            <option valueu = "All">Filter by Category</option>
            <option value = "Produce">Produce</option>
            <option value = "Dairy">Dairy</option>
            <option value = "Dessert">Dessert</option>
        </select>
    )
}

export default Filter