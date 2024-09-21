import { classNames } from 'shared/lib/classNames';

import Day from 'widgets/assets/icons/day.svg';
import Night from 'widgets/assets/icons/night.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider/ui';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.clear}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <Day /> : <Night />}
        </Button>
    );
};

export default ThemeSwitcher;
