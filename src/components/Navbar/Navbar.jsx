import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar w-full fixed top-0 left-0 bg-[#2F3E46] text-white">
      <div className="logo flex flex-row  justify-start items-center my-auto p-4 gap-4 w-[15%] font-bold">
        <span className="material-icons w-4">tips_and_updates</span>

        <p className="text-xl  ">Hack Ideas</p>
      </div>
    </div>
  );
};

export default Navbar;
