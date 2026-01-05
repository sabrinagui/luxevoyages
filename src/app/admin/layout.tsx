import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Luxe Voyages",
  description: "Manage your luxury travel platform",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Admin layout without the main site header/footer
  return <>{children}</>;
}
