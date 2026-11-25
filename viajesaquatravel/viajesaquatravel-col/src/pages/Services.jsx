import PageHeader from '../components/layout/PageHeader';

export default function Services() {
  return (
    <main className="min-h-[60vh] bg-slate-50">
      <PageHeader
        title="Servicios Adicionales"
        subtitle="Asesoría de visas, asistencia médica internacional y conectividad global para viajar con total tranquilidad."
        breadcrumbItems={[
          { label: 'Inicio', path: '/' },
          { label: 'Servicios' },
        ]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-slate-600 text-sm">
          Sección en preparación (Sprint 3: tarjetas dinámicas de Visas, Asistencia Integral al Viajero y SIM Card Internacional).
        </div>
      </section>
    </main>
  );
}