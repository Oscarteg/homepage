import Container from '@/components/Container';
import { NextSeo } from 'next-seo';

export default function UsesLayout({ children }) {
  return (
    <Container>
      <NextSeo
        title="Uses – Oscar te Giffel"
        description={`Here's what tech I'm currently using for coding.`}
        canonical="https://oscartegiffel.com/uses"
        openGraph={{
          url: 'https://oscartegiffel.com/uses',
          title: 'Uses – Oscar te Giffel',
          description: `Here's what tech I'm currently using for coding.`
        }}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Uses
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
