"use client";

import { Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import EventPage from "./table";

export default function ReportPage() {
  return (
    <>
      <NavbarComponent />
      <Tabs variant="soft-rounded" colorScheme="green" className="pt-20 container mx-auto">
        <Center>
          <TabList>
            <Tab>Map Action</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Table</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <div className="container mx-auto max-[640px]:mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 lg:mt-5">
              <div className="max-w-screen-xl px-4 mx-auto">
                <div className="mx-auto mb-8 text-center">
                  <h2 className="mb-4 font-black text-5xl text-textColor tracking-tigh">Report Action</h2>
                  <p className="mb-5 font-base text-textColor sm:text-xl">Report trash in the area around you</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63824.949709079265!2d104.0606994!3d1.1175794499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d988dc34cd0ecb%3A0xe373ee32cae6412!2sBatam%20Kota%2C%20Batam%20City%2C%20Riau%20Islands!5e0!3m2!1sen!2sid!4v1696926080530!5m2!1sen!2sid"
                  width="100%"
                  height="600"
                  allowFullScreen="true"
                  loading="lazy"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <section className="">
                  <div className="pt-16 mx-auto max-w-screen-xl">
                    <form action="#" className="space-y-8">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="name@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Let us know how the rubbish spesificly"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows="6"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Leave a location..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white bg-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Send location
                      </button>
                    </form>
                  </div>
                </section>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-0 lg:space-y-0"></div>
              </div>
            </div>
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
