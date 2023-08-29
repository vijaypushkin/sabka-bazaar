import { Box, NavLink, Navbar } from "@mantine/core";
import React from "react";
import { useGetCategoriesWithChildren } from "../../graphql/queries/categories.query";
import { Link } from "react-router-dom";

interface SidebarProps {
  opened: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { data } = useGetCategoriesWithChildren();

  console.log(data);

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Box w={240}>
        {data?.categoriesWithChildren?.map((category) => (
          <Link to={`/categories/${category.categoryID}`} key={category._id}>
            <NavLink
              key={category._id}
              label={category.name}
              childrenOffset={28}
            >
              {category.children?.map((child) => (
                <NavLink key={child._id} label={child.name} />
              ))}
            </NavLink>
          </Link>
        ))}
      </Box>
    </Navbar>
  );
};

export default Sidebar;
