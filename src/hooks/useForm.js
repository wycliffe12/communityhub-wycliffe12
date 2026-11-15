
import { useState } from "react";

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = (currentValues = values) => {
    const newErrors = validate ? validate(currentValues) : {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((previous) => ({ ...previous, [name]: true }));
    validateForm();
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    reset,
  };
}
