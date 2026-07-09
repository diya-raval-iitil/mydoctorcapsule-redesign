import { memo, type MouseEvent } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import {
  BarChart3,
  Calendar,
  Users,
  Star,
  Eye,
  Bell,
  Lock,
} from 'lucide-react';
import { defaultViewport, motionTransition } from '@/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function DashboardPreviewComponent() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.4 });
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const barVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0.4 },
    visible: (customHeight: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: { ...motionTransition.large, delay: customHeight / 1000 },
    }),
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : { y: [0, -3, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
      }
      className="relative w-full"
    >
      <motion.div
        style={
          prefersReducedMotion ? undefined : { x: parallaxX, y: parallaxY }
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#FFFFFF] text-left shadow-[0_32px_64px_-12px_rgba(3,7,18,0.45)]"
      >
        {/* Perfect Window Header Layout */}
        <div className="flex items-center border-b border-white/5 bg-[#0B1528] px-5 py-3.5">
          {/* Mac window control icons */}
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
            <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
            <span className="h-3 w-3 rounded-full bg-[#10B981]" />
          </div>

          {/* Centered Rounded Search bar container */}
          <div className="mx-auto flex h-7 w-full max-w-sm items-center justify-center gap-2 rounded-md border border-white/5 bg-[#1E293B]/60 px-3 text-[12px] text-white/40">
            <Lock className="h-3 w-3 shrink-0 text-white/30" />
            <span className="font-light tracking-wide text-white/60">
              app.mydoctorcapsule.com
            </span>
          </div>
        </div>

        <div className="flex min-h-[420px]">
          {/* Sidebar Nav Links */}
          <aside className="hidden w-20 shrink-0 flex-col border-r border-[#F1F5F9] bg-[#FFFFFF] p-4 sm:flex md:w-56">
            <nav className="space-y-1">
              {[
                { label: 'Dashboard', icon: BarChart3, active: true },
                { label: 'Appointments', icon: Calendar, active: false },
                { label: 'Patients', icon: Users, active: false },
                { label: 'Reviews', icon: Star, active: false },
                { label: 'Visibility', icon: Eye, active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-medium transition-all ${
                    item.active
                      ? 'bg-[#2563EB] text-white'
                      : 'text-[#94A3B8] hover:bg-[#F8FAFC] hover:text-[#475569]'
                  }`}
                >
                  <item.icon className="h-[18px] w-[18px] shrink-0" />
                  <span className="hidden md:inline">{item.label}</span>
                </div>
              ))}
            </nav>
          </aside>

          {/* Dashboard workspace workspace */}
          <main className="flex-1 bg-[#F8FAFC] p-5 sm:p-6 md:p-8">
            {/* Top Greeting Panel row */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="mb-0.5 text-[12px] font-medium tracking-normal text-[#94A3B8]">
                  Good morning,
                </p>
                <h3 className="text-xl font-bold tracking-tight text-[#1E293B]">
                  Dr. Priya Sharma
                </h3>
              </div>

              {/* Header user action row */}
              <div className="flex items-center gap-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF2F6] text-[#64748B] transition-colors hover:bg-[#E2E8F0]">
                  <Bell className="h-[18px] w-[18px]" />
                </button>
                <div className="h-9 w-9 rounded-full border-2 border-white bg-[#00B4D8] shadow-sm" />
              </div>
            </div>

            {/* Balanced KPI Performance Grid */}
            <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                {
                  label: 'New Patients',
                  value: '24',
                  change: '+18% this month',
                  color: 'text-[#1E293B]',
                  labelColor: 'text-[#94A3B8]',
                },
                {
                  label: 'Appointments',
                  value: '138',
                  change: '+32% this month',
                  color: 'text-[#00B4D8]',
                  labelColor: 'text-[#94A3B8]',
                },
                {
                  label: 'Avg. Rating',
                  value: '4.9',
                  change: '+0.2 this month',
                  color: 'text-[#10B981]',
                  labelColor: 'text-[#94A3B8]',
                },
                {
                  label: 'Profile Views',
                  value: '1,842',
                  change: '+67% this month',
                  color: 'text-[#8B5CF6]',
                  labelColor: 'text-[#94A3B8]',
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="hover:border-primary/20 rounded-[16px] border border-[#E2E8F0] bg-white p-4 text-center transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                >
                  <p
                    className={`text-[11px] font-semibold tracking-wider uppercase ${kpi.labelColor} mb-2`}
                  >
                    {kpi.label}
                  </p>
                  <p
                    className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${kpi.color}`}
                  >
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold text-[#10B981]">
                    {kpi.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Acquisition Metrics Content Card Container */}
            <div className="rounded-[16px] border border-[#E2E8F0] bg-white p-5 md:p-6">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-[14px] font-bold text-[#1E293B]">
                  Patient Acquisition
                </p>
                <span className="rounded-lg bg-[#EFF6FF] px-3 py-1 text-[11px] font-bold text-[#2563EB]">
                  Last 30 days
                </span>
              </div>

              {/* Smoothly Animated bar structure charts */}
              <motion.div
                className="flex h-24 items-end gap-2 px-1 sm:gap-3 md:h-32"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                {[35, 52, 45, 60, 42, 65, 62, 70, 80, 72, 92].map(
                  (val, i, arr) => (
                    <motion.div
                      key={i}
                      custom={val}
                      variants={barVariants}
                      className={`flex-1 rounded-t-md transition-all ${
                        i === arr.length - 1
                          ? 'bg-gradient-to-t from-[#1D4ED8] to-[#00B4D8]'
                          : 'bg-[#E0E7FF]'
                      }`}
                      style={{ height: `${val}%`, originY: 1 }}
                    />
                  ),
                )}
              </motion.div>
            </div>
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const DashboardPreview = memo(DashboardPreviewComponent);
