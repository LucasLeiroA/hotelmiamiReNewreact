import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { Menu, Home, Hotel, BedDouble, PhoneCall } from "lucide-react";
import logo from "../../assets/svg/logo.png";

const navLinks = [
	{ path: "/", label: "Inicio", icon: <Home className="w-5 h-5" /> },
	{ path: "/facilities", label: "Instalaciones", icon: <Hotel className="w-5 h-5" /> },
	{ path: "/habitaciones", label: "Habitaciones", icon: <BedDouble className="w-5 h-5" /> },
	{ path: "/contactanos", label: "Contactanos", icon: <PhoneCall className="w-5 h-5" /> },
];

const Navbar = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<img
						src={logo}
						alt="Hotel Miami"
						className="h-20 w-auto object-contain"
					/>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-10">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`relative text-base font-medium tracking-wide transition-all duration-200 group ${pathname === link.path
								? "text-[#f2cc8f]"
								: "text-[#1e1e1e] hover:text-[#f2cc8f]"
								}`}
						>
							{link.label}
							<span
								className={`absolute left-0 -bottom-1 h-[2px] bg-[#f2cc8f] transition-all duration-300 ${pathname === link.path
									? "w-full"
									: "w-0 group-hover:w-full"
									}`}
							/>
						</Link>
					))}
				</nav>

				{/* Mobile nav */}
				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button aria-label="Abrir menú móvil">
								<Menu className="w-7 h-7 text-[#1e1e1e]" />
							</button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="w-[80%] sm:w-[65%] p-6 bg-white/95 backdrop-blur-md border-r border-gray-200 shadow-xl data-[state=open]:animate-slide-in-from-left data-[state=closed]:animate-slide-out-to-left transition-all duration-500 ease-in-out"
						>
							{/* Logo arriba */}
							<div className="flex justify-center mb-6">
								<img
									src={logo}
									alt="Hotel Miami"
									className="h-16 w-auto object-contain"
								/>
							</div>

							<div className="space-y-4">
								{navLinks.map((link) => (
									<Link
										key={link.path}
										to={link.path}
										onClick={() => setOpen(false)}
										className={`flex items-center gap-3 text-lg font-medium transition-all px-2 py-2 rounded-md ${pathname === link.path
											? "text-[#f2cc8f] bg-[#f2cc8f]/10"
											: "text-[#1e1e1e] hover:text-[#f2cc8f] hover:bg-[#f2cc8f]/10"
											}`}
									>
										{link.icon}
										{link.label}
									</Link>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
