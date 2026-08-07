import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <header className="flex items-center justify-between h-26 p-8 bg-slate-800 text-white">
      <div className="flex items-center gap-3">
        <span className="logo ">M+</span>
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-white">MatchTracker</span>
          <span className="text-amber-500">+</span>
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-slate-200 hover:text-slate-300">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="bg-slate-400 w-14 h-14 rounded-full"
          >
            JM
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-slate-700 p-2 shadow-lg">
              <button className="block w-full rounded px-3 py-2 text-left hover:bg-slate-600">
                Meu perfil
              </button>
              <button className="block w-full rounded px-3 py-2 text-left hover:bg-slate-600">
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
