import { Suspense } from "react";
import CardWrapper from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import {
  CardSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from "../ui/skeletons";

export default async function DashboardPage() {
  return (
    <div className="w-full">
      Dashboard
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </div>
  );
}
