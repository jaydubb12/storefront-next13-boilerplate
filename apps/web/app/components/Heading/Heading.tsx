import type { HeadingProps } from './types';

export function Heading({
  tag = 'h1',
  className = 'text-center mb-6 font-bold typography-headline-3 md:typography-headline-2',
  title,
  ...attributes
}: HeadingProps): JSX.Element {
  const Tag = tag;

  return (
    <Tag className={className} {...attributes}>
      {title}
    </Tag>
  );
}
