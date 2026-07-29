function Header(props: { title: string }) {
  return (
    <header className="h-18 bg-slate-800 p-4 text-white">{props.title}</header>
  );
}

export default Header;
