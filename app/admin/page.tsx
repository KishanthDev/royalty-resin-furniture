import { StatCard } from "@/components/admin/StatCard";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Visitors" value="12,540" />
        <StatCard title="Page Views" value="32,190" />
        <StatCard title="Inquiries" value="58" />
      </div>
    </div>
  );
}