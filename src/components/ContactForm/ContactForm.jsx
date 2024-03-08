import { Formik, Form, Field } from "formik"
const INITIAL_FORM_DATA = {
 name: "",
 number: ""
}

export const ContactForm = ({ handleAddContact }) => {

    const handleSubmit = (data, formActions) => {
        handleAddContact(data);
        formActions.resetForm;
    }
  return (
        <Formik 
        initialValues={INITIAL_FORM_DATA} 
        onSubmit={handleSubmit}>
        <Form>
            <label>
                <span>Name</span>
            <Field type="text" name="name"/>
            </label>
            <label>
                <span>Number</span>
            <Field type="text" name="number"/>
            </label>
         <button type="submit">Add contact</button>  
        </Form>
        </Formik>
  )
}

export default ContactForm
