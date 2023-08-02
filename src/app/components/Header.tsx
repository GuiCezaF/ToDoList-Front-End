import Link from "next/link";

const Header = () => {
  return (
    <div className=" mx-auto p-5">
      <div className="flex justify-between text-white">
        <Link href="/" className="font-semibold text-3xl ">
          <h1>Tasked</h1>{" "}
        </Link>
        <p>Login</p>
      </div>
    </div>
  );
};
export default Header;
