import Image from "next/image";
import logo from "../../assets/images/movielogo.png";
import { UserRound } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/themeContext";

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);
    const {isDark, handleSwitch} = useContext(ThemeContext);
    useEffect(() => {
        handleSwitch(isClick);
    }, [isClick, handleSwitch]);
    const handleClick = () => {
        setIsClick(!isClick);
    }
  return (
    <div className="flex flex-row justify-between items-center w-full h-full px-6">
        <div className="w-24">
            <Image src={logo} alt="movie logo" className="w-full"/>
        </div>
        <div className="flex flex-row items-center gap-4">
            <div className={`flex flex-row h-7 w-12 rounded-full bg-white items-center transition-all duration-1000 ${isClick ? 'justify-start ease-in' : 'justify-end ease-out'}`}>
                <div className="w-6 h-6 bg-black rounded-full cursor-pointer" onClick={handleClick}></div>
            </div>
            <div className="text-white">
                <UserRound />
            </div>
        </div>
    </div>
  )
}
