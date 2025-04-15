"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, type FC } from "react";
import { TabItem } from "./TabItem";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  Mail,
  SaveIcon,
  Check,
  Gift,
  SmartphoneNfc,
  SignalHigh,
  Tv,
  ChartNoAxesCombined,
  Database,
  Landmark,
  KeyRound,
  Save,
  WalletCards,
  Download,
  UserCog,
  Users,
  Spline,
  Plus,
  Search,
} from "lucide-react";

import * as FileInput from "@/components/Uploader/Uploader";
import { TextInput } from "@/components/Inputs/Text";
import * as Select from "@/components/Inputs/Select/Select";
import { Button } from "@/components/Buttons/Button";
import { ProfileImg } from "../ProfileImg";
import { passedTime } from "@/utils/passedTime";
import PassContextProvider from "@/contexts/PassContext";
import BioContextProvider from "@/contexts/BioContext";
import { ProfileCard } from "@/components/Cards/ProfileCard";
import personaimporter from "@/utils/svgs/personaimporter";
import { Logo } from "../Sidebar/Logo";
import { PlanUnity } from "../PlanUnity";
import { EditorButton } from "../Buttons/EditorButton";
import { TextArea } from "../Inputs/TextArea/TextArea";
import { BillingCard } from "../Cards/BillingCard";
import { BillingTable } from "../Tables/BillingTable";
import { TabHeader } from "./TabHeader";
import { IntegrationTable } from "../Tables/IntegrationTable";

