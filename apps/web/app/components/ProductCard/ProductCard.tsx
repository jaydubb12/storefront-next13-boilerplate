'use client';

import Image from 'next/image';
import classNames from 'classnames';
import Link from '~/app/i18n/components/Link';
import { useTranslation } from '../../i18n/client';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '../SFUI';
import type { ProductCardProps } from './types';

export function ProductCard({
  name,
  description,
  imageUrl,
  imageAlt,
  price,
  rating,
  ratingCount,
  slug,
  className,
  priority,
  ...attributes
}: ProductCardProps) {
  const { t } = useTranslation('common');

  return (
    <div
      className={classNames('border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0', className)}
      data-testid="product-card"
      {...attributes}
    >
      <div className="relative">
        <SfLink href={`/product/${slug}`} as={Link} className="relative block w-full pb-[100%]">
          <Image
            src={imageUrl ?? ''}
            alt={imageAlt || 'primary image'}
            className="object-cover rounded-md aspect-square w-full h-full"
            fill
            sizes="(max-width: 768px) 50vw, 190px"
            priority={priority}
          />
        </SfLink>
      </div>
      <div className="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href={`/product/${slug}`} as={Link} variant="secondary" className="no-underline">
          {name}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={rating} max={5} />

          <SfLink href="#" variant="secondary" as={Link} className="ml-1 no-underline">
            <SfCounter size="xs">{ratingCount}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">{description}</p>
        <span className="block pb-2 font-bold typography-text-sm">${price}</span>
        <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          {t('addToCartShort')}
        </SfButton>
      </div>
    </div>
  );
}
