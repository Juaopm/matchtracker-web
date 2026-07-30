import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="bg-slate-900 text-white flex min-h-screen flex-col">
      {/*Header */}
      <Header title="MatchTracker+" />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 grid grid-cols-3 gap-4 p-6">
          {/* Recent Matches */}
          <div className="row-span-3">
            <DashboardCard title="Recent Matches" />
          </div>

          {/* Performance */}
          <div className="row-span-2">
            <DashboardCard title="Performance Trend" />
          </div>

          {/* Win/Loss */}
          <div className="row-span-2">
            <DashboardCard title="Win/Loss" />
          </div>

          {/* Leaderboard */}
          <div className="col-span-2">
            <DashboardCard title="Leaderboard" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
