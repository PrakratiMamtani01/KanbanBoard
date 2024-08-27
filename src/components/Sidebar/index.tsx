import {
	AppsOutline,
	GridOutline,
	HomeOutline,
	LogOutOutline,
	PieChartOutline,
} from "react-ionicons";

const Sidebar = () => {

    const navLinks = [
        {
            title:"Home",
            icon: (<HomeOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: false,
        },
        {
            title:"Boards",
            icon: (<AppsOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: true,
        },
        {
            title:"Projects",
            icon: (<GridOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: false,
        },
        {
            title:"Analytics",
            icon: (<PieChartOutline color="#FFFFFF" width = "22px" height="22px"/>),
            active: false,
        },
    ]

	return (
        // flex column arranges contents in column direction
        <div className="fixed left-0 top-12 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col ">
            {/* <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#a21caf]">
				<span className="text-white font-semibold text-2xl md:block hidden">Logo.</span>
				<span className="text-white font-semibold text-2xl md:hidden block">L.</span>
			</div> */}
            <div >
                {navLinks.map((link) => {
					return (
                        <div
                          key={link.title}
                          className={`flex items-center gap-2 w-full rounded-lg hover:bg-[#a21caf] px-2 py-3 cursor-pointer ${
                            link.active ? "bg-[#a21caf]" : "bg-transparent"
                          }`}
                        >
                          {link.icon}
                          <span className="font-medium text-[15px] md:block hidden text-white">{link.title}</span>
                        </div>
                    );
				})}
                <div className=" flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-purple-200 px-2 py-3 cursor-pointer bg-gray-200">
                    <LogOutOutline color="#a21caf" />
                    <span className="font-medium text-[15px] md:block hidden text-[#a21caf]">Log Out</span>
                </div>
            </div>

        </div>
		
	);
};

export default Sidebar;

