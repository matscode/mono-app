export default function MonoLogo({isDark = true}): JSX.Element {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={isDark ? 'mono.svg' : 'mono-light.svg'} alt='Mono' className='mono-logo mx-auto' />;
}
