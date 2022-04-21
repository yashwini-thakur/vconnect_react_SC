import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { validEmail, validPassword } from "./valMailPwd";
import sampleData from "./sampleData.json";

function Login() {
  const history = useHistory();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const store = (e) => {
    e.preventDefault();
    const validate = sampleData.dataList.filter(
      (f) => mail === f.email && password === f.Password
    );
    // if (!validEmail.test(mail)) {
    //   alert("Enter Valid Email.");
    // }
    // if (!validPassword.test(password)) {
    //   alert("Enter Valid Password.");
    // }
    if (validate.length > 0) {
      alert("Login Successful");
      localStorage.setItem("userDetail", JSON.stringify(validate[0]));
      localStorage.setItem("token", JSON.stringify(validate[0].token));
      history.push("/cards");
    } else {
      alert("Enter Proper credentials.");
    }
    console.log(validate[0]);
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="E:\180320111054\html prog\practice\Website\css\style.min.css"
          />
          <script
            src="https://kit.fontawesome.com/e5adb60c11.js"
            crossorigin="anonymous"
          ></script>
          <title>Lorem Ipsum</title>
        </head>
        <body>
          <section class="container">
            <div class="alert alert-danger">Enter Valid Credentials</div>
            <h1 class="large text-primary">Sign In</h1>
            <p class="lead">
              <i class="fa-solid fa-user"></i> Sign into your Account
            </p>
            <form action="dashboard.html" class="form" onSubmit={store}>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  minlength="6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Login" class="btn btn-primary" />
            </form>
            <p class="my-1">
              Don't have an account? <a href="register.html">Sign Up</a>
            </p>
          </section>
        </body>
      </html>
    </>
  );
}
export default Login;
