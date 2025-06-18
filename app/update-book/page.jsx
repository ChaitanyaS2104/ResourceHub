import { Suspense } from "react";
import UpdateBook from "./UpdateBook"
export default function Page() {
  return (
    <Suspense fallback={<div>Loading resource...</div>}>
      <UpdateBook />
    </Suspense>
  );
}
