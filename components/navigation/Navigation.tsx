import Link from "next/link";

const Navigation = () => 
{

    return (
        <div className="shadow-md h-full">
               <div className="ml-5 mt-5">
        <h1 className="text-2xl font-bold">Welcome (name)</h1>
      </div>
      <ul className="ml-5 mt-14 flex flex-col gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:underline">
            Ride tracker
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:underline">
            History
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:underline">
            Settings
          </Link>
        </li>
      </ul>
        </div>
    );

}

export default Navigation;