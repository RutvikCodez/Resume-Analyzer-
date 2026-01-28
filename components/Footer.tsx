import { footerSections } from "@/constants";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="w-full py-16 text-foreground border-t border-border/20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">CareerForge AI</h3>
            <p className="text-sm opacity-80">
              Your AI-powered career platform helping millions land their dream
              jobs.
            </p>
          </div>
          {footerSections.map((item, index) => (
            <FooterLinks key={index} {...item} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/20 gap-6 md:gap-0">
          <p className="text-sm opacity-80">
            © 2024 CareerForge AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
