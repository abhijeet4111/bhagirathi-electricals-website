import { stats } from '../../utils/data';

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-200">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            From small businesses to large industrial complexes, we have successfully delivered 
            control panel solutions across various sectors including manufacturing, healthcare, 
            infrastructure, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
