"use client";

import data from "@/content/data.json";

export function SchemesTable() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">Flagship Schemes</h2>
          <p className="text-ink/70 max-w-xl text-lg">
            A record of major government initiatives and their impact.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-navy/10 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-navy/5 border-b border-navy/10 text-navy font-mono text-xs uppercase tracking-wider">
                <th className="p-4 font-bold w-1/3">Scheme Name</th>
                <th className="p-4 font-bold">Launch Date</th>
                <th className="p-4 font-bold">Focus Area</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold text-right">Beneficiaries</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/5">
              {data.schemes.map((scheme, i) => (
                <tr 
                  key={scheme.name} 
                  className="hover:bg-saffron/5 transition-colors group"
                >
                  <td className="p-4 font-serif text-lg text-navy font-medium">
                    {scheme.name}
                  </td>
                  <td className="p-4 font-mono text-sm text-ink/70">
                    {scheme.launchDate}
                  </td>
                  <td className="p-4 text-ink/80 text-sm">
                    {scheme.focusArea}
                  </td>
                  <td className="p-4">
                    <span className="inline-block px-2 py-1 rounded bg-navy/5 text-navy text-xs font-mono font-bold tracking-wide">
                      {scheme.category}
                    </span>
                  </td>
                  <td className="p-4 text-right font-serif text-lg text-saffron font-medium">
                    {scheme.beneficiaries}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
