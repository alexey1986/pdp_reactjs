import React from 'react';

const Button = ({title, handleClick}) => <button type="button" className="btn btn-light" onClick={handleClick}>{title}</button>;

export default Button;
