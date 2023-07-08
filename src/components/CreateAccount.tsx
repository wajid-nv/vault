// Library imports
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Form input fields' types
interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: FC = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name</span>
          <input type="text" {...register("name")} />
        </label>
        <br />
        <label>
          <span>Email</span>
          <input type="email" {...register("email")} />
        </label>
        <br />
        <label>
          <span>Password</span>
          <input type="password" {...register("password")} />
        </label>
        <br />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CreateAccount;
