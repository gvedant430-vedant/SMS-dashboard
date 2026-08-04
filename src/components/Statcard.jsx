import"../css/statcard.css";
function Statcard({title,value,icon}){
    return(
        <div className="statcard-container">
            <div className="statcard-content">
                <h2 className="statcard-value">{value}</h2>
                <p className="statcard-title">{title}</p>
            </div>
            <div className="statcard-icon">
                {icon}
            </div>
        </div>
    );
}

export default Statcard;