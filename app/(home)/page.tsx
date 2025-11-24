import Link from 'next/link';

const QUICKSTART_PATH = '/docs/02-getting-started--quickstart';
const DOCS_ROOT_PATH = '/docs';

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 md:px-8 md:py-20 lg:py-24">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 md:self-start">
            One Pod, Many Clusters
          </span>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            multicluster-runtime Documentation
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base md:text-lg">
            Build Kubernetes controllers that understand fleets of clusters, not just one.
            multicluster-runtime extends controller-runtime with a multi-cluster manager,
            pluggable providers, and familiar reconcile loops.
          </p>

          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <Link
              href={QUICKSTART_PATH}
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              Get started in 10 minutes
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={DOCS_ROOT_PATH}
                className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline dark:text-slate-200"
              >
                Browse all docs
              </Link>

              <a
                href="https://github.com/kubernetes-sigs/multicluster-runtime"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                GitHub repository →
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Provider-based cluster discovery"
            description="Use file, kubeconfig, Cluster API, Cluster Inventory API, or your own provider to discover clusters dynamically."
          />
          <FeatureCard
            title="Familiar reconcile loops"
            description="Keep using controller-runtime patterns while gaining access to a Cluster object, per-cluster caches, and cross-cluster events."
          />
          <FeatureCard
            title="From local dev to production"
            description="Start with kind or file-based providers locally, then move to real cluster inventories without rewriting your controllers."
          />
        </div>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="h-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <h2 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h2>
      <p className="text-xs text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
