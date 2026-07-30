function DashboardCard(props: { title: string }) {
  return (
    <div className="bg-white h-full rounded-xl shadow-md p-6">
      {props.title}
    </div>
  );
}

export default DashboardCard;
