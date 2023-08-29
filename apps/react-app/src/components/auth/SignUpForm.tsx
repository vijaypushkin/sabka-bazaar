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

interface SignUpFormProps {
  onSignInClick: () => void;
}

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const form = useForm<SignUpFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      email: isEmail("Invalid email"),
      password: hasLength(
        { min: 8, max: 20 },
        "Password must be 8-20 characters long"
      ),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
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
        Sign up
      </Title>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        mt="md"
        {...form.getInputProps("name")}
      />
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

      <PasswordInput
        mt="md"
        label="Confirm password"
        placeholder="Confirm password"
        withAsterisk
        {...form.getInputProps("confirmPassword")}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>

      <Button
        mt={24}
        mx="auto"
        variant="subtle"
        w="100%"
        onClick={props.onSignInClick}
      >
        Already have an account?
      </Button>
    </Box>
  );
};

export default SignUpForm;
