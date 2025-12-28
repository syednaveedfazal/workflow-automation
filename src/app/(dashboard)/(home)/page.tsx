import React from "react";
import PeriodSelector from "./_components/PeriodSelector";
import StatsCards from "./_components/StatsCards";
import ExecutionStatusChart from "./_components/ExecutionStatusChart";
import CreditUsageChart from "./_components/CreditUsageChart";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 h-full container ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Home</h1>
        <PeriodSelector />
      </div>
      <div className="h-full py-6 flex flex-col gap-4">
        <StatsCards />
        <ExecutionStatusChart />
        <CreditUsageChart />
      </div>
    </div>
  );
}
