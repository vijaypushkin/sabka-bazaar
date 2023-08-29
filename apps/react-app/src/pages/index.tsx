import React from "react";
import { useGetCategoriesWithChildren } from "../graphql/queries/categories.query";

// import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { data } = useGetCategoriesWithChildren();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default HomePage;
