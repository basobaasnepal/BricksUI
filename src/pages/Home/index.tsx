import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Pagination from "../../components/pagination";

const Home = () => {
  const onPageChanged = (data: any) => {};
  return (
    <MainLayout>
      <Pagination
        totalRecords={100}
        pageLimit={10}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
      />
    </MainLayout>
  );
};
export default Home;
