import { Globe, PhoneCall, Brain, Languages, Zap, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Omnichannel',
    desc: 'Voice, phone, and web widget out of the box with a single API.',
  },
  {
    icon: Brain,
    title: 'Realtime AI',
    desc: 'Streaming ASR, reasoning, and TTS for human-like conversations.',
  },
  {
    icon: Languages,
    title: 'Multilingual',
    desc: 'Understand and speak 30+ languages with locale-aware voices.',
  },
  {
    icon: PhoneCall,
    title: 'Instant Calling',
    desc: 'Provision numbers and start placing calls in under 2 minutes.',
  },
  {
    icon: Zap,
    title: 'Latency < 200ms',
    desc: 'Optimized turn-taking and barge-in for natural flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'Role-based access, audit logs, and compliance controls.',
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Built for performance and scale</h2>
          <p className="mt-3 text-slate-600">Everything you need to launch reliable AI voice agents into your business.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 border border-slate-200/70 bg-white/70 backdrop-blur hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
