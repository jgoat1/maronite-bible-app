export default function MaroniteBibleWebsiteStarter() {
  const features = [
    {
      title: "Daily Scripture",
      desc: "Get a daily Bible quote, either randomised or selected by topic like hope, anxiety, repentance, discipline, and prayer.",
      icon: "✝️",
    },
    {
      title: "Goals & Habit Tracking",
      desc: "Set spiritual goals, track streaks, and reflect on progress as you work on prayer, fasting, discipline, and quitting bad habits.",
      icon: "🎯",
    },
    {
      title: "Repentance Journey",
      desc: "Learn practical steps for repentance, confession preparation, accountability, and replacing unhealthy habits with better routines.",
      icon: "🕊️",
    },
    {
      title: "Bible Chat",
      desc: "Ask questions about Scripture, prayer, repentance, church life, temptation, and day-to-day struggles in a supportive way.",
      icon: "💬",
    },
    {
      title: "Audio Bible",
      desc: "Listen to Scripture and save chapters for later, with a clean player built for daily use.",
      icon: "🎧",
    },
    {
      title: "Read & Remember",
      desc: "Read Scripture, save verses, revisit reflections, and build a personal faith journal over time.",
      icon: "📖",
    },
  ];

  const sampleQuotes = [
    "The Lord is my light and my salvation; whom shall I fear?",
    "Create in me a clean heart, O God, and renew a right spirit within me.",
    "Come to me, all who labor and are heavy laden, and I will give you rest.",
  ];

  const habits = [
    "Morning prayer",
    "Read one chapter",
    "No swearing today",
    "No porn today",
    "Evening reflection",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-900">
                Maronite Christian Bible & Growth Platform
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Build a faith-focused website people actually come back to daily.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                A clean home for daily Scripture, habit tracking, repentance support, Bible chat,
                and audio listening — all in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]">
                  Start Reading
                </button>
                <button className="rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100">
                  View Daily Quote
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-100 p-5 shadow-sm">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Today’s Scripture</h2>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900">
                    Daily verse
                  </span>
                </div>
                <p className="text-xl leading-8 text-stone-800">
                  “Create in me a clean heart, O God, and renew a right spirit within me.”
                </p>
                <p className="mt-2 text-sm text-stone-500">Psalm 51:10</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button className="rounded-2xl bg-stone-900 px-4 py-3 text-sm font-medium text-white">
                    Randomise quote
                  </button>
                  <button className="rounded-2xl border border-stone-300 px-4 py-3 text-sm font-medium text-stone-700">
                    Ask by topic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Core features</p>
            <h2 className="mt-2 text-3xl font-bold">What your first version should include</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Topic-based quotes</h3>
            <p className="mt-2 text-stone-600">Search by need or mood.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Hope', 'Anxiety', 'Temptation', 'Repentance', 'Discipline', 'Prayer'].map((tag) => (
                <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Saved verses</h3>
            <div className="mt-4 space-y-3 text-stone-700">
              {sampleQuotes.map((q) => (
                <div key={q} className="rounded-2xl bg-stone-100 p-3 text-sm leading-6">
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Spiritual goals</h3>
            <div className="mt-4 space-y-3">
              {habits.map((habit, i) => (
                <label key={habit} className="flex items-center gap-3 rounded-2xl bg-stone-100 p-3 text-sm">
                  <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4" />
                  <span>{habit}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Repentance journey</h3>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                Guided path
              </span>
            </div>
            <div className="mt-5 space-y-4 text-stone-700">
              <div className="rounded-2xl bg-stone-100 p-4">
                <strong>1. Name the struggle</strong>
                <p className="mt-1 text-sm text-stone-600">Be honest about the habit or pattern you want to leave behind.</p>
              </div>
              <div className="rounded-2xl bg-stone-100 p-4">
                <strong>2. Replace, don’t just remove</strong>
                <p className="mt-1 text-sm text-stone-600">Swap bad routines with prayer, exercise, journaling, or Scripture reading.</p>
              </div>
              <div className="rounded-2xl bg-stone-100 p-4">
                <strong>3. Track daily progress</strong>
                <p className="mt-1 text-sm text-stone-600">Build consistency and reflect after setbacks without giving up.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Bible chat</h3>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800">
                Future AI feature
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-stone-100 p-4 text-sm text-stone-700">
                <strong>User:</strong> I keep falling back into the same sin. Where do I start?
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 text-sm text-stone-800">
                <strong>Guide:</strong> Start with honesty, prayer, accountability, and one practical change today. Focus on progress, not perfection.
              </div>
              <div className="rounded-2xl border border-dashed border-stone-300 p-4 text-sm text-stone-500">
                Later, this can connect to a real AI backend.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>Maronite Bible Website starter concept</p>
          <p>Start simple: Scripture + goals + reading + audio + guidance</p>
        </div>
      </footer>
    </div>
  );
}
