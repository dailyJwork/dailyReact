import { Formik, Form, Field } from "formik";

export const MaterialForm = ({ onSubmit, isSubbmiting }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: "", link: "" }} onSubmit={handleSubmit}>
      <Form>
        <label>
          <p>Title</p>
          <Field name="title" placeholder="title" type="text" />
        </label>
        <label>
          <p>Link</p>
          <Field name="link" placeholder="link" type="text" />
        </label>
        <button type="submit" disabled={isSubbmiting}>Add material</button>
      </Form>
    </Formik>
  );
};
