import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Input from "../../components/input";
import Search from "../../components/search";
import Textarea from "../../components/textarea";
import { person, search } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Home = () => {
  return (
    <MainLayout>
      <div className="title">Home</div>
      <Input type="password" />
      <Input
        prefix={<IonIcon icon={person} />}
        suffix={<IonIcon icon={search} />}
      />
      <Input
        prefix={<IonIcon icon={person} />}
        suffix={<IonIcon icon={person} />}
        preTab="https://"
      />
      <Input postTab=".com" preTab="https://" />
      <Input
        prefix={<IonIcon icon={person} />}
        suffix={<IonIcon icon={person} />}
        preTab="https://"
        postTab=".com"
        size="small"
      />
      <Input
        suffix={<IonIcon icon={person} />}
        preTab="https://"
        postTab=".com"
      />
      <Input suffix={<IonIcon icon={person} />} postTab=".com" />
      <Input prefix={<IonIcon icon={person} />} preTab="https://" />
      <Input prefix={<IonIcon icon={person} />} postTab=".com" />
      <Input size="small" />
      <Input size="small" />
      <Input size="large" suffix={<IonIcon icon={person} />} />
      <Input size="large" />
      <Search />
      <Search button="icon" />
      <Search size="small" button="icon" />
      <Search size="large" button="icon" />
      <Search size="large" button="block" />
      <Textarea />
    </MainLayout>
  );
};
export default Home;
