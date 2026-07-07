
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Cpu, Globe, LogOut, LayoutDashboard, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu.jsx';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/insights', label: t('nav.insights') },
    { path: '/hr-peers', label: t('nav.hrPeers') },
    { path: '/ai-tools', label: t('nav.aiTools') },
    { path: '/competitors', label: t('nav.competitorDynamics') },
    { path: '/lab-news', label: t('nav.labNews') },
    { path: '/ai-activities', label: t('nav.aiActivities') }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-all duration-200 hover:opacity-80 shrink-0 mr-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">Engma AI Lab</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2 rounded-full font-medium transition-colors">
                  <Globe className="h-4 w-4" />
                  {language === 'en' ? 'EN' : '中文'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'font-bold' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('zh')} className={language === 'zh' ? 'font-bold' : ''}>
                  中文 (Chinese)
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {!isAuthenticated ? (
                  <DropdownMenuItem onClick={() => navigate('/login')}>
                    <LogIn className="w-4 h-4 mr-2" /> Admin Login
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/admin/articles')}>
                      <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" /> Logout
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-4 py-2 mt-2 border-t border-border/50">
                <Button 
                  variant={language === 'en' ? 'default' : 'outline'} 
                  size="sm" 
                  onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                  className="rounded-full flex-1"
                >
                  English
                </Button>
                <Button 
                  variant={language === 'zh' ? 'default' : 'outline'} 
                  size="sm" 
                  onClick={() => { setLanguage('zh'); setMobileMenuOpen(false); }}
                  className="rounded-full flex-1"
                >
                  中文
                </Button>
              </div>
              <div className="px-4 py-2 flex flex-col gap-2 border-t border-border/50">
                {!isAuthenticated ? (
                  <Button variant="ghost" size="sm" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="justify-start w-full">
                    <LogIn className="w-4 h-4 mr-2" /> Admin Login
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" onClick={() => { navigate('/admin/articles'); setMobileMenuOpen(false); }} className="justify-start w-full">
                      <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="justify-start w-full text-destructive">
                      <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
