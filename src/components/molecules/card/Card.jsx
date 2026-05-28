function Card({children}){
    return <div className="flex flex-col bg-(--surface) border border-solid border-(--border) rounded-(--radius)">{children}</div>
}

export default Card