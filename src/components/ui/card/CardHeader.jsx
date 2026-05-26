function CardHeader({title, className, id, text, button}){
    return (
        <div className="card-header">
            <span className="card-title">{title}</span>
            {button ? button : <span className={className} id={id}>{text}</span>}
        </div>
    )
}

export default CardHeader