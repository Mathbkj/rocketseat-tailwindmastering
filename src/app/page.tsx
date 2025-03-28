import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Inputs/Text/TextItem";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Line } from "@/components/Line";
import * as FileInput from "@/components/Uploader/Uploader";
import { TextInput } from "@/components/Inputs/Text";
import * as Dropdown from "@/components/Inputs/Dropdown/Dropdown";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-row justify-between items-center border-b border-zinc-200 pb-5">
          <div>
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border bg-violet-600 border-zinc-300 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex justify-center flex-col gap-5 w-full"
        >
          <div className="flex gap-50 items-center justify-start">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex gap-4">
              <TextInput placeholder="Name" id="fName" defaultValue="Matheus" />
              <TextInput
                placeholder="Last Name"
                id="lName"
                defaultValue="Godinho"
              />
            </div>
          </div>
          <Line />
          <div className="flex gap-50 items-center pt-1/2 justify-start">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>
            <div className="w-1/3">
              <TextInput
                hasPrefix
                icon={Mail}
                placeholder="Email"
                id="email"
                type="email"
                defaultValue="matheusgblasel@hotmail.com"
              />
            </div>
          </div>
          <Line />
          {/**User Uploader */}
          <FileInput.Root className="flex gap-5 items-start">
            <FileInput.Description
              title="Your Photo"
              subT="Upload Your Photo Here"
            />
            <FileInput.UserPreview />
            <FileInput.Main className="flex-1 justify-center items-center">
              <FileInput.Trigger />
              <FileInput.Control multiple={false} />
            </FileInput.Main>
          </FileInput.Root>
          {/**User Uploader End */}
          <Line />
          <div className="flex gap-3 items-center">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <TextInput id="role" defaultValue="CTO" />
          </div>
          <Line />
          <div className="flex gap-3 items-center">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country:
            </label>
            <Dropdown.Container placeholder="Select a country...">
              <Dropdown.Item value="br" text="Brazil" />
              <Dropdown.Item value="us" text="United States" />
            </Dropdown.Container>
          </div>
          <Line />
          <div className="flex gap-3 items-center">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Dropdown.Container placeholder="Select a timezone...">
              <Dropdown.Item
                value="utc8"
                text="Pacific Standard Time(UTC-08:00)"
              />
              <Dropdown.Item value="utc3" text="America São Paulo(UTC-03:00)" />
            </Dropdown.Container>
          </div>
          <Line />
          <div className="flex flex-col gap-3">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Dropdown.Container placeholder="" value="normal">
                  <Dropdown.Item
                    value="normal"
                    defaultValue="normal"
                    text="Normal Text"
                  />
                  <Dropdown.Item
                    value="md"
                    text="Markdown"
                  />
                </Dropdown.Container>
                <div className="flex items-center gap-1">
                <button type="button" className="p-2 rounded-md hover:bg-zinc-100">
                  <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                </button>
                <button type="button" className="p-2 rounded-md hover:bg-zinc-100">
                  <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                </button>
                <button type="button" className="p-2 rounded-md hover:bg-zinc-100">
                  <Link className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                </button>
                <button type="button" className="p-2 rounded-md hover:bg-zinc-100">
                  <List className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                </button>
                <button type="button" className="p-2 rounded-md hover:bg-zinc-100">
                  <ListOrdered className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                </button>
                </div>
              </div>
              <textarea id="bio" className="min-h-[120px] outline-none resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm " defaultValue="I'm a web developer based in São Paulo, Brazil. I specialize in UI design integration with data, creating seamless and dynamic user experiences. My tech stack revolves around React and Node.js, allowing me to build full-stack applications that are both efficient and visually compelling."/>
            </div>
          </div>
          <Line />
          <FileInput.Root className="w-full flex gap-5 items-start">
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
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border bg-violet-600 border-zinc-300 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
