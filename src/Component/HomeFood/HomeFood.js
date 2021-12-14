import {
  Tab,
  Tabs,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import Lunch from "../Lunch/Lunch";
import Evening from "../Evening/Evening";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Drinks from "../Drinks/Drinks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeFood = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ width: "100%" }} id="foods">
      <Container>
        <Box>
          <Typography sx={{ textAlign: "center" }} variant="h2">
            Foods
          </Typography>
        </Box>

        <Box variant="scrollable">
          {isMobile ? (
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab
                label="Breakfast"
                {...a11yProps(0)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label="Lunch"
                {...a11yProps(1)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label="Evening"
                {...a11yProps(2)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label=" Dinner"
                {...a11yProps(3)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label=" Drinks"
                {...a11yProps(4)}
                sx={{ fontFamily: "Lobster" }}
              />
            </Tabs>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              aria-label="basic tabs example"
            >
              <Tab
                label="Breakfast"
                {...a11yProps(0)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label="Lunch"
                {...a11yProps(1)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label="Evening"
                {...a11yProps(2)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label=" Dinner"
                {...a11yProps(3)}
                sx={{ fontFamily: "Lobster" }}
              />
              <Tab
                label=" Drinks"
                {...a11yProps(4)}
                sx={{ fontFamily: "Lobster" }}
              />
            </Tabs>
          )}
        </Box>
        <TabPanel value={value} index={0}>
          <Breakfast></Breakfast>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Lunch></Lunch>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Evening></Evening>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Dinner></Dinner>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Drinks></Drinks>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default HomeFood;
