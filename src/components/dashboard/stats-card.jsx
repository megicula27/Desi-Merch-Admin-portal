import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

export function StatsCard({ title, value, trend }) {
  const trendValue = parseFloat(trend);
  const isPositive = trendValue >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <ArrowUpIcon className="inline h-4 w-4" />
          ) : (
            <ArrowDownIcon className="inline h-4 w-4" />
          )}
          {trend}
        </p>
      </CardContent>
    </Card>
  );
}
