import type {
  FC,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react";
import { Button } from "../Buttons/Button";
import {
  Ban,
  Check,
  ClockFading,
  OctagonAlert,
  Pause,
  ShieldCheck,
  X,
  type LucideProps,
} from "lucide-react";
import Image from "next/image";
import logoimporter from "@/utils/svgs/logoimporter";

interface ThProps {
  name?: string;
}
type TrProps = PropsWithChildren &
  Pick<TdProps, "monitorText"> & {
    type: "head" | "data" | "connection";
    status?: "connected" | "need-setup" | "failed";
    texts?: {
      integration: { name: string; subName: string };
      assets: { num: number };
    };
    src: string | null;
  };
interface TdProps extends ThProps {
  subName?: string;
  className?: string;
  content: "text" | "connected" | "need-setup" | "failed" | "monitor";
  monitorText?: { check: number; x: number; pause: number; timed: number };
  internalKey: string;
  src?: string;
}
interface IconProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  className: string;
}
interface MonitorItemProps extends IconProps {
  value?: number;
}

function Th({ name }: ThProps) {
  return (
    <th className="ps-5 pe-3 py-2">
      <span className="flex items-center gap-2 text-zinc-400 font-normal tracking-wide dark:text-zinc-400/50 uppercase">
        {name}
      </span>
    </th>
  );
}

function Tr({ type, status = "connected", texts, src, monitorText }: TrProps) {
  const base = "bg-zinc-400/10";
  const length = 4;
  return (
    <>
      <tr className={type === "head" ? "bg-transparent!" : base}>
        {type === "head" && (
          <>
            <Th name="Integration" />
            <Th name="Status" />
            <Th name="Assets" />
            <Th name="Monitor Status" />
          </>
        )}
        {type === "connection" && (
          <td
            colSpan={4}
            className="bg-zinc-200/50 dark:bg-zinc-950/20 border-y border-y-zinc-300 dark:border-y-zinc-700 px-3 py-1"
          >
            <div className="flex flex-nowrap text-zinc-700 items-center gap-4">
              <Button
                variant={
                  status === "failed"
                    ? "error"
                    : status === "need-setup"
                      ? "warning"
                      : "success"
                }
                className="flex py-0.5 gap-2"
              >
                <span>
                  {status === "failed"
                    ? "Connection Failed"
                    : status === "need-setup"
                      ? "Needs Setup"
                      : "Connected"}
                </span>
              </Button>
              <span>{length - 1}</span>
            </div>
          </td>
        )}
        {type === "data" &&
          Array.from({ length }).map((_, key) => {
            return (
              <Td
                name={
                  key === 0
                    ? texts?.integration.name
                    : texts?.assets.num.toString()
                }
                subName={key === 0 ? texts?.integration.subName : ""}
                src={key === 0 ? (src as string) : undefined}
                key={key.toString()}
                internalKey={key.toString()}
                content={
                  key === 0
                    ? "text"
                    : key === 1
                      ? status
                      : key === length - 2
                        ? "text"
                        : "monitor"
                }
                monitorText={monitorText}
              />
            );
          })}
      </tr>
    </>
  );
}
function Td({
  name,
  subName,
  content,
  className,
  internalKey,
  src,
  monitorText,
}: TdProps) {
  const check = monitorText?.check;
  const pause = monitorText?.pause;
  const timed = monitorText?.timed;
  const x = monitorText?.x;
  const MonitorItem = ({
    icon: Icon,
    value,
    className: iconClassName,
  }: MonitorItemProps) => {
    const isZero = value === 0;

    return (
      <span
        className={`inline-flex text-sm items-center ${isZero ? "text-zinc-500 dark:text-zinc-400/50" : "text-zinc-800 dark:text-zinc-100"}`}
      >
        <Icon
          size={20}
          className={
            isZero ? "text-zinc-500/50 dark:text-zinc-500" : iconClassName
          }
        />
        <span>{value ?? 24}</span>
      </span>
    );
  };
  const getEmptyMonitors = () => {
    let bool = false;
    if (monitorText !== undefined) {
      const filter = Object.entries(monitorText).every((pred) => pred[1] === 0);
      if (filter) bool = true;
    }
    return bool;
  };
  const isMonitorAllZeros = getEmptyMonitors();
  return (
    <>
      {content === "text" && (
        <td
          key={internalKey}
          className={`text-zinc-800 relative dark:text-white font-medium ${className ?? ""}`}
        >
          <section className="flex items-center gap-4 mx-3 px-3 my-2 py-4">
            {internalKey === "0" && (
              <div className="relative rounded-lg">
                <Image
                  width={26}
                  height={26}
                  src={src as string}
                  className="object-cover rounded-lg"
                  alt=""
                />
              </div>
            )}
            <span className="flex gap-2 flex-col font-medium">
              <span
                className={
                  internalKey === "0"
                    ? "font-black"
                    : isMonitorAllZeros
                      ? "opacity-50"
                      : ""
                }
              >
                {name}
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {subName}
              </span>
            </span>
          </section>
        </td>
      )}
      {content === "monitor" && (
        <td>
          <div className="relative bg-white flex justify-around items-center dark:bg-white/20 rounded-full px-3 py-1 me-5">
            <MonitorItem
              value={check}
              icon={Check}
              className="text-emerald-500! dark:text-emerald-300!"
            />
            
            <MonitorItem
              value={x}
              icon={X}
              className="text-red-500! dark:text-red-300!"
            />
            <div className="absolute left-20 h-full w-px bg-zinc-400 dark:bg-zinc-200/40" />
            <MonitorItem
              value={pause}
              icon={Pause}
              className="text-zinc-700! dark:text-zinc-400!"
            />
            <div className="absolute h-full left-55 w-px bg-zinc-400 dark:bg-zinc-200/40" />
            <MonitorItem
              value={timed}
              icon={ClockFading}
              className="text-zinc-700! dark:text-zinc-400!"
            />
            <div className="absolute h-full w-px bg-zinc-400 dark:bg-zinc-200/40" />
          </div>
        </td>
      )}
      {content === "connected" && (
        <td className="relative">
          <Button variant="success" className="flex py-0.5 items-center gap-2">
            <span className="flex items-center gap-3">
              Connected <ShieldCheck size={20} />
            </span>
          </Button>
        </td>
      )}
      {content === "need-setup" && (
        <td className="relative">
          <Button variant="warning" className="flex py-0.5 items-center gap-2">
            <span>Need Setup</span>
            <OctagonAlert size={20} />
          </Button>
        </td>
      )}
      {content === "failed" && (
        <td className="relative">
          <Button variant="error" className="flex py-0.5 items-center gap-2">
            <span>Connection Failed</span>
            <Ban size={20} />
          </Button>
        </td>
      )}
    </>
  );
}

