import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Radio from "../../components/radio";

const Home = () => {
  const onChange = (e: any) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <MainLayout>
      <Radio
        onChange={onChange}
        name="color"
        animation
        radioItemMargin={20}
        vertical
        disabled
        label="blue"
        labelMargin={15}
        defaultChecker
      />
    </MainLayout>
  );
};
export default Home;
