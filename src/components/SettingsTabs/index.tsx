"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, type FC } from "react";
import { TabItem } from "./TabItem";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail, LockKeyhole, SaveIcon
} from "lucide-react";
import { Line } from "@/components/Line";
import * as FileInput from "@/components/Uploader/Uploader";
import { TextInput } from "@/components/Inputs/Text";
import * as Dropdown from "@/components/Inputs/Select/Select";
import { Button } from "@/components/Button";
import { ProfileImg } from "../ProfileImg";
import { passedTime } from "@/utils/passedTime";
import { PassContextProvider } from "@/contexts/PassContext";
import { ProfileCard } from "../ProfileCard";
import personaimporter from "@/utils/personaimporter";



export const SettingsTabs: FC = () => {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="" type="scroll">
        <ScrollArea.Viewport className="">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="My details"
              isSelected={currentTab === "tab1"}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={currentTab === "tab2"}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={currentTab === "tab3"}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={currentTab === "tab4"}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={currentTab === "tab5"}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={currentTab === "tab6"}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={currentTab === "tab7"}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={currentTab === "tab8"}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={currentTab === "tab9"}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={currentTab === "tab10"}
            />
          </Tabs.List>

          <Tabs.Content value="tab1">
            <section className="mt-6 flex flex-col">
              <div className="flex flex-col lg:flex-row gap-4 lg:justify-between border-b border-zinc-200 dark:border-zinc-700 pb-5">
                <div>
                  <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    Personal Info
                  </h2>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Update your photo and personal details here
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    type="button"
                    className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" form="settings">
                    Save
                  </Button>
                </div>
              </div>
              <form
                id="settings"
                className="mt-6 flex justify-start flex-col gap-5 w-full"
              >
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name
                  </h1>

                  <div className="flex flex-1 flex-col sm:flex-row gap-3">
                    <TextInput
                      placeholder="Name"
                      id="firstName"
                      defaultValue="Matheus"
                      className="flex-1"
                    />
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:sr-only"
                    >
                      Last Name
                    </label>
                    <TextInput
                      placeholder="Last Name"
                      id="lastName"
                      defaultValue="Godinho"
                      className="flex-1"
                    />
                  </div>
                </div>
                <Line />
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center pt-1/2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Email
                  </label>
                  <div className="flex-1">
                    <TextInput
                      hasPrefix
                      icon={Mail}
                      placeholder="Email"
                      id="email"
                      type="email"
                      defaultValue="matheusgblasel@hotmail.com"
                      className="flex-1"
                    />
                  </div>
                </div>
                <Line />
                {/**User Uploader */}
                <FileInput.Root className="flex flex-col lg:flex-row gap-10">
                  <FileInput.Description
                    title="Your Photo"
                    subT="Upload Your Photo Here"
                  />
                  <FileInput.UserPreview />
                  <FileInput.Main className="flex-1 justify-center! items-center!">
                    <FileInput.Trigger />
                    <FileInput.Control multiple={false} />
                  </FileInput.Main>
                </FileInput.Root>
                {/**User Uploader End */}
                <Line />
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center pt-1/2">
                  <label
                    htmlFor="role"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Role
                  </label>
                  <TextInput id="role" defaultValue="CTO" className="flex-1" />
                </div>
                <Line />
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-4 lg:items-center pt-1/2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Country
                  </h1>
                  <Dropdown.Container
                    placeholder="Select a country..."
                    className="flex-1"
                  >
                    <Dropdown.Item value="br" text="Brazil" />
                    <Dropdown.Item value="us" text="United States" />
                  </Dropdown.Container>
                </div>
                <Line />
                <div className="flex flex-col gap-10 lg:gap-2 lg:flex-row lg:items-center">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Timezone
                  </h1>
                  <Dropdown.Container placeholder="Select a timezone...">
                    <Dropdown.Item
                      value="utc8"
                      text="Pacific Standard Time(UTC-08:00)"
                    />
                    <Dropdown.Item
                      value="utc3"
                      text="America São Paulo(UTC-03:00)"
                    />
                  </Dropdown.Container>
                </div>
                <Line />
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="bio"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Bio
                    <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                      Write a short introduction
                    </span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                      <Dropdown.Container placeholder="" defaultValue="normal">
                        <Dropdown.Item value="normal" text="Normal Text" />
                        <Dropdown.Item value="md" text="Markdown" />
                      </Dropdown.Container>
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          className="p-2 rounded-md hover:bg-zinc-100"
                        >
                          <Bold
                            className="w-4 h-4 text-zinc-500"
                            strokeWidth={3}
                          />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="p-2 rounded-md hover:bg-zinc-100"
                        >
                          <Italic
                            className="w-4 h-4 text-zinc-500"
                            strokeWidth={3}
                          />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="p-2 rounded-md hover:bg-zinc-100"
                        >
                          <Link
                            className="w-4 h-4 text-zinc-500"
                            strokeWidth={3}
                          />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="p-2 rounded-md hover:bg-zinc-100"
                        >
                          <List
                            className="w-4 h-4 text-zinc-500"
                            strokeWidth={3}
                          />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="p-2 rounded-md hover:bg-zinc-100"
                        >
                          <ListOrdered
                            className="w-4 h-4 text-zinc-500"
                            strokeWidth={3}
                          />
                        </Button>
                      </div>
                    </div>
                    <textarea
                      id="bio"
                      className="min-h-[120px] focus:border-violet-300  focus:ring-4 focus:ring-violet-100 outline-none resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:text-zinc-100 dark:placeholder:zinc-400"
                      defaultValue="I'm a web developer based in São Paulo, Brazil. I specialize in UI design integration with data, creating seamless and dynamic user experiences. My tech stack revolves around React and Node.js, allowing me to build full-stack applications that are both efficient and visually compelling."
                    />
                  </div>
                </div>
                <Line />
                <FileInput.Root className="w-full flex flex-col gap-10 lg:flex-row lg:gap-5 items-startf">
                  <FileInput.Description
                    title="Projects"
                    subT="Upload your projects here"
                  />
                  <FileInput.Main className="flex-1 justify-center items-center">
                    <FileInput.Trigger />
                    <FileInput.FileList />
                    <FileInput.Control multiple />
                  </FileInput.Main>
                </FileInput.Root>
                <div className="flex gap-2 items-center pt-5 justify-end">
                  <Button
                    variant="outline"
                    type="button"
                    className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" form="settings">
                    Save
                  </Button>
                </div>
              </form>
            </section>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div className="mt-6 flex flex-col">
              <div className="flex flex-col lg:flex-row gap-4 lg:justify-between border-b border-zinc-200 dark:border-zinc-700 pb-5">
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <ProfileImg />
                  <section className="flex flex-col">
                    <strong className="text-zinc-700 dark:text-zinc-100">
                      Matheus Godinho
                    </strong>
                    <span className=" text-zinc-500 dark:text-zinc-400">
                      matheusgblasel@hotmail.com
                    </span>
                  </section>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Profile Information
                  </span>
                </div>
              </div>
              <section className="mt-6 grid lg:grid-cols-2 gap-4 lg:grid-rows-2 grid-rows-6 grid-cols-1">
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Full Name
                  </h1>
                  <TextInput
                    disabled
                    placeholder="Matheus Godinho Blaselbauer"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    First Name
                  </h1>
                  <TextInput disabled placeholder="Matheus" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Gender
                  </h1>
                  <Dropdown.Container disabled placeholder="Male" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Country
                  </h1>
                  <Dropdown.Container disabled placeholder="Brazil" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Github
                  </h1>
                  <Dropdown.Container disabled placeholder="Mathbkj" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Time Zone
                  </h1>
                  <Dropdown.Container
                    disabled
                    placeholder="America São Paulo(UTC-03:00)"
                  />
                </div>
                <div className="flex flex-col mt-5 lg:items-start items-center  space-y-4">
                  <strong className="text-md text-zinc-800 dark:text-zinc-100">
                    My email address
                  </strong>
                  <div className="flex gap-3 items-center">
                    <Button disabled variant="filled">
                      <Mail />
                    </Button>
                    <section className="flex flex-col">
                      <strong className="text-zinc-700 text-sm dark:text-zinc-100">
                        matheusgblasel@hotmail.com
                      </strong>
                      <span className=" text-zinc-500 text-sm dark:text-zinc-400">
                        {passedTime()}
                      </span>
                    </section>
                  </div>
                  <Button variant="ghost" className="lg:self-start">
                    + Add New Email
                  </Button>
                </div>
              </section>
            </div>
          </Tabs.Content>

          <PassContextProvider>
            <Tabs.Content value="tab3">
              <section className="mt-6 flex flex-col">
                <div className="flex flex-col lg:flex-row gap-4 lg:justify-between border-b border-zinc-200 dark:border-zinc-700 pb-5">
                  <span className="text-lg flex gap-4 font-medium text-zinc-900 dark:text-zinc-100">
                    Password
                    <span>
                      <LockKeyhole />
                    </span>
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Chage Current Your Password Here
                  </span>
                </div>
                <section className="mt-6 flex flex-col gap-3">
                  <div className="flex flex-col my-2 mx-2 gap-2">
                    <h1 className="text-nowrap text-zinc-900 dark:text-zinc-200">
                      Current Password
                    </h1>
                    <TextInput disabled placeholder="Naruto1014" />
                  </div>
                  <div className="flex flex-col my-2 mx-2 gap-2">
                    <h1 className="text-nowrap text-zinc-900 dark:text-zinc-200">
                      New Password
                    </h1>
                    <TextInput type="password" placeholder="New Password" />
                  </div>
                </section>
                <div className="flex gap-2 items-center pt-5 justify-center">
                  <Button type="submit" form="settings">
                    <span className="flex gap-2 items-center">
                      Save Changes
                      <span>
                        <SaveIcon size={16} />
                      </span>
                    </span>
                  </Button>
                </div>
              </section>
            </Tabs.Content>
          </PassContextProvider>

          <Tabs.Content value="tab4">
            <section className="mt-6 flex flex-col">
              <div className="space-y-3 flex flex-col items-center">
                <div className="gap-1 flex flex-col items-center justify-center">
                  <span className="text-center font-semibold text-zinc-900 dark:text-zinc-200 text-md">
                    Our Team
                  </span>
                  <span className="text-center font-semibold text-zinc-900 dark:text-zinc-200 text-2xl">
                    Meet Untitled UI Team
                  </span>
                </div>
                <span className="text-center max-w-[70%] break-words text-zinc-600 dark:text-zinc-400">There are many variations of dashboards and team management tools in the internet, but the majority have suffered in some way by innacurate analysis</span>
              </div>

              <div className="grid my-3 px-4 pt-5 mt-8 mb-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <ProfileCard name="Jacob Cooper" func="Software Engineer" src={personaimporter().jacob} className=""/>
                <ProfileCard name="Andressa Amerando" func="UI/UX Designer" src={personaimporter().andressa} className=""/>
                <ProfileCard name="Kate Kent" func="Department Header" src={personaimporter().kate} className=""/>
                <ProfileCard name="Muria Kennedy" func="3D Modeler" src={personaimporter().muria} className=""/>
                <ProfileCard name="Rafaela Alejandro" func="Software Engineer" src={personaimporter().rafaela} className=""/>
                <ProfileCard name="Sarah White" func="UI/UX Designer" src={personaimporter().sarah} className=""/>
              </div>
            </section>
          </Tabs.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
};
