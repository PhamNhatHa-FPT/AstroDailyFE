import React from "react";
import {
  FaUserCog,
  FaPlane,
  FaHouseUser,
  FaPaperPlane,
  FaJournalWhills,
} from "react-icons/fa";
import HouseManagement from "../HouseManagement";
import PlanetManagement from "../PlanetManagement";
import UserManagement from "../userManagement";
import ZodiacManagement from "../ZodiacManagement";
import Tabs from "./tab/tabs";

function Dashboard() {
  return (
    <Tabs>
      <div label="User Management" Icon={FaUserCog}>
        <UserManagement />
      </div>
      <div label="House Management" Icon={FaHouseUser}>
        <HouseManagement/>
      </div>
      <div label="Planet Management" Icon={FaPaperPlane}>
        <PlanetManagement/>
      </div>
      <div label="Zodiac Management" Icon={FaJournalWhills}>
        <ZodiacManagement/>
      </div>
    </Tabs>
  );
}

export default Dashboard;
