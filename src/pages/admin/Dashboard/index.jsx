import React from "react";
import { FaUserCog, FaPlane } from "react-icons/fa";
import UserManagement from "../userManagement";
import Tabs from "./tab/tabs";

function Dashboard() {
  return (
    <Tabs>
      <div label="User Management" Icon={FaUserCog}>
        <UserManagement />
      </div>
      <div label="gì đó Management" Icon={FaPlane}>
        <div>gì đó Management</div>
      </div>
    </Tabs>
  );
}

export default Dashboard;
