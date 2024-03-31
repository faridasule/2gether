
import { CiTrophy } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PiTelevisionFill } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";

import { IoMdHome } from "react-icons/io";


const sideNavigation = () => {
	return [
		{
			icon: IoMdHome,
			link: "/",
			title: "Home",
		},
		{
			icon: IoPeopleOutline,
			link: "/",
			title: "Connect",
		},
		{
			icon: MdLiveTv,
			link: "/",
			title: "Commerce",
		},
		{
			icon: CgProfile,
			link: "/",
			title: "Business Directory",
		},
		{
			icon: IoChatbubbleEllipsesOutline,
			link: "/",
			title: "Chat",
		},
		{
			icon: CgProfile,
			link: "/",
			title: "Profile",
		},
		{
			icon: IoTicketSharp,
			link: "/",
			title: "Tickets",
		},
		{
			icon: MdLiveTv,
			link: "/",
			title: "Live",
		},
		{
			icon: FaMusic,
			link: "/",
			title: "Steareo",
		},
		{
			icon: PiTelevisionFill,
			link: "/admin/promotion",
			title: "TV",
		},
		{
			icon: CiTrophy,
			link: "/admin/competition",
			title: "Voting",
		},
		{
			icon: IoBookOutline,
			link: "/admin/tutors",
			title: "Education",
		},
	];
};

export default sideNavigation;
