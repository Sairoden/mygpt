// LIBRARIES
import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