export const IntegrationTable: FC = () => {
  return (
    <table className="mt-6">
      <thead>
        <Tr src="" type="head" />
        <Tr src="" type="connection" status="failed" />
      </thead>
      <tbody className="divide-y-2 divide-zinc-300 dark:divide-zinc-700">
        <Tr
          src={logoimporter().drizzle}
          type="data"
          status="failed"
          texts={{
            integration: { name: "Drizzle", subName: "ORM Managament" },
            assets: { num: 12 },
          }}
        />
        <Tr
          src={logoimporter().render}
          type="data"
          status="failed"
          texts={{
            integration: { name: "Render", subName: "Cloud Provider" },
            assets: { num: 12 },
          }}
        />
        <Tr
          src={logoimporter().github}
          type="data"
          status="failed"
          texts={{
            integration: { name: "Github", subName: "Version Control" },
            assets: { num: 12 },
          }}
        />
        <Tr src="" type="connection" status="need-setup" />
        <Tr
          src={logoimporter().firebase}
          type="data"
          status="need-setup"
          texts={{
            integration: { name: "Firebase", subName: "Cloud DB Service" },
            assets: { num: 0 },
          }}
          monitorText={{ check: 0, x: 0, pause: 0, timed: 0 }}
        />
        <Tr
          src={logoimporter().bun}
          type="data"
          status="need-setup"
          texts={{
            integration: { name: "Bun", subName: "Package Manager" },
            assets: { num: 0 },
          }}
          monitorText={{ check: 0, x: 0, pause: 0, timed: 0 }}
        />
        <Tr
          src={logoimporter().jumpcloud}
          type="data"
          status="need-setup"
          texts={{
            integration: { name: "Jumpcloud", subName: "Device Management" },
            assets: { num: 0 },
          }}
          monitorText={{ check: 0, x: 0, pause: 0, timed: 0 }}
        />
        <Tr src="" type="connection" status="connected" />
        <Tr
          src={logoimporter().azure}
          type="data"
          status="connected"
          texts={{
            integration: { name: "Azure", subName: "Cloud Service Provider" },
            assets: { num: 6 },
          }}
          monitorText={{ check: 5, x: 0, pause: 0, timed: 0 }}
        />
        <Tr
          src={logoimporter().vercel}
          type="data"
          status="connected"
          texts={{
            integration: { name: "Vercel", subName: "Cloud Provider" },
            assets: { num: 24 },
          }}
          monitorText={{ check:11, x: 0, pause: 3, timed: 0 }}
        />
        <Tr
          src={logoimporter().postman}
          type="data"
          status="connected"
          texts={{
            integration: { name: "Postman", subName: "API Request" },
            assets: { num: 24 },
          }}
          monitorText={{ check:11, x:0, pause: 4, timed: 0 }}
        />
      </tbody>
    </table>
  );
};
