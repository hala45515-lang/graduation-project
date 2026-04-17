import * as yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { setUser } from "../Redux/appSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignInSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      dispatch(
        setUser({
          id: user.uid,
          userName: user.displayName,
          email: user.email,
        })
      );

      Swal.fire({
        icon: "success",
        title: "Welcome back",
        text: "You signed in successfully",
        timer: 1500,
      });

      resetForm();
      setTimeout(() => navigate("/"), 1500);

    } catch (error) {
      const errorMessage =
        error?.code === "auth/invalid-credential"
          ? "Invalid email or password"
          : "Something went wrong";

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-1">
                  Email
                </label>

                <Field
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
                <label className="block text-gray-600 mb-1">
                  Password
                </label>

                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                <ErrorMessage
                  name="password"
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
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>

            </Form>
          )}
        </Formik>

        {/* Link to register */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignIn;