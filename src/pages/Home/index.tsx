import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Breadcrum from "../../components/breadcrum";
import BreadcrumItems from "../../components/breadcrumItems";
import { IonIcon } from "@ionic/react";
import { homeOutline, earthOutline, personOutline } from "ionicons/icons";

const Home = () => {
  return (
    <MainLayout>
      <div className="margin-top"></div>
      <Breadcrum>
        <BreadcrumItems icon={<IonIcon icon={homeOutline} />} seperator=">">
          <a href="google.com">Home</a>
        </BreadcrumItems>
        <BreadcrumItems icon={<IonIcon icon={earthOutline} />} seperator=">">
          News
        </BreadcrumItems>
        <BreadcrumItems icon={<IonIcon icon={personOutline} />} seperator=">">
          Local
        </BreadcrumItems>
        <BreadcrumItems>Trending</BreadcrumItems>
      </Breadcrum>
    </MainLayout>
  );
};
export default Home;
