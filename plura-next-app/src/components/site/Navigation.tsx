import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/common/ThemeToggle";
import { UserProps } from "@/types/navigation";

const Navigation = ({ user }: UserProps) => {
  console.log(user);
  return (
    <div className="fixed top-0 right-0 left-0 py-2 px-4 flex items-center justify-between z-10 bg-black/80 dark:bg-black/40 backdrop-blur-md">
      <aside className="flex items-center gap-2">
        <Image
          src={"./assets/plura-logo.svg"}
          width={40}
          height={40}
          alt="plura logo"
        />
        <span className="text-xl font-bold">Plura.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8 text-white">
          <Link href={"#pricing"}>Pricing</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#documentation"}>Documentation</Link>
          <Link href={"#features"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency/sign-in"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ThemeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
