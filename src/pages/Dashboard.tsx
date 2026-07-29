import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/*Header */}
      <Header title="MatchTracker+" />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 bg-slate-100 p-6">
          {/* Recent Matches */}
          <DashboardCard title="Recent Matches" />

          {/* Performance */}
          <DashboardCard title="Performance Trend" />

          {/* Win/Loss */}
          <DashboardCard title="Win/Loss" />

          {/* Leaderboard */}
          <DashboardCard title="Leaderboard" />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
