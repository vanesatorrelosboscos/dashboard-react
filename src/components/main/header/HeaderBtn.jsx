function HeaderBtn({ style, icon, id, text, onClick }) {
  return (
    <button 
        className={`btn btn-${style} btn-sm`} 
        id={id}
        onClick={onClick}
    >
      {icon} {text}
    </button>
  )
}

export default HeaderBtn