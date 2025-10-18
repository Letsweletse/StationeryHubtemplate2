import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SH</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">StationeryHub</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Born in Botswana, built for businesses. We're passionate about equipping offices with quality supplies that just work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Started</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              After years of struggling to find reliable office supplies locally, we decided to build the solution ourselves. 
              No more waiting weeks for cartridges. No more compromising on quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're not just another supplier - we're your partners in keeping Botswana's businesses running smoothly. 
              From small startups to government offices, we've got you covered.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Our team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            "Quality products, reliable delivery, and prices that make sense for Botswana's businesses. 
            We're here to make your work life easier, one supply at a time."
          </p>
        </div>
      </div>
    </div>
  );
}
