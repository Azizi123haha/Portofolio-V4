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
import PIcon from "../Components/CardIcon";
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
      style={{ overflow: "hidden" }}
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

// Styled card box dengan latar belakang gelap
const StyledBox = styled(Box)({
  padding: "20px",
  backgroundColor: "#333",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  color: "#ced4d7",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sections = [
    {
      title: "Designing",
      description:
        "I love designing. When I see something that needs improvement, I enjoy making it better visually. I pay attention to every detail, whether it’s a graphic or a user interface. My goal is to create designs that catch the eye and inspire others.",
    },
    {
      title: "Developing",
      description:
        "After designing, I dive into development. Coding is where I bring designs to life, turning concepts into digital experiences. Each line of code reflects my vision for functionality and elegance, showcasing my commitment to excellence.",
    },
    {
      title: "Expanding",
      description:
        "Expanding beyond creation. I optimize templates to full websites. I refine post-development. Leveraging blogging and basic SEO, I enhance visibility and impact online. Each step maximizes reach and effectiveness online.",
    },
  ];

  const projects = [
    {
      title: "Aritmatika Solver",
      description: "Membuat sebuah program menggunakan Python yang membantu menyelesaikan soal-soal Aritmatika dengan mudah.",
      image: "/images/arithmetic_solver.png",
      url: "https://example.com/arithmetic-solver",
    },
    {
      title: "AutoChat-Discord",
      description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.",
      image: "/images/autochat_discord.png",
      url: "https://example.com/autochat-discord",
    },
    {
      title: "Buku Catatan",
      description: "Buku Catatan adalah aplikasi untuk membuat, menyimpan, dan mengelola catatan secara digital.",
      image: "/images/buku_catatan.png",
      url: "https://example.com/buku-catatan",
    },
  ];

  return (
    <div className="md:px-[10%] md:mt-20 mt-10" id="Tabs">
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }} className="px-[6%]" data-aos="fade-down">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered  // Properti untuk memusatkan tabs
            sx={{
              display: "flex",
              justifyContent: "center",  // Memusatkan tabs
              width: "100%",
            }}
          >
            <Tab label="Projects" {...a11yProps(0)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"], marginBottom: "10px" }} />
            <Tab label="Things I Love" {...a11yProps(1)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"], marginBottom: "10px" }} />
            <Tab label="Skills" {...a11yProps(2)} sx={{ fontWeight: "bold", color: "#ced4d7", fontSize: ["1rem", "2rem"], marginBottom: "10px" }} />
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
                  <Box
                    sx={{
                      mt: 2,
                      py: 1,
                      px: 4,
                      backgroundColor: "#2d3748",
                      borderRadius: "5px",
                      color: "#ced4d7",
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#4a5568",
                      },
                    }}
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    View Project
                  </Box>
                </StyledBox>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex flex-col items-center" style={{ overflow: "hidden" }}>
              {sections.map((section, index) => (
                <div key={index} className="p-5 text-center" data-aos="fade-left" data-aos-delay={`${index * 100}`}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>{section.title}</Typography>
                  <Typography sx={{ color: "#ced4d7" }}>{section.description}</Typography>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex flex-col justify-center items-center" style={{ overflow: "hidden" }} data-aos="fade-up" data-aos-delay="200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
        </SwipeableViews>
      </Box>
    </div>
  );
}
