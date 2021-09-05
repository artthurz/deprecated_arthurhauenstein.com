import { Wrapper } from './Switch.styles'

type switchProps = {
  checked: boolean
  onChange: () => void
}

const Switch = ({ checked, onChange }: switchProps) => {
  return (
    <Wrapper>
      <input
        onChange={() => onChange()}
        checked={checked}
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
      />
      <label
        style={{ cursor: 'pointer' }}
        htmlFor="toggle"
        className="toggle--label"
      >
        <span className="toggle--label-background"></span>
      </label>
    </Wrapper>
  )
}

export default Switch
