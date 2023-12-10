import React from 'react';
import { Link, NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';

interface routeItem {
    title?: string;
    path: string;
    icon?: string;
    component: any;
    children?: [];
}

function NavItem(props: routeItem) {
    const { title, path, icon, children } = props;

    // const location = useLocation();

    return (
        <li className="navItem">
            {/* <NavLink
                to={
                    children
                        ? `${path}/${children.find((item) => item.index)!.path}`
                        : path
                }
                className={classnames("navItem-main", {
                    active: location.pathname.includes(path),
                })}
            >
                {icon && <Icon type={icon} />}
                <span className="nav-title">{title}</span>
                {children && <CaretDownOutlined className="down" />}
            </NavLink>

            {children && (
                <ul className="twoNav">
                    {children.map((item) => {
                        return (
                            <li key={item.title}>
                                <NavLink to={`${path}/${item.path}`}>
                                    {item.icon && <Icon type={item.icon} />} {item.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            )} */}
        </li>
    );
}

function App() {
    return (
        <BrowserRouter>
            <RouteMy></RouteMy>
            <ul>
                <li><Link to={'/'}>主页</Link></li>
                <li><NavLink to={'/about'}>关于</NavLink></li>
            </ul>
        </BrowserRouter>
    )
}
function RouteMy() {
    return (
        <Routes>
            <Route path='/' element={<div>home</div>} />
            <Route path='/about' element={<div>about</div>} />
        </Routes>
    )
}

export default App;
