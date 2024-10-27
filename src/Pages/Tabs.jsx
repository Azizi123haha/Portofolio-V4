import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/system";

function TabPanel(props) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
    });
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

const StyledBox = styled(Box)({
  padding: "20px",
  backgroundColor: "#333333", // Warna latar belakang card yang gelap
  borderRadius: "10px", // Membuat sudut card melengkung
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Memberikan bayangan
  color: "#ced4d7", // Warna teks yang kontras
  transition: "transform 0.3s ease", // Efek transisi untuk animasi hover
  "&:hover": {
    transform: "scale(1.05)", // Efek memperbesar saat dihover
  },
});

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = [
    {
      title: "Aritmatika Solver",
      description: "Membuat sebuah program menggunakan Python yang membantu menyelesaikan soal-soal Aritmatika dengan mudah.",
      image: "/images/arithmetic_solver.png",
    },
    {
      title: "AutoChat-Discord",
      description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.",
      image: "/images/autochat_discord.png",
    },
    {
      title: "Buku Catatan",
      description: "Buku Catatan adalah aplikasi untuk membuat, menyimpan, dan mengelola catatan secara digital.",
      image: "/images/buku_catatan.png",
    },
  ];

  return (
    <div className="md:px-[10%] md:mt-20 mt-10" id="Tabs" style={{ backgroundColor: "#f0f0f0" }}>
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }} className="px-[6%]" data-aos="fade-down">
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
            <Tab label="Projects" {...a11yProps(0)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"], marginBottom: "10px" }} />
          </Tabs>
        </AppBar>
        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <StyledBox
                  key={index}
                  className="text-center p-6"
                  data-aos="fade-right"
                  data-aos-delay={`${index * 150}`}
                >
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-32 object-cover mb-4 rounded" />
                  )}
                  <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: "bold" }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "#ced4d7", marginTop: "8px" }}>
                    {project.description}
                  </Typography>
                  <Box sx={{
                    mt: 2,
                    py: 1,
                    px: 4,
                    backgroundColor: "#2d3748", // Warna button mirip dengan gambar
                    borderRadius: "5px",
                    color: "#ced4d7",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#4a5568", // Warna hover button
                    }
                  }}>
                    View Project
                  </Box>
                </StyledBox>
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
