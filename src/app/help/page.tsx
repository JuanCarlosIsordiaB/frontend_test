import GoBackButton from "@/components/GoBackButton";

export default function HelpPage() {
  return (
    <div className="relative h-screen">
      <GoBackButton />
      <div className="flex flex-col justify-center items-center h-full">
        <h1>Need Help?</h1>
        <p>Please contact us. <span className="">email@email.com</span>
        </p>
      </div>
    </div>
  );
}