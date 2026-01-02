import './Button.css'
import WhiteArrow from '../../assets/white-arrow.svg'


function Button({ arrow, buttonStyle, children, ...props }) {
  const className =
    buttonStyle === 'unstyled'
      ? 'button-unstyled'
      : `button ${buttonStyle || ''}`

  return (
    <button className={className} {...props}>
      {children}
      {arrow && <img src={WhiteArrow} />}
    </button>
  )
}

export default Button
