import {ReactNode} from 'react';
import Container from '../components/Container';

type Props = {
  error: ReactNode;
};

export default function ErrorLayout({error}: Props) {
  return (
    <Container>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {error}
        </h1>
      </article>
    </Container>
  );
}
