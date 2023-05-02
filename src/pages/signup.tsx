import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@mui/material/Input";
import { Button, Grid, TextField } from "@mui/material";

interface IFormInputs {
  username: string;
  email: string;
  password: string;
}
const onSubmit: SubmitHandler<IFormInputs> = data => {
  console.log(data)
};

export default function Signup() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>()

  console.log("Errors:", errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            id="username"
            label="Username"
            type="text"
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            {...register("username", {
              required: { value: true, message: "Please enter a username" },
              minLength: { value: 3, message: "Please enter a username between 3 and 16 characters" },
              maxLength: { value: 16, message: "Please enter a username between 3 and 16 characters" }
            })} />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            label="email"
            type="email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            {...register("email", {
              required: { value: true, message: "Please enter a valid email" },
            })} />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="password"
            type="password"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : null}
            {...register("password", {
              required: { value: true, message: "Please enter a password" },
              minLength: { value: 3, message: "Please enter a stronger password" },
            })} />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">Sign UP</Button>
        </Grid>

      </Grid>
    </form>
  );
};
