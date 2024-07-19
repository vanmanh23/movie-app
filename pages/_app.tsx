import type { AppProps } from 'next/app';
import '../styles/glabals.css';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}