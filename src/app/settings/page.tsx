import { SettingsTabs } from "@/components/SettingsTabs";


export default function Page() {
  return (
    <>
      <div className="flex w-full justify-aroun">
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      </div>
      <SettingsTabs />
    </>
  );
}
