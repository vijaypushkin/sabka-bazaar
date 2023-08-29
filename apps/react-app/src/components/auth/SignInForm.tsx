import React from "react";
import { useForm, isEmail, hasLength } from "@mantine/form";
import {
  Button,
  Group,
  TextInput,
  Box,
  PasswordInput,
  Title,
} from "@mantine/core";
import { SignInFormValues } from "common-lib/types";
import AuthAPI from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useLazyGetUser } from "../../graphql/queries/user.query";

// import styles from './SignUpForm.module.scss';

interface SignInFormProps {
  onSignUpClick: () => void;
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
  const navigate = useNavigate();
  const [_, { refetch }] = useLazyGetUser();

  const form = useForm<SignInFormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: hasLength(
        { min: 8, max: 20 },
        "Password must be 8-20 characters long"
      ),
    },
  });

  const handleSubmit = async (values: SignInFormValues) => {
    const [data, error] = await AuthAPI.signInUser(values);

    if (error != null) {
      console.log(error);
      return void 0;
    }

    localStorage.setItem("token", data.data.token);
    navigate("/");
    refetch();
  };

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <Title order={3} align="center">
        Sign In
      </Title>
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label="Password"
        placeholder="Password"
        withAsterisk
        mt="md"
        {...form.getInputProps("password")}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>

      <Button
        mt={24}
        mx="auto"
        variant="subtle"
        w="100%"
        onClick={props.onSignUpClick}
      >
        Create an account?
      </Button>
    </Box>
  );
};

export default SignInForm;
