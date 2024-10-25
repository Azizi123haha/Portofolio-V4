import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PIcon from "../Components/CardIcon";
import AOS from "aos";
import "aos/dist/aos.css";

function TabPanel(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%]  md:mt-20 mt-10" id="Tabs" data-aos="fade-up" data-aos-duration="800">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }} className="px-[6%]">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              margin: "0 auto",
            }}
          >
            <Tab
              label="Skills"
              {...a11yProps(0)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
            <Tab
              label="Hobbies"
              {...a11yProps(1)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
            <Tab
              label="Profile"
              {...a11yProps(2)}
              sx={{
                fontWeight: "Bold",
                color: "#ced4d7",
                fontSize: ["1rem", "2rem"],
              }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {/* Programming icon / tech stack  */}
                <PIcon PIcon="html.svg" Language="HTML" />
                <PIcon PIcon="css.svg" Language="CSS" />
                <PIcon PIcon="javascript.svg" Language="JavaScript" />
                <PIcon PIcon="tailwind.svg" Language="Tailwind CSS" />
                <PIcon PIcon="reactjs.svg" Language="ReactJS" />
                <PIcon PIcon="vite.svg" Language="Vite" />
                <PIcon PIcon="nodejs.svg" Language="Node JS" />
                <PIcon PIcon="bootstrap.svg" Language="Bootstrap" />
                <PIcon PIcon="firebase.svg" Language="Firebase" />
                <PIcon PIcon="MUI.svg" Language="Material UI" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* Add content for the Hobbies tab here */}
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {/* Hobby icons or text here */}
                <PIcon PIcon="guitar.svg" Language="Guitar" />
                <PIcon PIcon="book.svg" Language="Reading" />
                <PIcon PIcon="hiking.svg" Language="Hiking" />
                {/* Add more hobby icons or text as needed */}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* Content for the Profile tab */}
            <div className="container mx-auto flex justify-center items-center">
              {/* Add your profile information here, such as name, photo, bio, etc. */}
              <div className="profile-info">
                <img src="your_profile_picture.jpg" alt="Your Name" />
                <h2>Your Name</h2>
                <p>Your Bio</p>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
