import "./Login.scss";

import TransparentFixed from "@/components/headers/TransparentFixed/TransparentFixed.jsx";

const Login = () => {
  return (
    <>
      <TransparentFixed />
      <main className="main-container-login">
        <div className="container-login">
          <p>Jūs prisijungėte!</p>
        </div>
      </main> 
    </>
  );
};

export default Login;
