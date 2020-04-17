import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Avatar from "../../components/avatar";
import { IonIcon } from "@ionic/react";
import { personOutline } from "ionicons/icons";

const Home = () => {
  return (
    <MainLayout>
      <div className="margin-top">
        <Avatar
          size="large"
          shape="circle"
          bgColor="#87d068"
          icon={<IonIcon icon={personOutline} />}
          badge={100}
        ></Avatar>
        <Avatar
          src="images/user.jpg"
          alt="user"
          shape="circle"
          size="large"
        ></Avatar>
        <Avatar
          size="small"
          shape="circle"
          icon={<IonIcon icon={personOutline} />}
          badge={100}
        ></Avatar>
        <Avatar
          src="images/user.jpg"
          alt="user"
          shape="circle"
          size="small"
          badge={100}
        ></Avatar>
        <Avatar
          icon={<IonIcon icon={personOutline} />}
          badge={2}
          color="black"
        ></Avatar>
        <Avatar src="images/user.jpg" alt="user" badge={100}></Avatar>
        <Avatar shape="circle" badge={100} color="black">
          BR
        </Avatar>
        <Avatar shape="circle" fontSize={11} top={14} left={2}>
          Binaya
        </Avatar>
      </div>
    </MainLayout>
  );
};
export default Home;
