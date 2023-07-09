// Library imports
import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Local imports
import { createAccount, auth } from "../utils/auth";
import classes from "../styles/Form.module.css";
import { useAppSelector } from "../app/hooks";

// Form input fields' types
interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: FC = () => {
  // Register react-hook-form
  const { register, handleSubmit } = useForm<FormInputs>();

  // Get user's status
  const { isUser } = useAppSelector((state) => state.user);

  // Navigator
  const navigate = useNavigate();

  // Submit handler function for input form
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Create a new user on form submit
    await createAccount({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    navigate("/");
  };

  useEffect(() => {
    isUser
      ? navigate("/")
      : onAuthStateChanged(auth, (user) => {
          user && navigate("/");
        });
  }, []);

  if (!isUser) {
    return (
      <div className={`${classes.form} container`}>
        <div className={`logo`}>
          <Link to="/">
            <img src="/src/assets/icon.svg" alt="VauLT Logo" />
            <span>:VauLT:</span>
          </Link>
        </div>
        <h1 className={`${classes.form__heading}`}>Create A New Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={`${classes.form__field}`}>
            <span>Name</span>
            <input
              type="text"
              placeholder="John Doe"
              required
              {...register("name")}
            />
          </label>
          <label className={`${classes.form__field}`}>
            <span>Email</span>
            <input
              type="email"
              placeholder="johndoe@example.com"
              required
              {...register("email")}
            />
          </label>
          <label className={`${classes.form__field}`}>
            <span>Password</span>
            <input
              type="password"
              placeholder="********"
              required
              {...register("password")}
            />
          </label>
          <button
            type="submit"
            className={`${classes.form__button} button button-primary`}
          >
            Continue
          </button>
        </form>
        <p className={`${classes.form__link}`}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default CreateAccount;
