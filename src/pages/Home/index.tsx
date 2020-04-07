import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Checkbox from "../../components/checkbox";

const Home = () => {
  return (
    <MainLayout>
      <Checkbox />
      <div className="checkbox-label">Apple</div>
    </MainLayout>
  );
};
export default Home;
