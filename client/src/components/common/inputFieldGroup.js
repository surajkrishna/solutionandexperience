import React from "react";

const InputFieldGroup = ({
  type,
  placeholder,
  onChange,
  value,
  className,
  name,
  errors,
  info
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        name={name}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

export default InputFieldGroup;
