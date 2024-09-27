import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

import { axiosInstance } from "../../config/config";

function Login() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axiosInstance.post("/api/auth/signin", {
        name: firstName + "-" + lastName,
        email: email,
        password: password,
      });
      setLoading(false);
      localStorage.setItem("userDetails", JSON.stringify(data.user_details));
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="register-main">
      <Card style={{ width: "28rem" }}>
        <Card.Header>Login</Card.Header>
        <Form className="mt-2" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button disabled={loading} variant="primary" type="submit">
            {loading ? "Loading" : "Login"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
