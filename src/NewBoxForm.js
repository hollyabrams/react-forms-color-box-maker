import { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({
      width: parseInt(formData.width),
      height: parseInt(formData.height),
      backgroundColor: formData.backgroundColor,
    });
    setFormData({
      width: '',
      height: '',
      backgroundColor: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="widthInput">Width:</label>
      <input
        type="number"
        id="widthInput"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="heightInput">Height:</label>
      <input
        type="number"
        id="heightInput"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColorInput">Background Color:</label>
      <input
        type="text"
        id="backgroundColorInput"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm

