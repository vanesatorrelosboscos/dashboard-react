function HeaderTitle({name}) {
    const date = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const time = new Date().getHours()
    let greeting = ''

    if (time < 13) {
        greeting = 'Good morning'
    } else if (time < 19) {
        greeting = 'Good afternoon'
    } else {
        greeting = 'Good evening'
    }

    return (
        <div>
            <h1 className="text-[26px] font-extrabold tracking-[-0.5px]">
                {greeting}, <span className="text-(--primary)">{name}</span> 👋
            </h1>
            <p className="text-(--muted) text-[14px] -mt-1">
                {date} · Here's what's happening today.
            </p>
        </div>
    )
}

export default HeaderTitle