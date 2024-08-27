// import { Outlet } from "react-router";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import Menu from "../components/Menu";
// import { useState } from "react";

// const [menuOpen, setMenuOpen] = useState(false);

// const Layout = () => {
// 	return (
// 		<div className="w-screen h-screen relative">
// 			<Sidebar />
// 			<Navbar />

// 			<div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
// 				<Outlet />
// 			</div>

// 		</div>
// 	);
// };

// export default Layout;


import { useState } from 'react';
import { MenuOutline } from 'react-ionicons';
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-screen h-screen relative">
            <div className="top-[10px] flex w-[70px] h-[70px] items-center justify-left bg-[#a21caf] px-5" onClick={() => setMenuOpen(prevMenuOpen => !prevMenuOpen)}>
                <MenuOutline color="#FFF" />
            </div>
            <Menu isOpen={menuOpen} />
            <Navbar />

            <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[30px] w-full h-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
