import { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";

export default function DashboardPage() {
  return (
    <div className="w-full">
      Dashboard
      <div className="gap-4 grid grid-cols-4 mt-6">
        <Card title="Collected" value="4000" type="invoices" />
        <Card title="Pending" value="4000" type="invoices" />
        <Card title="Total Invoices" value="4000" type="invoices" />
        <Card title="Total Customer" value="4000" type="invoices" />
      </div>
      <div className="gap-4 grid grid-cols-2 mt-6">
        <div>
          <RevenueChart />
        </div>
        <div>
          <LatestInvoices />
        </div>
      </div>
    </div>
  );
}
