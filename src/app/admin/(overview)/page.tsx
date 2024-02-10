import AdminGrid from "@/components/admin/admin-grid";
import AdminHeader from "@/components/admin/admin-header";
import { Suspense } from "react";
import Loading from "./loading";
export default function Page() {
	return (
		<>
			<AdminHeader/>
			<Suspense fallback={<Loading/>}>
				<AdminGrid/>
			</Suspense>

		</>
	);
}