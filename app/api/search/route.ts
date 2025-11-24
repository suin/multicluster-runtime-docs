import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  // Orama does not support a Japanese stemmer/tokenizer yet.
  // Map our locales to the closest supported search language.
  // See: https://docs.orama.com/docs/orama-js/supported-languages
  localeMap: {
    en: 'english',
    ja: 'english',
  },
});
