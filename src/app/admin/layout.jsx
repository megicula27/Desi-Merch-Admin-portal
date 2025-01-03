import { Sidebar } from "@/components/ui/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
