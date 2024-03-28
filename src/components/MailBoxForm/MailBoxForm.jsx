import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MAX_CHAR_NAME_VALIDATION } from '../../utils/constants';

const mailBoxSchema = Yup.object().shape({
  userEmail: Yup.string()
    .required('Email address is required!')
    .email('You must enter valid email address!'),
  userName: Yup.string()
    .required('User name is required!')
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`,
    ),
  favColor: Yup.string()
    .required('Favorite color is required!')
    .oneOf(
      ['red', 'green', 'blue'],
      'Favorite color must be one of following: red, green, blue',
    ),
});

const FORM_INITIAL_VALUES = {
  userEmail: '',
  userName: '',
  favColor: '', // 'red' | 'green' | 'blue'
};

const MailBoxForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={mailBoxSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Add new mailbox user</h2>
        <label>
          <span>User email:</span>
          <br />
          <Field type="email" name="userEmail" placeholder="york@i.ua" />
          <ErrorMessage component="p" name="userEmail" />
        </label>
        <br />
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="York York" />
          <ErrorMessage component="p" name="userName" />
        </label>
        <br />
        <span>Favorite color:</span>
        <br />
        <label>
          <span>Red:</span>
          <Field type="radio" value="red" name="favColor" />
        </label>
        <label>
          <span>Green:</span>
          <Field type="radio" value="green" name="favColor" />
        </label>
        <label>
          <span>Blue:</span>
          <Field type="radio" value="blue" name="favColor" />
        </label>
        <ErrorMessage component="p" name="favColor" />
        <br />
        <button type="submit">▶ Create new user</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;
