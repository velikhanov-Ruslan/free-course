import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.clear}
            className={classNames(cls.Toggler, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    );
};

export default LanguageSwitcher;
