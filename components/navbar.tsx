import { ThemeSwitch } from "./theme-switch";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center w-full border-b justify-between p-3 pl-5 pr-5">
      <SidebarTrigger />
      <h1 className="text-2xl">Utools</h1>
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
