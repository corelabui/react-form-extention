import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  function search(formData) {
    const query = formData.get('query');
    alert(`You searched for '${query}'`);
  }
  return (
    <Form action={search} validateOnChange className="form">
      <h1>Simple search bar</h1>
      <Input
        id="query"
        name="query"
        type="search"
        placeholder="Search for..."
        classes={{
          field: 'form__input-field',
          error: 'form__input-field__error',
          label: 'form__input-field__label',
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
