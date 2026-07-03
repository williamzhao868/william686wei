
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">{t('footer.brandName')}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">
              {t('footer.quickLinks')}
            </span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('nav.home')}
              </Link>
              <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('footer.allArticles')}
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">
              {t('footer.legal')}
            </span>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {t('footer.termsOfService')}
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
