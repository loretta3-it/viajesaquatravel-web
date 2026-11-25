import PageHeader from '../components/layout/PageHeader';

export default function About() {
  return (
    <main className="min-h-[60vh] bg-slate-50">
      <PageHeader
        title="Nosotros"
        subtitle="Más de 9 años diseñando viajes a la medida desde Zipaquirá hacia Colombia y el mundo."
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Nosotros' },
        ]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-slate-600 text-sm">
          Sección en preparación (Sprint 3: historia de Viajes Aqua Travel, equipo y mapamundi de destinos).
        </div>
      </section>
    </main>
  );
}