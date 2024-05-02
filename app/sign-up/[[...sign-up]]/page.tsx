// LIBRARIES
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUp />;
    </div>
  );
}
