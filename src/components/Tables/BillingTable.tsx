import { Fragment, type FC, type PropsWithChildren } from "react";
import { Button } from "../Buttons/Button";
import { billingTagGen } from "@/utils/tagGen";
import { Ban, FileWarning, OctagonAlert, ShieldCheck } from "lucide-react";

interface ThProps {
  name: string;
}
type TrProps = PropsWithChildren & {
  type: "head" | "data";
  status?: "paid" | "pending" | "not-paid";
  texts?: { billing: string; plan: string; amount: string };
};
interface TdProps extends ThProps {
  className?: string;
  content: "text" | "paid" | "pending" | "not-paid";
}

function DownTriangleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      className="w-3 h-3 fill-zinc-700 dark:fill-zinc-400"
    >
      <title>DrownTriangleIcon</title>
      <path
        d="M88.625 20c6.415 0 8.302 4.032 4.22 9.001L52.286 78.364c-1.813 2.207-4.715 2.18-6.49-.072L7.06 29.152C3.075 24.096 5.049 20 11.459 20h77.166z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function Th({ name }: ThProps) {
  return (
    <th>
      <span className="flex items-center gap-2 text-zinc-400 font-semibold tracking-wide dark:text-zinc-400/50">
        {name}
        <span className="relative">
          <DownTriangleIcon />
        </span>
      </span>
    </th>
  );
}
function Tr({ type, status = "paid", texts }: TrProps) {
  const base = "bg-zinc-400/10";
  return (
    <>
      <tr className={type === "head" ? "bg-transparent!" : base}>
        {type === "head" && (
          <>
            <Th name="Invoice ID" />
            <Th name="Billing Date" />
            <Th name="Plan" />
            <Th name="Amount" />
            <Th name="Status" />
          </>
        )}
        {type === "data" &&
          Array.from({ length: 5 }).map((_, key) => {
            return (
              <Fragment key={key.toString()}>
                {key === 0 && (
                  <Td
                    name={billingTagGen()}
                    content="text"
                    className="px-4 rounded-l-lg!"
                  />
                )}
                {key === 1 && (
                  <Td
                    content="text"
                    name={texts !== undefined ? texts.billing : ""}
                  />
                )}
                {key === 2 && (
                  <Td
                    content="text"
                    name={texts !== undefined ? texts.plan : ""}
                  />
                )}
                {key === 3 && (
                  <Td
                    content="text"
                    name={texts !== undefined ? `$${texts.amount}` : ""}
                  />
                )}
                {key === 4 && (
                  <Td name="" content={status} className="p-2 rounded-r-lg!" />
                )}
              </Fragment>
            );
          })}
      </tr>
    </>
  );
}
function Td({ name, content, className }: TdProps) {
  return (
    <>
      {content === "text" && (
        <td
          className={`text-zinc-800 dark:text-white font-medium ${className || ""}`}
        >
          {name}
        </td>
      )}
      {content === "paid" && (
        <td className={className}>
          <Button variant="success">
            <span className="flex items-center gap-3">
              Paid <ShieldCheck size={20} />
            </span>
          </Button>
        </td>
      )}
      {content === "pending" && (
        <td className={className}>
          <Button variant="warning" className="flex items-center gap-2">
            <span>Pending</span>
            <OctagonAlert size={20} />
          </Button>
        </td>
      )}
      {content === "not-paid" && (
        <td className={className}>
          <Button variant="error" className="flex items-center gap-2">
            <span>Overdue</span>
            <Ban size={20} />
          </Button>
        </td>
      )}
    </>
  );
}

export const BillingTable: FC = () => {
  return (
    <table className="border-separate border-spacing-y-8">
      <thead>
        <Tr type="head" />
      </thead>
      <tbody>
        <Tr
          type="data"
          status="pending"
          texts={{ billing: "12 Jan 2025", plan: "Basic Plan", amount: "1200" }}
        />
        <Tr
          type="data"
          status="not-paid"
          texts={{ billing: "12 Dec 2024", plan: "Pro Plan", amount: "2400" }}
        />
        <Tr
          type="data"
          texts={{ billing: "8 Nov 2024", plan: "Pro Plan", amount: "1200" }}
        />
        <Tr
          type="data"
          texts={{ billing: "8 Oct 2024", plan: "Standard Plan", amount: "1600" }}
        />
        <Tr
          type="data"
          texts={{ billing: "8 Aug 2024", plan: "Standard Plan", amount: "1600" }}
        />

      </tbody>
    </table>
  );
};
