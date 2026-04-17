import * as yup from "yup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Rejester = () => {

const navigate = useNavigate();

  const RegisterSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string()
      .min(6, "Password must be at least 6 characters")
      .required(),
    confirmPassword: yup.string()
      .oneOf(
        [yup.ref("password"), null],"Passwords must match")
        .required("Confirm Password is required")
      ,
  });

  const handleSubmit = async (values) => {
    const auth = getAuth();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

     await updateProfile(auth.currentUser, {
        displayName: values.name,
      });

      Swal.fire({
        icon: "success",
        title: "Account created successfully",
        text: "Your account has been created successfully",
        timer: 1500,
      }).then(() => {
        navigate("/signin");
      })
      
      ;


      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create Account
      </h2>
  
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                User Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
  
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
  
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
  
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">
                Confirm Password
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
  
            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
  
          </Form>
        )}
      </Formik>
    </div>
  </div>
  );
};

export default Rejester;
