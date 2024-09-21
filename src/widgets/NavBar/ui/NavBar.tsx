import { paths } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <AppLink theme={AppLinkTheme.primary} to={paths.main}>
            Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.primary} to={paths.about}>
            О нас
        </AppLink>
    </div>
);

export default NavBar;
