import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import GoBackButton from "@/components/GoBackButton";


export default function ForgotPasswordPage() {
  return (
    <div className="relative h-screen">
      <GoBackButton />
      <ForgotPasswordForm />
    </div>
  );
}
