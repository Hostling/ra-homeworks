function Menu(props) {
  const { items, opened } = props;
  console.log(opened);
  if(opened !== undefined) {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span /></div>
        <nav>
          <ul>
            {items.map(item => <li><a href={item.href} key={item.title}>{item.title}</a></li>)}
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <div className="menu-toggle"><span /></div>
      </div>
    );
  }
}
