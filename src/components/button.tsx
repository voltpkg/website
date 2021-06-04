import '../styles/button.css'

interface IFilledButton {
  text: string
}
export const FilledButton = (props: IFilledButton) => {
  return <div className='filled-button'>{props.text}</div>
}

export const OutlinedButton = ({ text }) => {}
