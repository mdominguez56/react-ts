import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    ...form,
  };
};
