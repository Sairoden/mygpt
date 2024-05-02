// NEXT
import Link from "next/link";

// UTILS
import { navlinks } from "@/utils/links";

export default function NavLinks() {
  return (
    <div className="menu text-base-content">
      {navlinks.map(navlink => (
        <li key={navlink.href}>
          <Link href={navlink.href} className="capitalize">
            {navlink.label}
          </Link>
        </li>
      ))}
    </div>
  );
}
