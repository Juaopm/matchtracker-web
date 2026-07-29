import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/*Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 bg-slate-100 p-6">
          {/* Recent Matches */}
          <section>
            <h2>Recent Matches</h2>
          </section>

          {/* Performance */}
          <section>
            <h2>Performance Trend</h2>
          </section>

          {/* Win/Loss */}
          <section>
            <h2>Win/Loss</h2>
          </section>

          {/* Leaderboard */}
          <section>
            <h2>Leaderboard</h2>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
