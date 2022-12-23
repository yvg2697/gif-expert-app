import { PropTypes } from "prop-types";
import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories((category) => [...category, input]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
