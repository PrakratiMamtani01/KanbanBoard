import {
	AppsOutline,
	GridOutline,
	HomeOutline,
	LogOutOutline,
	PieChartOutline,
} from "react-ionicons";
import { Link } from "react-router-dom";
import { useState } from 'react';

interface MenuProps {
	isOpen: boolean;
}

const Menu = ({isOpen}: MenuProps) => {

    const navLinks = [
        {
            title:"Home",
            icon: (<HomeOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: true,
            path: "/"
        },
        {
            title:"Boards",
            icon: (<AppsOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: false,
            path: "/boards"
        },
        {
            title:"Projects",
            icon: (<GridOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: false,
            path: "/projects"
        },
        {
            title:"Analytics",
            icon: (<PieChartOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: false,
            path: "/analytics"
        },
    ]

    const [currentNav, setCurrentNav] = useState("home");
    const handleLinkClick = (title: string) => {
        setCurrentNav(title);
        console.log(currentNav);
    }

	return (
        // flex column arranges contents in column direction
        <div className={`fixed left-0 top-13 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col transition ease-in-out delay-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>


            <div>
                {navLinks.map((link) => {
					return (
                        <Link to={link.path}
                          key={link.title}
                          onClick={() => handleLinkClick(link.title)}
                          // The flex has default elements in row direction and so icon and title is places next to each other.
                          className={`flex items-center gap-2 w-full rounded-lg hover:bg-[#a21caf] px-2 py-3 cursor-pointer ${
                            link.title == currentNav? "bg-[#a21caf]" : "bg-transparent"
                          }`}
                        >
                          {link.icon}
                          <span className="font-medium text-[15px] md:block hidden text-white">{link.title}</span>
                        </Link>
                    );
				})}
                <div className="flex absolute bottom-20 items-center md:justify-start justify-center gap-2 md:w-[230px] w-[60px] rounded-lg hover:bg-purple-200 px-2 py-3 cursor-pointer bg-gray-200">
                    <LogOutOutline color="#a21caf" />
                    <span className="font-medium text-[15px] md:block hidden text-[#a21caf]">Log Out</span>
                </div>
            </div>

        </div>
		
	);
};

export default Menu;

