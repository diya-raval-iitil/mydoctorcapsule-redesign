import { memo } from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, MessageCircle } from 'lucide-react';

function PhoneMockupComponent() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* Floating notifications */}
      <motion.div
        className="absolute -left-8 top-16 z-10 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <Calendar className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">New appointment</p>
            <p className="text-[10px] text-white/60">Dr. Mitchell + 2:30 PM</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-40 z-10 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30">
            <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">New message</p>
            <p className="text-[10px] text-white/60">Patient inquiry</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-4 bottom-32 z-10 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
            <Bell className="h-4 w-4 text-amber-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Lab results ready</p>
            <p className="text-[10px] text-white/60">3 new reports</p>
          </div>
        </div>
      </motion.div>

      {/* Phone frame */}
      <motion.div
        className="relative rounded-[40px] border-4 border-white/20 bg-navy p-3 shadow-2xl shadow-black/40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="overflow-hidden rounded-[32px] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-navy px-6 py-3">
            <span className="text-xs font-medium text-white">9:41</span>
            <div className="h-5 w-20 rounded-full bg-black" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <div className="h-2 w-2 rounded-full bg-white/60" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Good morning</p>
                <p className="text-sm font-bold text-text">Dr. Mitchell</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                SM
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2">
              {[
                { label: 'Patients', value: '24' },
                { label: 'Appointments', value: '8' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-[10px] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mb-2 text-xs font-semibold text-text">Upcoming</p>
            <div className="space-y-2">
              {['09:00 - Annual check-up', '11:30 - Lab review', '14:00 - Consultation'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-white p-2.5 text-[10px] font-medium text-text shadow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export const PhoneMockup = memo(PhoneMockupComponent);
