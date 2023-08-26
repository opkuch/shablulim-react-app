export const ToolTip = ({text, iconSrc}) => {
    return (
        <div className="tooltip" style={{backgroundImage:`url(${iconSrc})`, backgroundPosition: 'center'}}>
            <span className="tooltiptext">{text}</span>
        </div>
    )
}