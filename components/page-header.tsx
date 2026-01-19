interface PageHeaderProps {
  title: string
  description?: string
  badge?: string
  backgroundImage?: string
  overlayColor?: "dark" | "blue" | "green"
}

export function PageHeader({ 
  title, 
  description, 
  badge, 
  backgroundImage,
  overlayColor = "dark" 
}: PageHeaderProps) {
  const overlayStyles = {
    dark: "from-ecosur-dark/90 via-ecosur-dark/80 to-ecosur-dark/90",
    blue: "from-ecosur-blue/90 via-ecosur-blue/80 to-ecosur-blue/90",
    green: "from-ecosur-dark/90 via-ecosur-dark/70 to-ecosur-green/30"
  }

  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-20">
      {/* Background Image */}
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayStyles[overlayColor]}`} />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-ecosur-dark" />
          {/* Fallback Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-ecosur-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ecosur-blue/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-ecosur-green">{badge}</span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance max-w-4xl drop-shadow-lg">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
