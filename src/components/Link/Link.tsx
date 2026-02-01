import { NavLink, NavLinkProps } from "react-router";

type LinkProps = {
  children: React.ReactNode;
} & NavLinkProps;
const Link = ({ ...props }: LinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        ` ${
          isActive ? "bg-orange-400  w-full text-white " : "text-blue-500"
        } rounded-lg p-1 flex items-center`
      }
      {...props}
    >
      {props.children}
    </NavLink>
  );
};

export default Link;
