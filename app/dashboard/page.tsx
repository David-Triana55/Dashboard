import { Suspense } from "react";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../lib/data";
import CardWrapper, { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";

export default async function Page() {
  // const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <main>
      <h1 className={` ${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols02 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper /> 
        </Suspense>  
        {/* <Card title="collected" value={totalPaidInvoices} type="collected" />
        <Card title="pending" value={totalPendingInvoices} type="pending" />
        <Card title="total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="total Customers" value={numberOfCustomers} type="customers" /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}