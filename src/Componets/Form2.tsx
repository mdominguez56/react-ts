import { useForm } from "../Hooks/useForm";

interface FormData {
  cp: number;
  adress: string;
}

const Form2 = () => {
  const { cp, adress, form, handleChange } = useForm<FormData>({
    cp: 0,
    adress: "",
  });
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">CP:</label>
        <input
          type="number"
          className="form-control"
          name="cp"
          value={cp}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Adress:</label>
        <input
          type="text"
          className="form-control"
          name="adress"
          value={adress}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form2;
