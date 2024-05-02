// STYLES
import { SiOpenaigym } from "react-icons/si";

// COMPONENTS
import { ThemeToggle } from "./index";

export default function SidebarHeader() {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto">MyGPT</h2>
      <ThemeToggle />
    </div>
  );
}
