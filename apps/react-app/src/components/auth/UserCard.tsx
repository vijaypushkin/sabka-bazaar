import {
  Avatar,
  Box,
  Group,
  Text,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useGetUser } from "../../graphql/queries/user.query";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const { data } = useGetUser();

  const handleClick = () => {
    if (!data?.user) {
      return navigate("/auth");
    }

    localStorage.removeItem("token");
    window.location.reload();
  };

  const renderContent = () => {
    if (!data?.user) {
      return (
        <Group>
          <Avatar src={null} radius="xl" />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Sign in / Sign Up
            </Text>
          </Box>
        </Group>
      );
    }

    const { name, email } = data.user;

    return (
      <Group>
        <Avatar src={null} radius="xl" color={theme.primaryColor}>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>
          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </Box>
      </Group>
    );
  };

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
        onClick={handleClick}
        aria-label="Logout"
      >
        {renderContent()}
      </UnstyledButton>
    </Box>
  );
};

export default UserCard;
