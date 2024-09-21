import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={classNames(cls.Sidebar, { [cls.open]: open }, [className])}>
            Sidebar11
            <button onClick={() => setOpen((p) => !p)}>toggle</button>
            <div className={cls.Switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
