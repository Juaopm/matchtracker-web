import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

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
            <DashboardCard title="RECENT MATCHES" />
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
