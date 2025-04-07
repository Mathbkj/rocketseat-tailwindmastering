import type { FC } from "react";
import { Button } from "../Buttons/Button";
import Image from "next/image";
import cardIcon from "@/../public/mc_symbol.svg";
import { MailSearch } from "lucide-react";

interface Props {
  title: "Plan Summary" | "Payment Method";
}

function MasterCard() {
  return (
    <div className="relative">
      <Image src={cardIcon} width={70} height={70} alt="mastercard" />
    </div>
  );
}

function PlanCard() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-400/5 dark:bg-zinc-800 rounded-t-lg overflow-hidden shadow-sm">
      <section className="relative flex flex-nowrap rounded-t-lg bg-zinc-800/10 justify-between items-center p-4 w-full border-b border-b-zinc-300 dark:border-b-zinc-300/30 gap-4">
        <span className="relative dark:text-white text-xl font-medium text-nowrap">
          Current Plan Summary
        </span>
        <Button>
          <span>Upgrade</span>
        </Button>
      </section>
      <div className="bg-zinc-100 dark:bg-zinc-500/10">
        <section className="relative px-7 py-6 mt-4 flex gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 dark:text-zinc-400 font-light">
              PLAN NAME
            </span>
            <span className="text-lg font-medium dark:text-white">
              Growth Plan
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 dark:text-zinc-400 font-light">
              BILLING CYCLE
            </span>
            <span className="text-lg font-medium dark:text-white">Monthly</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 dark:text-zinc-400 font-light">
              PLAN COST
            </span>
            <span className="text-lg font-medium dark:text-white">$5698</span>
          </div>
        </section>
        <section className="relative flex flex-col items-start px-7 py-6 my-8 w-full gap-8">
          <span className="text-zinc-500 flex flex-col gap-2 dark:text-zinc-400 font-light">
            USAGE
            <span className="font-light text-black dark:text-white">
              4850 out of 5k monthly active users
            </span>
            <br/>
          </span>
          
          <div className="absolute w-[70%] mx-7 my-6 h-6 rounded-lg left-1 bottom-0 z-1 bg-violet-200 dark:bg-violet-200/30" />
          <div className="absolute w-[65%] mx-7 my-6 h-6 rounded-lg left-0 bottom-0 z-2 bg-violet-600 dark:bg-violet-800" />
        </section>
      </div>
    </div>
  );
}
function PaymentMethod() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-400/5 dark:bg-zinc-800 rounded-t-lg overflow-hidden shadow-sm">
      <section className="relative flex flex-nowrap rounded-t-lg bg-zinc-800/10 justify-between items-center p-5 w-full border-b border-b-zinc-300 dark:border-b-zinc-300/30 gap-4">
        <span className="relative dark:text-white text-xl font-medium text-nowrap">
          Payment Method
        </span>
      </section>
      <section className="relative flex flex-col justify-center bg-zinc-100 size-full dark:bg-zinc-500/10">
        <div className="relative bg-zinc-100 dark:bg-zinc-500/10 flex items-start mx-5 mb-4 p-4 border rounded-lg border-zinc-300 dark:border-zinc-500 shadow-sm">
          <MasterCard />
          <span className="flex items-baseline flex-col gap-2 mx-3 my-2 text-zinc-900 dark:text-white font-medium">
            <span className="font-semibold">Master Card</span>
            <span>**** **** **** 4002</span>
            <span className="text-zinc-500 dark:text-zinc-400">Expiry on 20/2024</span>
            <span className="flex gap-2 text-zinc-500 dark:text-zinc-400"><MailSearch/>billing@acme.corp</span>
          </span>
          <Button variant="outline" className="absolute right-5 top-4">Change</Button>
        </div>
      </section>
    </div>
  );
}

export const BillingCard: FC<Props> = ({ title }) => {
  return (
    <>
      {title === "Plan Summary" && <PlanCard />}
      {title === "Payment Method" && <PaymentMethod />}
    </>
  );
};
