import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className="mx-32 px-4 py-2 border rounded-md my-5">
      <div className="flex justify-between items-center">
        <div>
          <p>Welcome back, Admin!</p>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
