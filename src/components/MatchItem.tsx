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
      <span className="font-medium">{map}</span>
      <span className="text-center">{kd}</span>
      <span className="text-center">{date}</span>
    </div>
  );
}

export default MatchItem;
