import {
	NotificationsOutline,
	PersonCircle,
	SearchOutline,
	SettingsOutline,
	ShareSocialOutline,
} from "react-ionicons";

const Navbar = () => {
	return (
		<div className="md:w-[calc(100%-70px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[70px] left-[60px] bg-[#a21caf] text-white">
			
			<div className="flex items-center gap-3 cursor-pointer">
				<PersonCircle
					color="#FFF"
					width={"28px"}
					height={"28px"}
				/>
				<span className="text-white font-semibold md:text-lg text-sm whitespace-nowrap">
					Kanban Board
				</span>
			</div>

			<div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
				<SearchOutline color={"#999"} />
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-gray-100 outline-none text-[15px] text-black"
				/>
			</div>

			<div className="md:flex hidden items-center gap-4">
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<ShareSocialOutline color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<SettingsOutline color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<NotificationsOutline color={"#444"} />
				</div>
			</div>

		</div>
		
	);
};

export default Navbar;