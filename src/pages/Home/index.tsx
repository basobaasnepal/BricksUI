import React, { useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import Toast from "../../components/toast";
import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { Button } from "../../components/buttons";

const Home = () => {
  const [display, setDisplay] = useState(false as boolean);
  const handleClick = () => {
    setDisplay(true);
  };
  return (
    <>
      <MainLayout>
        <Button type="primary" onClick={handleClick}>
          Click here
        </Button>
        {display && (
          <Toast
            title="Notification Title"
            content="I will never close automatically. This is a purposely very very long description that has many many characters and words."
            icon={<IonIcon icon={alertCircleOutline} />}
            position="topRight"
          />
        )}
      </MainLayout>
    </>
  );
};
export default Home;
