export default function ErrorMessage({ message = '' }: { message: string }): JSX.Element | null {
  return message
    ? <div className='text-danger small'>{message[0].toUpperCase()}{message.slice(
      1)}</div>
    : null
}