import { StatsCard } from "@/components/dashboard/stats-card";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { OrderVolumeChart } from "@/components/dashboard/order-volume-chart";
import { ProductPerformanceChart } from "@/components/dashboard/product-performance-chart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Sales" value="$15,231" trend="+12.5%" />
        <StatsCard title="Total Orders" value="356" trend="+5.2%" />
        <StatsCard title="Total Customers" value="1,245" trend="+3.1%" />
        <StatsCard title="Total Products" value="64" trend="-2.5%" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SalesChart />
        <OrderVolumeChart />
      </div>

      <ProductPerformanceChart />
    </div>
  );
}
