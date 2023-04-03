function Box({ id, width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
    display: 'inline-block',
    margin: '10px',
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div style={boxStyle}>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