export const SettingsTabs: FC = () => {
  const [currentTab, setCurrentTab] = useState("tab1");
  const [subTab, setSubTab] = useState("tab1");
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root type="scroll">
        <ScrollArea.Viewport className="">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="My details"
              layoutId="activeTab"
              isSelected={currentTab === "tab1"}
            />
            <TabItem
              value="tab2"
              title="Profile"
              layoutId="activeTab"
              isSelected={currentTab === "tab2"}
            />
            <TabItem
              value="tab3"
              title="Password"
              layoutId="activeTab"
              isSelected={currentTab === "tab3"}
            />
            <TabItem
              value="tab4"
              title="Team"
              layoutId="activeTab"
              isSelected={currentTab === "tab4"}
            />
            <TabItem
              value="tab5"
              title="Plan"
              layoutId="activeTab"
              isSelected={currentTab === "tab5"}
            />
            <TabItem
              value="tab6"
              title="Billing"
              layoutId="activeTab"
              isSelected={currentTab === "tab6"}
            />

            <TabItem
              value="tab7"
              title="Integrations"
              layoutId="activeTab"
              isSelected={currentTab === "tab7"}
            />
            <TabItem
              value="tab8"
              title="API"
              layoutId="activeTab"
              isSelected={currentTab === "tab8"}
            />
          </Tabs.List>

          <BioContextProvider>
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

                  <div className="flex flex-col lg:flex-row gap-10 lg:items-center pt-1/2">
                    <label
                      htmlFor="role"
                      className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Role
                    </label>
                    <TextInput
                      id="role"
                      defaultValue="CTO"
                      className="flex-1"
                    />
                  </div>

                  <div className="flex flex-col gap-10 lg:flex-row lg:gap-4 lg:items-center pt-1/2">
                    <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Country
                    </h1>
                    <Select.Container
                      placeholder="Select a country..."
                      className="flex-1"
                    >
                      <Select.Item value="br" text="Brazil" />
                      <Select.Item value="us" text="United States" />
                    </Select.Container>
                  </div>

                  <div className="flex flex-col gap-10 lg:gap-2 lg:flex-row lg:items-center">
                    <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Timezone
                    </h1>
                    <Select.Container placeholder="Select a timezone...">
                      <Select.Item
                        value="utc8"
                        text="Pacific Standard Time(UTC-08:00)"
                      />
                      <Select.Item
                        value="utc3"
                        text="America São Paulo(UTC-03:00)"
                      />
                    </Select.Container>
                  </div>

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
                        <Select.Container placeholder="" defaultValue="normal">
                          <Select.Item value="normal" text="Normal Text" />
                          <Select.Item value="md" text="Markdown" />
                        </Select.Container>
                        <div className="flex items-center gap-1">
                          <EditorButton title="bold" />
                          <EditorButton title="italic" />
                          <EditorButton title="unordered" />
                          <EditorButton title="ordered" />
                        </div>
                      </div>
                      <TextArea />
                    </div>
                  </div>

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
          </BioContextProvider>

          <Tabs.Content value="tab2">
            <section className="mt-6 flex flex-col">
              <ProfileImg />
              <TabHeader
                title="Matheus Godinho"
                subtitle="Founder"
                icon={UserCog}
                hasButton
                btnText={
                  <span className="flex items-center flex-nowrap gap-2">
                    Download <Download size={17} />
                  </span>
                }
              />
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
                  <Select.Container disabled placeholder="Male" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Country
                  </h1>
                  <Select.Container disabled placeholder="Brazil" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Github
                  </h1>
                  <Select.Container disabled placeholder="Mathbkj" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Time Zone
                  </h1>
                  <Select.Container
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
            </section>
          </Tabs.Content>

          <PassContextProvider>
            <Tabs.Content value="tab3">
              <section className="mt-6 flex flex-col">
                <TabHeader
                  title="Password"
                  subtitle="Change your current password"
                  icon={KeyRound}
                  hasButton
                  btnText={
                    <span className="flex items-center flex-nowrap gap-2">
                      Save Changes <Save size={16} />
                    </span>
                  }
                />
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
              <TabHeader
                title="Team"
                subtitle="Get to know our team members"
                icon={Users}
              />
              <div className="flex gap-2 mt-10 flex-col items-center">
                <div className="gap-1 flex flex-col items-center justify-center">
                  <span className="text-center font-semibold text-zinc-900 dark:text-zinc-200 text-md">
                    Our Team
                  </span>
                  <span className="text-center font-semibold text-zinc-900 dark:text-zinc-200 text-2xl">
                    Meet Untitled UI Team
                  </span>
                </div>
                <span className="text-center max-w-[70%] break-words text-zinc-600 dark:text-zinc-400">
                  There are many variations of dashboards and team management
                  tools in the internet, but the majority have suffered in some
                  way by innacurate analysis
                </span>
              </div>

              <div className="grid my-3 px-4 pt-5 mt-8 mb-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <ProfileCard
                  name="Jacob Cooper"
                  func="Software Engineer"
                  src={personaimporter().jacob}
                  className=""
                />
                <ProfileCard
                  name="Andressa Amerando"
                  func="UI/UX Designer"
                  src={personaimporter().andressa}
                  className=""
                />
                <ProfileCard
                  name="Kate Kent"
                  func="Department Header"
                  src={personaimporter().kate}
                  className=""
                />
                <ProfileCard
                  name="Muria Kennedy"
                  func="3D Modeler"
                  src={personaimporter().muria}
                  className=""
                />
                <ProfileCard
                  name="Rafaela Alejandro"
                  func="Software Engineer"
                  src={personaimporter().rafaela}
                  className=""
                />
                <ProfileCard
                  name="Sarah White"
                  func="UI/UX Designer"
                  src={personaimporter().sarah}
                  className=""
                />
              </div>
            </section>
          </Tabs.Content>
          <Tabs.Content value="tab5">
            <section className="mt-6 flex flex-col">
              <TabHeader
                title="Plans"
                subtitle="Get to know our plans"
                icon={ChartNoAxesCombined}
              />
              <div className="mt-6 bg-zinc-800/10 dark:bg-zinc-800/30 shadow-sm rounded-md flex flex-col gap-3">
                <section className="flex items-center lg:flex-row justify-between flex-col px-3 py-2 m-5">
                  <span className="text-lg  flex flex-col gap-2 text-zinc-950 dark:text-zinc-100">
                    Choose the plan that best fit your needs
                    <span className="text-sm flex flex-col text-zinc-600 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Check
                          size={15}
                          className="dark:text-violet-300 text-violet-700"
                        />
                        Unlimited features developed exclusively for you. Get
                        your hands on everything.
                      </span>
                      <span className="flex items-center gap-1">
                        <Check
                          size={15}
                          className="dark:text-violet-300 text-violet-700"
                        />
                        Feel free to cancel at any time.
                      </span>
                    </span>
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center gap-3 px-3 py-2"
                  >
                    <Gift />
                    <span>Start your free month</span>
                  </Button>
                </section>

                <section className="flex flex-row flex-nowrap gap-4 px-3 py-2 my-20 mx-8">
                  <div className="flex flex-col gap-10">
                    <Logo />
                    <span className="text-md w-full flex gap-2 ms-2 mt-18 text-zinc-700 dark:text-zinc-300 font-medium">
                      <SmartphoneNfc size={20} />
                      Mobile Support
                    </span>
                    <span className="text-md w-full flex gap-2 ms-2 text-zinc-700 dark:text-zinc-300 font-medium">
                      <SignalHigh size={20} />
                      Available 100% of the time
                    </span>
                    <span className="text-md w-full flex gap-2 ms-2 text-zinc-700 dark:text-zinc-300 font-medium">
                      <Tv size={20} />
                      Use it on your desktop and TV
                    </span>
                    <span className="text-md w-full flex gap-2 ms-2 text-zinc-700 dark:text-zinc-300 font-medium">
                      <ChartNoAxesCombined size={20} />
                      Take the best decisions
                    </span>
                    <span className="text-md w-full flex gap-2 ms-2 text-zinc-700 dark:text-zinc-300 font-medium">
                      <Database size={20} />
                      Times you can retrieve data per day
                    </span>
                  </div>
                  <PlanUnity title="Basic" cost="7.99" />
                  <PlanUnity title="Standard" cost="10.99" />
                  <PlanUnity title="Premium" cost="17.99" />
                </section>
              </div>
            </section>
          </Tabs.Content>
          <Tabs.Content value="tab6">
            <section className="mt-6 flex flex-col">
              <TabHeader
                title="Billing"
                subtitle="Effortlessly manage your plans and payment type"
                icon={WalletCards}
              />
              <div className="mt-6 flex flex-col gap-4 px-3 py-2">
                <section className="flex flex-col lg:flex-row gap-3">
                  <BillingCard title="Plan Summary" />
                  <BillingCard title="Payment Method" />
                </section>
                <section className="flex flex-col mt-10 py-2 mb-2 w-full">
                  <TabHeader
                    title="Invoice"
                    subtitle="Effortlessly manage your plans and payment type"
                    icon={Landmark}
                    hasButton
                    btnText={
                      <span className="flex items-center flex-nowrap gap-2">
                        Download <Download size={17} />
                      </span>
                    }
                  />

                  <BillingTable />
                </section>
              </div>
            </section>
          </Tabs.Content>
          <Tabs.Content value="tab7">
            <section className="mt-6 flex flex-col">
              <TabHeader
                title="Integrations"
                subtitle="Connect Untitled UI with the tools you already use"
                icon={Spline}
                hasButton
                hasSubTab
                btnText={
                  <span className="flex items-center gap-2">
                    <Plus size={17} />
                    <span>Add Integration</span>
                  </span>
                }
              />
              <Tabs.Root value={subTab} onValueChange={setSubTab}>
                <Tabs.List className="mt-6 flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
                  <TabItem
                    layoutId="activeSubTab"
                    value="tab1"
                    title="Current Integrations"
                    isSelected={subTab === "tab1"}
                  />
                  <TabItem
                    layoutId="activeSubTab"
                    value="tab2"
                    title="Integration Directory"
                    isSelected={subTab === "tab2"}
                  />
                </Tabs.List>
                <Tabs.Content value="tab1">
                  <div className="mt-6 flex flex-col justify-between flex-nowrap">
                    <section className="flex justify-between items-center flex-nowrap">
                      <TextInput
                        hasPrefix
                        icon={Search}
                        placeholder="Search Integrations..."
                        className="w-1/4! h-1/4! m-3"
                      />
                      <section className="flex w-1/3 m-1">
                        <Select.Container
                          placeholder="All"
                          variant="withLabelRow"
                          label="Category"
                        >
                          <Select.Item value="all" text="All" />
                          <Select.Item value="favorites" text="Favorites  " />
                        </Select.Container>
                        <Select.Container
                          placeholder="All"
                          variant="withLabelRow"
                          label="Status"
                        >
                          <Select.Item value="allTwo" text="All" />
                          <Select.Item value="favorites" text="Favorites" />
                        </Select.Container>
                      </section>
                    </section>
                    <IntegrationTable/>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
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
