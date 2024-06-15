import Link from "next/link";

function Nav() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#now", label: "Now" },
    { href: "#contact", label: "Contact", buttonType: "primary" },
  ];

  return (
    <nav className="hidden md:flex fixed top-0 left-0 w-screen bg-black min-h-[50px] justify-center items-center">
      <div className="max-w-[1440px] w-full px-[10px] mx-auto flex justify-between">
        <Link href="#hero" className="btn">
          <h3 className="text-xl">RyanBriggs.Dev</h3>
        </Link>
        <ul className="flex flex-row gap-[12px] items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`btn ${
                  item.buttonType === "primary" ? "btn-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
