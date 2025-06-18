import { Suspense } from "react";
import ResourceDetails from "./ResourceDetails";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading resource...</div>}>
      <ResourceDetails />
    </Suspense>
  );
}
