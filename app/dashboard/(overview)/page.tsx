import { Suspense } from "react";
import CardWrapper from "../../ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from "../../ui/skeletons";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function DashboardPage() {
  return (
    <main className="w-full">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
