function Dashboard() {
  return (
    <div>
      {/*Header */}
      <header>
        <h1>Header</h1>
      </header>

      <div>
        {/* Sidebar */}
        <aside>
          <h2>Sidebar</h2>
        </aside>

        {/* Main */}
        <main>
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
