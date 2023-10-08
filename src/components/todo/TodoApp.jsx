import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import TodoComponent from "./TodoComponent";
import "./TodoApp.css";
import AuthProvider, { useAuth } from "./security/AuthContext";
// import FooterComponent from "./FooterComponent";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to='/' />;
  }
}

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
            <Route
              path='/login'
              element={<LoginComponent></LoginComponent>}
            ></Route>
            <Route
              path='/welcome/:username'
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path='/todos'
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent></ListTodosComponent>
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path='/todo/:id'
              element={
                <AuthenticatedRoute>
                  <TodoComponent></TodoComponent>
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path='/logout'
              element={
                <AuthenticatedRoute>
                  <LogoutComponent></LogoutComponent>
                </AuthenticatedRoute>
              }
            ></Route>
            <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
          </Routes>
          {/* <FooterComponent /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
