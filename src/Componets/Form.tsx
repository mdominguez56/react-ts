import { useForm } from "../Hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { form, handleChange } = useForm<FormData>({
    email: "",
    name: "",
    age: 0,
  });
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;
