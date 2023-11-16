"use client";

import { Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import EventPage from "./services";

export default function ReportPage() {
  return (
    <>
      <NavbarComponent />
      <Tabs variant="soft-rounded" colorScheme="green" className="pt-20 container mx-auto">
        <Center>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Table</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <EventPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <FooterComponent />
    </>
  );
}
