import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';
import Icon from '../assets/icon.svg';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Works', to: 'works' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100]"
    >
      <div
        className={`w-full backdrop-blur-lg transition-all duration-300 ${
          scrolled
            ? 'bg-[#08070e]/92 shadow-[0_8px_30px_rgba(0,216,255,0.15)]'
            : 'bg-[#08070e]/70'
        }`}
      >
        <div className="content-shell flex h-[72px] items-center justify-between px-1 sm:px-2">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <img src={Icon} alt="Portfolio logo" className="w-28 sm:w-36 md:w-44" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 lg:gap-3">
              {navItems.map((item) => (
                <li key={item.to} className="px-0">
                  <Link to={item.to} smooth={true} duration={500} offset={-80}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#9f38f9]/60 bg-transparent text-white hover:border-[#00d8ff] hover:bg-[#9f38f9]/20 hover:text-white"
                    >
                      {item.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                aria-label="Open navigation menu"
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86%] max-w-xs border-l border-[#00d8ff]/30 bg-[#07060d]/95 p-0 text-white"
            >
              <SheetHeader className="border-b border-white/10 pb-4">
                <SheetTitle className="text-white">Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Main site sections
                </SheetDescription>
              </SheetHeader>
              <nav className="px-4 py-4">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.to} className="px-0">
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-72}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button
                          variant="outline"
                          className="h-11 w-full justify-start border-[#9f38f9]/60 bg-transparent text-base text-white hover:border-[#00d8ff] hover:bg-[#9f38f9]/20 hover:text-white"
                        >
                          {item.label}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
