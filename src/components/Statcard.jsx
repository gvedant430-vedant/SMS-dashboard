import"../css/statcard.css";
function Statcard({title,value,icon}){
    return(
        <div className="stat-card">
            <div>
                <h2>{value}</h2>
                <p>{title}</p>
            </div>
            <div className="icon">
                {icon}
            </div>
        </div>
    );
}

export default Statcard;