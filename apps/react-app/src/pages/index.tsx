import React from "react";
import { useGetParentCategories } from "../graphql/queries/categories.query";

// import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { data } = useGetParentCategories();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default HomePage;
