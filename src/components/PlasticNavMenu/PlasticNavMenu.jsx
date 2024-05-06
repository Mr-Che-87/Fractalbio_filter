import '../../css/style-new-with-filters.css'

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import tapintripod from "../../img/plastic/icons/tapintripod.svg";
import tapintripodActive from "../../img/plastic/icons/tapintripod-active.svg";
import tubes3 from "../../img/plastic/icons/tubes3.svg";
import tubes3Active from "../../img/plastic/icons/tubes3-active.svg";
import dispenser2 from "../../img/plastic/icons/dispenser-2.svg";
import dispenser2Active from "../../img/plastic/icons/dispenser-active-2.svg";
import petridish from "../../img/plastic/icons/petridish.svg";
import petridishActive from "../../img/plastic/icons/petridish-active.svg";
import frame1271 from "../../img/plastic/icons/frame_1271.svg";
import frame1272 from "../../img/plastic/icons/frame_1272.svg";
import otherplastic from "../../img/plastic/icons/otherplastic.svg";
import otherplasticActive from "../../img/plastic/icons/otherplastic-active.svg";

//Объект с категориями меню:
const plasticSections = {
    'Наконечники': {
        icon: tapintripod,
        activeIcon: tapintripodActive,
        link: '/plastic-list'
    },
    'Пробирки': {
        icon: tubes3,
        activeIcon: tubes3Active,
        link: '/plastic-list-probirki'
    },
    'Дозаторы': {
        icon: dispenser2,
        activeIcon: dispenser2Active,
        link: '/plastic-list-dozatory'
    },
    'Чашки Петри': {
        icon: petridish,
        activeIcon: petridishActive,
        link: '/plastic-list-chashki-petri'
    },
    'Пипетки': {
        icon: frame1271,
        activeIcon: frame1272,
        link: '/plastic-list-pipetki'
    },
    'Прочее': {
        icon: otherplastic,
        activeIcon: otherplasticActive,
        link: '/plastic-list-prochee'
    }
};

//Компонент для автоматического изменения заголовка секций:
const PlasticNavLink = ({ label, activeItem, onClick }) => {
    const { icon, activeIcon, link } = plasticSections[label];

    return (
        <NavLink
            to={link}
            className={`top-menu-link ${activeItem === label ? 'active' : ''}`}
            onClick={() => onClick(label)}
        >
            <img src={activeItem === label ? activeIcon : icon} alt={label} />
            <span className="top-menu-label">{label}</span>
        </NavLink>
    );
};

const PlasticNavMenu = () => {
//state и обработчик:
    const [activeItem, setActiveItem] = useState(localStorage.getItem("activeItem") || "Наконечники");

    const handlePageChange = (title) => {
        setActiveItem(title);
    };


//чтоб active сохранялся при перезагрузке:
    useEffect(() => {
        localStorage.setItem("activeItem", activeItem);
    }, [activeItem]);

  
    return (
        <>
            <div className="inner-top">
                <div className="inner-title">Лабораторный пластик&nbsp;
                    <div className="inner-doptitle">| {activeItem}</div>
                </div>

                <ul className="inner-top-menu">
                    {Object.keys(plasticSections).map((label) => (
                        <li key={label} className={`top-menu-item ${activeItem === label ? 'active' : ''}`}>
                            <PlasticNavLink
                                label={label}
                                activeItem={activeItem}
                                onClick={handlePageChange}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PlasticNavMenu;


/*
//СТАРОЕ-ГРОМОЗДКОЕ:

//Компонент для автоматического изменения заголовка подменю:
const PlasticNavLink = ({ to, icon, activeIcon, label, onClick, isActive }) => {
    return (
        <NavLink
            to={to}
            className={`top-menu-link ${isActive ? 'active' : ''}`}
            onClick={() => onClick(label)}
        >
            <img src={isActive ? activeIcon : icon} alt={label} />
            <span className="top-menu-label">{label}</span>
        </NavLink>
    );
};


const PlasticNavMenu = () => {
    const [pageTitle, setPageTitle] = useState(localStorage.getItem("pageTitle") || "Наконечники в штативе");

    useEffect(() => {
        localStorage.setItem("pageTitle", pageTitle);
    }, [pageTitle]);

    const handlePageChange = (title) => {
        setPageTitle(title);
    };

    return (
        <>
        <div className="inner-top">
            <div className="inner-title">Лабораторный пластик
            <div className="inner-doptitle">| {pageTitle}</div>
            </div>
        
            <ul className="inner-top-menu">
                <li className={`top-menu-item ${pageTitle === 'Наконечники в штативе' ? 'active' : ''}`}>
                <PlasticNavLink
                    to="/plastic-list"
                    icon={tapintripod}
                    activeIcon={tapintripodActive}
                    label="Наконечники в штативе"
                    pageTitle={pageTitle}
                    onClick={handlePageChange}
                    isActive={pageTitle === 'Наконечники в штативе'}
                />
                </li>

                <li className={`top-menu-item ${pageTitle === 'Пробирки' ? 'active' : ''}`}>
                    <PlasticNavLink
                        to="/plastic-list-probirki"
                        icon={tubes}
                        activeIcon={tubesActive}
                        label="Пробирки"
                        pageTitle={pageTitle}
                        onClick={handlePageChange}
                        isActive={pageTitle === 'Пробирки'}
                    />
                </li>

                <li className={`top-menu-item ${pageTitle === 'Дозаторы' ? 'active' : ''}`}>
                    <PlasticNavLink
                        to="/plastic-list-dozatory"
                        icon={dispenser}
                        label="Дозаторы"
                        pageTitle={pageTitle}
                        onClick={handlePageChange}
                    />
                </li>

                <li className={`top-menu-item ${pageTitle === 'Чашки Петри' ? 'active' : ''}`}>
                    <PlasticNavLink
                        to="/plastic-list-chashki-petri"
                        icon={petridish}
                        label="Чашки Петри"
                        pageTitle={pageTitle}
                        onClick={handlePageChange}
                    />
                </li>

                <li className={`top-menu-item ${pageTitle === 'Пипетки' ? 'active' : ''}`}>
                    <PlasticNavLink
                        to="/plastic-list-pipetki"
                        icon={pipetki}
                        label="Пипетки"
                        pageTitle={pageTitle}
                        onClick={handlePageChange}
                    />
                </li>

                <li className={`top-menu-item ${pageTitle === 'Прочее' ? 'active' : ''}`}>
                    <PlasticNavLink
                        to="/plastic-list-prochee"
                        icon={otherplastic}
                        label="Прочее"
                        pageTitle={pageTitle}
                        onClick={handlePageChange}
                    />
                </li>
            </ul>
        </div>
    </>    
    )
}


export default PlasticNavMenu
*/