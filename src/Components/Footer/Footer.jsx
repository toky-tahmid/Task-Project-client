import { Typography } from "@material-tailwind/react";
const Footer = () => {
  const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Social Media",
      items: ["Instagram", "Linkedin", "GitHub"],
    },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-zinc-800 pt-16  m-5 rounded-[3rem]">
      <div className="mx-auto w-full px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 text-neutral-400">
          <img className="h-32 ml-10 mt-8" src="https://i.ibb.co/XLNKnNQ/Task-7.png" alt="" />
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-80 text-neutral-300"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 w-0 font-normal transition-colors text-neutral-500 hover:text-slate-600"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 mx-auto py-4 md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-neutral-400 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
