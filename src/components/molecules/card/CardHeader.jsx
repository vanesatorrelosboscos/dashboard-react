const BADGE_BASE = "py-[3px] px-2.5 rounded-full text-[11px] font-bold tracking-[0.3px]"

const BADGE_VARIANTS = {
    primary: "bg-(--primary)/15 text-(--primary)",
    success: "bg-(--success)/15 text-(--success)",
    warning: "bg-(--warning)/15 text-(--warning)"
}

function CardHeader({ title, className = "", badge, id, text, button, weight=15 }) {
    const badgeClass = BADGE_VARIANTS[badge] ? `${BADGE_BASE} ${BADGE_VARIANTS[badge]}` : className

    return (
        <div className="flex justify-between items-center pt-4.5 px-5.5 pb-3.5 border-b border-solid border-(--border)">
            <span className={`text-[${weight}px] font-bold`}>{title}</span>
            {button ? button : <span className={badgeClass} id={id}>{text}</span>}
        </div>
    )
}

export default CardHeader