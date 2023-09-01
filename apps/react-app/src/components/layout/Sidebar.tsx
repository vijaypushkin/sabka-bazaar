import { NavLink, Navbar } from "@mantine/core";
import React from "react";
import { useGetCategoriesWithChildren } from "../../graphql/queries/categories.query";
import { Link, useLocation } from "react-router-dom";
import UserCard from "../auth/UserCard";

interface SidebarProps {
  opened: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const location = useLocation();
  const { data } = useGetCategoriesWithChildren();

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow mt="md" sx={{ overflow: "auto" }}>
        {data?.categoriesWithChildren?.map((category) => (
          <NavLink key={category._id} label={category.name} childrenOffset={28}>
            {category.children?.map((child) => (
              <Link
                to={`/categories/${child.categoryID}`}
                key={child.categoryID}
              >
                <NavLink
                  component="span"
                  key={child._id}
                  label={child.name}
                  active={
                    location.pathname === `/categories/${child.categoryID}`
                  }
                />
              </Link>
            ))}
          </NavLink>
        ))}
      </Navbar.Section>
      <Navbar.Section mt="md">
        <UserCard />
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
