import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Skeleton from "../../components/skeleton";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Skeleton />
        <Skeleton rows={2} />
        <Skeleton rows={2} active />
        <Skeleton rows={3} avatar />
        <Skeleton rows={3} avatar active />
      </MainLayout>
    </>
  );
};
export default Home;
