import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  retrieveHelloWorldBean,
  retrieveHelloWorldPathVariable,
} from "./api/HelloWorldApiService";

export default function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  function callHelloworldRestApi() {
    // retrieveHelloWorldBean()
    //   .then((response) => successfulResponse(response))
    //   .catch((error) => errorResponse(error))
    //   .finally(() => console.log("cleanup"));

    retrieveHelloWorldPathVariable("oykwon")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }

  function successfulResponse(response) {
    console.log(response);
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className='Welcome'>
      <h1>Welcome {username}</h1>
      <div>
        Manage Your todos. <Link to='/todos'>Go hear</Link>
      </div>
      <div>
        <button className='btn btn-success m-5' onClick={callHelloworldRestApi}>
          Call Hello world rest api
        </button>
      </div>
      <div className='text-info'>{message}</div>
    </div>
  );
}
