import type { ReactNode } from "react";

function DashboardCard({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-slate-800 h-full rounded-xl shadow-md p-6">
      <h2 className="text-sm font-semibold tracking-wide text-white">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default DashboardCard;
