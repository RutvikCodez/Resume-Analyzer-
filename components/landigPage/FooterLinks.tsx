const FooterLinks = ({ links, title, ...props }: footerLinkType) => {
  return (
    <div className="flex flex-col gap-4" {...props}>
      <h4 className="font-bold">{title}</h4>
      <ul className="flex flex-col gap-2 text-sm opacity-80">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:opacity-100">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
