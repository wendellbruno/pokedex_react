import "./StatusBar.css";

function StatusBar({ status, index }) {
  return (
    <div className="container_status">
      <span key={index}>
        {status.stat.name.toUpperCase()}
        <span className={`barra ${status.stat.name}`}
        style={{width: `${status.base_stat}px` }}
        >{status.base_stat}</span>
      </span>
    </div>
  );
}

export default StatusBar;
