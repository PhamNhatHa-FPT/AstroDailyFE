import React from "react";
import {
  FaUserCog,
  FaHouseUser,
  FaPaperPlane,
  FaJournalWhills,
} from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import HouseManagement from "../HouseManagement";
import PlanetManagement from "../PlanetManagement";
import QuoteManagement from "../QuoteManagement";
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
        <HouseManagement />
      </div>
      <div label="Planet Management" Icon={FaPaperPlane}>
        <PlanetManagement />
      </div>
      <div label="Zodiac Management" Icon={FaJournalWhills}>
        <ZodiacManagement />
      </div>
      <div label="Quote Management" Icon={BsFillBellFill}>
        <QuoteManagement />
      </div>
    </Tabs>
  );
}

export default Dashboard;
