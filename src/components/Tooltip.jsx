const Tooltip = ({ children, label }) => {
  return (<div className="relative group">
    {children}
    <div>
      <span className="hidden group-hover:block absolute z-10 p-2 text-xs text-white bg-ubuntu-9 rounded-lg top-2 left-16">{label}</span>
    </div>
  </div>)
}

export default Tooltip;