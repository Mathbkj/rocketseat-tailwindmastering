import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import { Mail } from "lucide-react";
import { Line } from "@/components/Line";
import * as FileInput from "@/components/Uploader/Uploader";
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
              <Input.Root>
                <Input.Control
                  placeholder="Name"
                  id="fName"
                  defaultValue="Matheus"
                />
              </Input.Root>
              <Input.Root>
                <Input.Control
                  placeholder="Last Name"
                  id="lName"
                  defaultValue="Godinho"
                />
              </Input.Root>
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
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  placeholder="Email"
                  id="email"
                  type="email"
                  defaultValue="matheusgblasel@hotmail.com"
                />
              </Input.Root>
            </div>
          </div>
          <Line />
          {/**User Uploader */}
          <FileInput.Root className="flex gap-5 items-start">
            <FileInput.Description title="Your Photo" subT="Upload Your Photo Here" />
            <FileInput.UserPreview />
            <FileInput.Main className="flex-1 justify-center items-center">
              <FileInput.Trigger/>
              <FileInput.Control multiple />
            </FileInput.Main>
          </FileInput.Root>
          {/**User Uploader End */}
          <Line />
          <div className="flex gap-3 items-center">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root className="">
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>
          <Line />
          <div className="flex gap-3 items-center">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country:
            </label>
          </div>
          <Line />
          <div className="flex gap-3 items-center">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Input.Root>
              <Input.Control id="timezone" defaultValue="Timezone" />
            </Input.Root>
          </div>
          <Line />
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
          </div>
          <Line />
          <FileInput.Root className="w-full flex gap-5 items-start">
            <FileInput.Description title="Projects" subT="Upload your projects here"/>
            <FileInput.Main className="flex-1 justify-center items-center">
              <FileInput.Trigger/>
              <FileInput.FileList/>
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
