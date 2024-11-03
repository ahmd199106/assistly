import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-white text-white p-5">
      <ul
        className="gap-5 flex flex-col lg:flex-col sm:flex-row"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <li>
          <Link
            href="/create-chatbot"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row gap-2 p-5 rounded-md bg-blue-500 text-white"
          >
            link
          </Link>
        </li>
        <li>
          <Link
            href="/view-chatbots"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row gap-2 p-5 rounded-md bg-blue-500 text-white"
          >
            link
          </Link>
        </li>
        <li>
          <Link
            href="/review-sessions"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row gap-2 p-5 rounded-md bg-blue-500 text-white"
          >
            link
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
