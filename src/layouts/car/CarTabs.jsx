import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
/* ============== Components & Layouts ============== */
import Gallery from "../../components/car/tabs/Gallery";
import Detail from "../../components/car/tabs/Detail";
import Stores from "../../components/car/tabs/Stores";

const CarTabs = () => {
  const [tab, setTab] = useState(0);

  const changeTab = (e, newTabNumber) => {
    setTab(newTabNumber);
  };

  return (
    <div>
      <div className="mb-6">
        <Tabs value={tab} onChange={changeTab} aria-label="basic tabs example">
          <Tab label="รายละเอียด" />
          <Tab label="รูปภาพเพิ่มเติม" />
          <Tab label={<p className="text-sky-600">สั่งจองคิวเยี่ยมชม</p>} />
        </Tabs>
      </div>
      <TabPanel value={tab} index={0}>
        <Detail />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Gallery />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <Stores/>
      </TabPanel>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default React.memo(CarTabs);
