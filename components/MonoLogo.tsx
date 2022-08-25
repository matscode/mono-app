export default function MonoLogo({isDark = true, width = '164px'}): JSX.Element {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={isDark ? 'mono.svg' : 'mono-light.svg'} alt='Mono' className='mono-logo mx-auto' style={{width}} />;
}
