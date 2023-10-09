import { useEffect, useState } from "react";
import {
  retrieveTodoApi,
  updateTodoApi,
  createTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";

export default function TodoComponent() {
  const { id } = useParams();

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => retrieveTodos(), [id]);

  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();

  function retrieveTodos() {
    if (id != -1) {
      retrieveTodoApi(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    } else {
    }
  }

  function onSubmit(value) {
    const todo = {
      id: id,
      username: username,
      description: value.description,
      targetDate: value.targetDate,
      done: false,
    };
    if (id != -1) {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate(`/todos`);
        })
        .catch((error) => console.log(error));
    } else {
      createTodoApi(username, todo)
        .then((response) => {
          navigate(`/todos`);
        })
        .catch((error) => console.log(error));
    }
  }

  function validate(value) {
    let errors = {
      // description: "Enter a valid description",
      // targetDate: "Enter a valid target date",
    };
    console.log(value);
    if (value.description.length < 5) {
      errors.description = "Enter at least 5 character";
    }
    if (
      value.targetDate == null ||
      value.targetDate === "" ||
      !moment(value.targetDate).isValid()
    ) {
      errors.targetDate = "Enter a target date";
    }
    return errors;
  }

  return (
    <div className='container'>
      <h1>Enter Todo Details</h1>
      <Formik
        initialValues={{ description, targetDate }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form>
            <ErrorMessage
              name='description'
              component='div'
              className='alert alert-warning'
            />
            <ErrorMessage
              name='targetDate'
              component='div'
              className='alert alert-warning'
            />
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
