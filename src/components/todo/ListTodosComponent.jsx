import { useEffect, useState } from "react";
import {
  retrieveAllTodosForUsername,
  deleteTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
  // const today = new Date();
  // const targetDate = new Date(
  //   today.getFullYear() + 12,
  //   today.getMonth(),
  //   today.getDate()
  // );

  const authContext = useAuth();
  const username = authContext.username;

  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  const [message, setMessage] = useState();

  useEffect(() => refreshTodo(), []);

  function refreshTodo() {
    retrieveAllTodosForUsername(username)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }
  // const todos = [
  //   { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
  //   {
  //     id: 2,
  //     description: "Learn FullStack Dev",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  // ];

  function deleteTodo(id) {
    deleteTodoApi(username, id)
      .then((respnse) => {
        setMessage(`Delete of todo with ${id} successful`);
        refreshTodo();
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(id) {
    navigate(`/todo/${id}`);
    console.log(id);
  }

  function addNewTodo() {
    navigate(`/todo/-1`);
  }

  return (
    <div className='container'>
      <h1>Things You Want To do!</h1>
      {message && <div className='alert alert-warning'>{message}</div>}
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Descriptions</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((element) => (
              <tr key={element.id}>
                <td>{element.description}</td>
                <td>{element.done.toString()}</td>
                {/* <td>{element.targetDate.toDateString()}</td> */}
                <td>{element.targetDate.toString()}</td>
                <td>
                  <button
                    className='btn btn-warning'
                    onClick={() => deleteTodo(element.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-success'
                    onClick={() => updateTodo(element.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className='btn btn-success m-5' onClick={addNewTodo}>
        Add New Todo
      </button>
    </div>
  );
}
