import Breadcrumb from '../ui/Breadcrumb';

export default function PageHeader({ title, subtitle, breadcrumbItems = [] }) {
  return (
    <section className="bg-slate-950 text-white py-12 md:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbItems.length > 0 && (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}