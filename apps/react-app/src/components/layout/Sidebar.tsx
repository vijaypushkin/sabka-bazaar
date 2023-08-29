import { NavLink, Navbar } from "@mantine/core";
import React from "react";
import { useGetCategoriesWithChildren } from "../../graphql/queries/categories.query";
import { Link, useLocation } from "react-router-dom";

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
      sx={{ overflow: "auto" }}
      width={{ sm: 200, lg: 300 }}
    >
      {data?.categoriesWithChildren?.map((category) => (
        <NavLink key={category._id} label={category.name} childrenOffset={28}>
          {category.children?.map((child) => (
            <Link to={`/categories/${child.categoryID}`} key={child.categoryID}>
              <NavLink
                component="span"
                key={child._id}
                label={child.name}
                active={location.pathname === `/categories/${child.categoryID}`}
              />
            </Link>
          ))}
        </NavLink>
      ))}
    </Navbar>
  );
};

export default Sidebar;
