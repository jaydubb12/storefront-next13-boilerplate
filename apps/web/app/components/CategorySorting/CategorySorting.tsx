'use client';

import { useTranslation } from '~/app/i18n/client';
import { sortingOptions } from '~/mocks';
import { SfSelect } from '../SFUI';

export function CategorySorting() {
  const { t } = useTranslation('en', 'category');

  return (
    <>
      <span
        className="block py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-sorting"
      >
        {t('sortBy')}
      </span>
      <div className="px-2 mb-6">
        <SfSelect aria-label={t('sortBy')}>
          {sortingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {t(`sortType.${option.label}`)}
            </option>
          ))}
        </SfSelect>
      </div>
    </>
  );
}
