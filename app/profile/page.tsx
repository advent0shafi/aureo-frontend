import LayoutPage from "./LayoutPage";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Account | حسابي",
  description: "Manage your account and view order history. | إدارة حسابك وعرض سجل الطلبات",
  robots: {
    index: false,
    follow: false,
  },
}


export default function Profile() {
  return (
    <div>
      <main>
        <LayoutPage/>
      </main>
    </div>
  );
}