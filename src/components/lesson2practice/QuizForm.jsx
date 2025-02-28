import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./QuizForm.module.css";
import * as Yup from "yup";

const quizValidate = Yup.object().shape({
  topic: Yup.string().min(3, "Too short").max(10, "Too long").required("Required"),
  level: Yup.string().oneOf(["beginner", "medium", "high"]).required("Required"),
  time: Yup.number().min(10, "Must be 10 or more numbers").required("Required"),
  questions: Yup.number().min(3, "Must be 3 or more numbers").required("Required"),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <div className={css.quizFormWrapper}>
      <h1>Add skill</h1>
      <Formik
        initialValues={{
          topic: "",
          level: "beginner",
          time: 0,
          questions: 0,
        }}
        validationSchema={quizValidate}
        onSubmit={(values, actions) => {
          onAdd(values)
          actions.resetForm();
        }}
      >
        <Form className={css.formAction}>
          <label className={css.formContainer}>
            Topic
            <Field name="topic" placeholder="Topic" className={css.formInput} />
            <ErrorMessage name="topic"/>
          </label>

          <label className={css.formContainer}>
            Time
            <Field
              name="time"
              placeholder="Time"
              type="number"
              className={css.formInput}
            />
            <ErrorMessage name="time"/>
          </label>

          <label className={css.formContainer}>
            Questons
            <Field
              name="questions"
              placeholder="Questions"
              type="number"
              className={css.formInput}
            />
            <ErrorMessage name="questions"/>
          </label>

          <label className={css.formContainer}>
            Level
            <Field as="select" name="level">
              <option value="beginner">Beginner</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
          </label>

          <button type="submit" className={css.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
