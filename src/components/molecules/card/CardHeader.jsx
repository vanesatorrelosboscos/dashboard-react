const BADGE_VARIANTS = {
    success: "badge badge-success",
    primary: "badge badge-primary",
    warning: "badge badge-warning"
}

function CardHeader({title, className, badge, id, text, button}){
    return (
        <div className="card-header">
            <span className="card-title">{title}</span>
            {button ? button : <span className={BADGE_VARIANTS[badge] || className} id={id}>{text}</span>}
        </div>
    )
}

export default CardHeader