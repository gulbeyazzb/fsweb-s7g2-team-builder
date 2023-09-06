const Form = ({ changeHandler, submitHandler, formData, isValid, errors }) => {
  return (
    <form
      className="bg-light text-info p-5 d-flex flex-column "
      onSubmit={submitHandler}
    >
      <label className="w-50 ">
        Name:
        <input
          className="ms-3"
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={changeHandler}
        />
      </label>
      <div className="text-danger">{errors.name}</div>
      <label>
        email:
        <input
          className="ms-3"
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>
      <div className="text-danger">{errors.email}</div>

      <label>
        rol:
        <input
          className="ms-3"
          type="text"
          name="rol"
          placeholder="role"
          value={formData.rol}
          onChange={changeHandler}
        />
      </label>
      <div className="text-danger">{errors.rol}</div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={changeHandler}
        />
        Şartları Kabul Ediyorum
      </label>
      <div className="text-danger">{errors.terms}</div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
export default Form;
