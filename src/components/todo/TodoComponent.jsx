import { useEffect, useState } from "react";
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";

export default function TodoComponent() {
  const { id } = useParams();

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => retrieveTodos(), [id]);

  const authContext = useAuth();
  const username = authContext.username;

  function retrieveTodos() {
    retrieveTodoApi(username, id)
      .then((response) => {
        setDescription(response.data.description);
        setTargetDate(response.data.targetDate);
      })
      .catch((error) => console.log(error));
  }

  function onSubmit(value) {
    console.log(value);
  }

  return (
    <div className='container'>
      <h1>Enter Todo Details</h1>
      <Formik
        initialValues={{ description, targetDate }}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <fieldset className='form-group'>
              <label>Description</label>
              <Field
                type='text'
                className='form-control'
                name='description'
              ></Field>
            </fieldset>
            <fieldset className='form-group'>
              <label>Target Date</label>
              <Field
                type='date'
                className='form-control'
                name='targetDate'
              ></Field>
            </fieldset>
            <div>
              <button className='btn btn-success m-5' type='submit'>
                save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
