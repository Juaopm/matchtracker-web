import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClockRotateLeft,
  faChartSimple,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { label: "Dashboard", icon: faHouse, active: true },
  { label: "Match History", icon: faClockRotateLeft, active: false },
  { label: "Statistics", icon: faChartSimple, active: false },
  { label: "Leaderboard", icon: faTrophy, active: false },
];

function Sidebar() {
  return (
    <aside className="w-50 border-r border-slate-700 bg-slate-900 py-4 text-white">
      <nav className="flex flex-col gap-2 pl-4">
        {menuItems.map((item) => (
          <button
            type="button"
            key={item.label}
            className={`relative flex w-full items-center gap-3 rounded-md px-4 py-3 transition-colors duration-200 ${item.active ? "bg-amber-400/15 text-amber-400 shadow-[inset_-12px_0_20px_-12px_rgba(251,191,36,0.7)]" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`}
          >
            <FontAwesomeIcon icon={item.icon} />
            {item.label}
            {item.active && (
              <span className="absolute right-0 top-0 h-full w-1 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
