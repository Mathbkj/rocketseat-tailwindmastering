import { SettingsTabs } from "@/components/SettingsTabs";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Line } from "@/components/Line";
import * as FileInput from "@/components/Uploader/Uploader";
import { TextInput } from "@/components/Inputs/Text";
import * as Dropdown from "@/components/Inputs/Dropdown/Dropdown";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-aroun">
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      </div>

      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between border-b border-zinc-200 dark:border-zinc-700 pb-5">
          <div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal Info</h2>
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
            <Button
              type="submit"
              form="settings"
            >
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex justify-start flex-col gap-5 w-full"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <h1
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
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
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <TextInput id="role" defaultValue="CTO" className="flex-1" />
          </div>
          <Line />
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-4 lg:items-center pt-1/2">
            <h1
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
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
            <h1
              
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </h1>
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
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="p-2 rounded-md hover:bg-zinc-100"
                  >
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="p-2 rounded-md hover:bg-zinc-100"
                  >
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="p-2 rounded-md hover:bg-zinc-100"
                  >
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
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
            <Button
              type="submit"
              form="settings"
              
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
