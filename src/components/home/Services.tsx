import Link from 'next/link'

// Requires @heroicons/react package
import {
  CogIcon,
  ArrowPathIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Automation Strategies',
    description: 'Streamline your workflow with custom automation solutions that reduce manual intervention and increase throughput.',
    icon: CogIcon,
    href: '/services/automation-strategies'
  },
  {
    title: 'System Integration',
    description: 'Seamlessly connect your hardware and software systems for optimal efficiency and real-time monitoring.',
    icon: ArrowPathIcon,
    href: '/services/system-integration'
  },
  {
    title: 'Production Scaling',
    description: 'Scale your print farm operations effectively while maintaining quality and reducing operational complexity.',
    icon: ChartBarIcon,
    href: '/services'
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Expert Services for Print Farm Optimization
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your 3D printing operations with proven solutions that drive efficiency and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md
                  transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-blue-100
                    flex items-center justify-center group-hover:bg-blue-600
                    transition-colors duration-300"
                  >
                    <Icon
                      className="w-8 h-8 text-blue-600 group-hover:text-white
                        transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600">
                    {service.description}
                  </p>

                  <span className="mt-4 text-blue-600 font-semibold
                    group-hover:text-blue-800 transition-colors duration-300"
                  >
                    Learn More →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
