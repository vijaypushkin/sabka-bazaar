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

// import styles from './SignUpForm.module.scss';

interface SignInFormProps {
  onSignUpClick: () => void;
}

interface SignInFormValues {
  email: string;
  password: string;
}
const SignInForm: React.FC<SignInFormProps> = (props) => {
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

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(() => {})}
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
