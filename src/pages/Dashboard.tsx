import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import MatchItem from "../components/MatchItem";

function Dashboard() {
  return (
    <div className="bg-slate-900 flex min-h-screen flex-col">
      {/*Header */}
      <Header title="MatchTracker+" />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 grid grid-cols-3 gap-4 p-6">
          {/* Recent Matches */}
          <div className="row-span-3">
            <DashboardCard title="RECENT MATCHES">
              <div className="grid grid-cols-[2fr_1fr_1fr] text-xs text-white border-b border-gray-200 pb-2 mb-2 mt-4">
                <span>MAP</span>
                <span className="text-center">K/D</span>
                <span className="text-center">DATE</span>
              </div>
              <MatchItem
                map="Mirage"
                kd="20/05"
                date="01/06/2026"
                result="win"
              />
              <MatchItem
                map="Dust2"
                kd="12/08"
                date="02/06/2026"
                result="loss"
              />
              <MatchItem
                map="Inferno"
                kd="15/10"
                date="03/06/2026"
                result="draw"
              />
            </DashboardCard>
          </div>

          {/* Performance */}
          <div className="row-span-2">
            <DashboardCard title="PERFORMANCE TREND" />
          </div>

          {/* Win/Loss */}
          <div className="row-span-2">
            <DashboardCard title="WIN/LOSS" />
          </div>

          {/* Leaderboard */}
          <div className="col-span-2">
            <DashboardCard title="LEADERBOARD" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
