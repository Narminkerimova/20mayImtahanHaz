import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.css"
import { RequestContext } from '../../context/RequestProvider';
import { useContext } from 'react';

function AdminAdd() {
  const {url,postElement} = useContext(RequestContext)
  return (
    <>
    <title>Admin Add</title>
    <Formik
      initialValues={{ name: '', price: '', image: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        price: Yup.number()
          .required('Required'),
        image: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting ,resetForm}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        postElement(url,values)
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="name">Product Name</label>
        <Field name="name" type="text" className="formikInp"/>
        <div className="errorFormik">
        <ErrorMessage name="name" />
        </div>

        <label htmlFor="price">Price</label>
        <Field name="price" type="text" className="formikInp"/>
        <div className="errorFormik">
        <ErrorMessage name="price" />
        </div>

        <label htmlFor="image">Image URL</label>
        <Field name="image" type="text" className="formikInp"/>
        <div className="errorFormik">
        <ErrorMessage name="image" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>
    
  );
};


export default AdminAdd