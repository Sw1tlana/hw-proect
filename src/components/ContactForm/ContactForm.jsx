 import { Formik, Form, Field } from "formik";

 const INITIAL_FORM_DATA = {
  name: "",
  number: ""
 }

const ContactForm = ({ handleAddContacts }) => {
const handleSubmit = (data, formActions) => {
handleAddContacts(data);
formActions.resetForm();
}
  return (
    <div>
      <Formik
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}>
        <Form>
          <Field
          type="text"
          name="name"
          />
          <Field
          type="text"
          name="number"
          />
        <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm

