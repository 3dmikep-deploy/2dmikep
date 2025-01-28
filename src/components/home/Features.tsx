import {
  ClockIcon,
  ChipIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Reduced Bottlenecks',
    description: 'Identify and eliminate production bottlenecks through smart automation and workflow optimization.',
    icon: ClockIcon,
    stats: 'Up to 40% reduction in production delays'
  },
  {
    title: 'Smarter Systems',
    description: 'Implement intelligent monitoring and control systems that make data-driven decisions.',
    icon: ChipIcon,
    stats: '24/7 automated operation capability'
  },
  {
    title: 'Cost-Effective Scaling',
    description: 'Scale your print farm operations without proportionally increasing operational costs.',
    icon: ArrowTrendingUpIcon,
    stats: '2-3x production capacity increase'
  }
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Core Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your 3D printing operations with proven solutions that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative group"
              >
                <div className="h-full bg-white rounded-xl p-8 shadow-sm
                  hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br
                      from-blue-500 to-blue-600 flex items-center justify-center
                      transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>

                    <div className="mt-auto">
                      <div className="inline-block px-4 py-2 bg-blue-50
                        rounded-full text-blue-600 font-semibold text-sm
                        group-hover:bg-blue-100 transition-colors duration-300"
                      >
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
