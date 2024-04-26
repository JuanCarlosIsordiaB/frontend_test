import Form from "@/components/Form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative h-screen">
      <Link
        href={"/help"}
        className="absolute top-0 right-0 mt-4 mr-4 hover:underline transition-all"
      >
        Need help?
      </Link>
      <div className="flex justify-center items-center h-full">
        <Form />
      </div>
    </div>
  );
}
