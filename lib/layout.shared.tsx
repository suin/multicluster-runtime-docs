import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: locale === 'ja' ? 'multicluster-runtime ドキュメント' : 'multicluster-runtime Documentation',
      url: `/${locale}`,
    },
    githubUrl: 'https://github.com',
  };
}
