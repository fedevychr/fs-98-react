import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { apiAddContacts } from '../../redux/contacts/contactsSlice';

const AddContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  number: Yup.string().required('Number is required!'),
});

const FORM_INITIAL_VALUES = {
  name: '',
  number: '',
};

const AddContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(apiAddContacts(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={AddContactSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Add new contact</h2>
          <label>
            <span>Name:</span>
            <br />
            <Field type="text" name="name" placeholder="york" />
            <ErrorMessage component="p" name="name" />
          </label>
          <br />
          <label>
            <span>Number:</span>
            <br />
            <Field type="text" name="number" placeholder="Enter your number" />
            <ErrorMessage component="p" name="number" />
          </label>
          <br />
          <button type="submit">Create new contact 🙎‍♂️</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContactForm;
