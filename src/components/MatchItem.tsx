function MatchItem({
  map,
  kd,
  date,
  result,
}: {
  map: string;
  kd: string;
  date: string;
  result: "win" | "loss" | "draw";
}) {
  const resultClasses = {
    win: "bg-green-400",
    loss: "bg-red-400",
    draw: "bg-gray-300",
  };

  const resultClass = resultClasses[result];

  return (
    <div className={`grid grid-cols-[2fr_1fr_1fr] ${resultClass} p-3`}>
      <span className="font-medium text-slate-900">{map}</span>
      <span className="text-center text-sm text-slate-700">{kd}</span>
      <span className="text-center text-sm text-slate-700">{date}</span>
    </div>
  );
}

export default MatchItem;
