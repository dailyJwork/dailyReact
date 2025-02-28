import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./Contact.module.css"

const contactValidation = Yup.object().shape({
    name: Yup.string().min(2, "Too short").max(10, "Too long").required("Required"),
    number: Yup.string().min(7).required("Required")
})

export const ContactForm = ({ onAdd }) => {
    return (
        <>
        <Formik
        initialValues={{
            name: "",
            number: ""
        }}
        onSubmit={(values, actions) => {
            onAdd(values)
            actions.resetForm()
        }}
        validationSchema={contactValidation}
        >
        <Form className={css.contactForm}>
        <label>
            <p>Name</p>
            <Field type="text" name="name" placeholder="Your name"/>
            <ErrorMessage name="name"/>
        </label>
        <label>
            <p>Number</p>
            <Field type="text" name="number" placeholder="xxx-xx-xx" />
            <ErrorMessage name="number"/>
        </label>
        <button type="submit">Add contact</button>
        </Form>
        </Formik>
        </>
    )
}