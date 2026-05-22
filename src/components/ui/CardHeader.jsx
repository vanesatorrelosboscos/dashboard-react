function CardHeader({title, style, id, text}){
    return (
        <div className="card-header">
            <span className="card-title">{title}</span>
            <span className={style} id={id}>{text}</span>
        </div>
    )
}

export default CardHeader