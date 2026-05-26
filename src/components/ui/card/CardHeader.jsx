function CardHeader({title, className, id, text}){
    return (
        <div className="card-header">
            <span className="card-title">{title}</span>
            <span className={className} id={id}>{text}</span>
        </div>
    )
}

export default CardHeader