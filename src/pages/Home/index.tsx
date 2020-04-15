import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Tag from "../../components/tag";
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter } from "ionicons/icons";

const Home = () => {
  const onClose = () => {
    console.log("on Close clicked");
  };
  return (
    <MainLayout>
      <div className="margin-top">
        <Tag
          color="white"
          icon={<IonIcon icon={logoFacebook} style={{ color: "#fff" }} />}
          bgColor="#3b5999"
          closeable
          onClose={onClose}
        >
          facebook
        </Tag>
        <Tag
          closeable
          color="white"
          icon={<IonIcon icon={logoTwitter} />}
          bgColor="#55acee"
        >
          twitter
        </Tag>
        <Tag closeable color="#f50">
          #f50
        </Tag>
        <Tag closeable color="purple">
          purple
        </Tag>
        <Tag closeable>Hello</Tag>
        <Tag type="success">Success</Tag>
        <Tag type="processing">Processing</Tag>
        <Tag type="error">error</Tag>
        <Tag type="warning">warning</Tag>
        <Tag type="default">default</Tag>
      </div>
    </MainLayout>
  );
};
export default Home;
