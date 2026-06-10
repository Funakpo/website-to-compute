import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        This page could not be found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
