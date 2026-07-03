import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';

export default function BackButton({ label, returnTo }) {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleBack = () => {
    if (returnTo) {
      navigate(returnTo);
    } else {
      navigate(-1);
    }
  };

  const defaultLabel = language === 'zh' ? '返回' : 'Back';

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className="mb-8 -ml-4 group text-muted-foreground hover:text-foreground transition-all duration-200 active:scale-[0.98]"
      aria-label={label || defaultLabel}
    >
      <ChevronLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
      {label || defaultLabel}
    </Button>
  );
}