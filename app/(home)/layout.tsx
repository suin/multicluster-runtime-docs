import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  const options = baseOptions('en');

  // Disable i18n UI on the root (/) home layout, since this route is not wrapped
  // in an I18n-aware RootProvider. Language switching is still available on
  // localized routes under `/[lang]`.
  return (
    <HomeLayout {...options} i18n={false}>
      {children}
    </HomeLayout>
  );
}
