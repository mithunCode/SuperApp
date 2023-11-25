import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Formik, Form, Field } from "formik";
import "./registration.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("This field is Required."),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("This field is Required."),
  email: Yup.string().email("Invalid email").required("This field is Required"),
  mobile: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("This field is Required."),
  toggle: Yup.string().required("Check this box if you want to proceed"),
});

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="reg-main">
      <div className="left-container">
        <p className="discover">Discover new things on Superapp</p>
      </div>
      <div className="right-container">
        <h2 className="super-app">Super App</h2>
        <p>Create your new account</p>
        <div>
          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              mobile: "",
              toggle: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              if (values["toggle"] === true) {
                localStorage.setItem("userData", JSON.stringify(values));
                navigate("/select");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="form-reg">
                {/* Name */}
                <div>
                  <Field
                    style={{}}
                    name="name"
                    className={`inp ${errors.name ? "fieldErr" : ""}`}
                    placeholder="Name"
                  />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                </div>
                {/* UserName */}
                <div>
                  <Field
                    name="username"
                    className={`inp ${errors.username ? "fieldErr" : ""}`}
                    placeholder="Username"
                  />
                  {errors.username && touched.username ? (
                    <div className="error">{errors.username}</div>
                  ) : null}
                </div>
                {/* Email */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    className={`inp ${errors.email ? "fieldErr" : ""}`}
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}{" "}
                </div>

                {/* Mobile */}
                <div>
                  <Field
                    name="mobile"
                    type="Number"
                    className={`inp ${errors.mobile ? "fieldErr" : ""}`}
                    placeholder="Mobile"
                  />
                  {errors.mobile && touched.mobile ? (
                    <div className="error">{errors.mobile}</div>
                  ) : null}
                </div>
                {/* Checkbox */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Field name="toggle" type="checkbox" className="tnC" />
                    <label htmlFor="tnc">
                      Share my registration data with Superapp
                    </label>
                  </div>

                  {errors.toggle && touched.toggle ? (
                    <div className="error">{errors.toggle}</div>
                  ) : null}
                </div>
                <button type="submit" className="signUp-btn">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="tnc-container">
          {" "}
          <p className="tnc">
            By clicking on Sign up. you agree to Superapp
            <span>
              {" "}
              Terms and Conditions of <br /> Use
            </span>
          </p>
          <p className="tnc">
            To learn more about how Superapp collects, uses, shares protects{" "}
            your <br />
            personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
