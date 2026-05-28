function Avatar({name}){
    return <div className="flex size-9.5 shrink-0 bg-linear-to-br from-(--primary) to-(--accent) justify-center items-center rounded-full font-extrabold text-sm text-white border-2 border-solid border-(--primary) cursor-pointer">{name}</div>
}

export default Avatar