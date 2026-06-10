const stats = [
  { value: "300+", label: "Edge locations worldwide" },
  { value: "<50ms", label: "Median global response time" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "10M+", label: "Requests served daily" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-10 text-center sm:px-6">
            <div className="text-3xl font-semibold text-foreground sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
