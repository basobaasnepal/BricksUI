import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Select from "../../components/select";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";

const Home = () => {
  const listItem = [
    { label: "First", value: "I am value of first" },
    { label: "Second", value: "hello second" },
    { label: "Third", value: "I am value of  Third" },
    { label: "Fourth", value: "I am value of  Fourth" }
  ];
  const handleChange = (e: any) => {};

  return (
    <MainLayout>
      <Select
        icon={<IonIcon icon={chevronDownOutline} />}
        options={listItem}
        onChange={handleChange}
        name="food"
        multiple
        disapper
      ></Select>
    </MainLayout>
  );
};
export default Home;
