import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
  primary = 'primary',
  secondary = 'secondary',
}

interface AppLinkprops extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkprops> = (props) => {
    const {
        to, className, theme, children, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.link, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
