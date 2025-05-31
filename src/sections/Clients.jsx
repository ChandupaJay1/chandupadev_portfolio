import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent
       to-blue-900/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20
      to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20
      to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Modern header with enhanced typography */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="head-text bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text
            text-transparent mb-4 relative">
              What Clients Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r
              from-purple-500 to-blue-500 rounded-full" />
            </h2>
          </div>
          <p className="text-white-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the experiences of those who've worked with me
          </p>
        </div>

        {/* Modern grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {clientReviews.map(({ id, img, name, position, review }, index) => (
            <div
              key={`review-${id}`}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Card with glassmorphism effect */}
              <div className="relative bg-black-200/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8
              h-full transition-all duration-500 hover:scale-[1.02] hover:bg-black-200/60 hover:border-white/20
              hover:shadow-2xl hover:shadow-purple-500/10">

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995
                    3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996
                    2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Review text with enhanced styling */}
                  <div className="flex-1 mb-8">
                    <p className="text-white-800 font-light text-base leading-relaxed group-hover:text-white-700
                    transition-colors duration-300">
                      "{review}"
                    </p>
                  </div>

                  {/* Client info with modern layout */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Enhanced profile image */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500
                        rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                        <img
                          src={img}
                          alt={`${name} - Client`}
                          className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20
                          group-hover:border-white/40 transition-all duration-300"
                        />
                      </div>

                      {/* Client details */}
                      <div>
                        <h4 className="font-semibold text-white-800 text-lg group-hover:text-white-700
                        transition-colors duration-300">
                          {name}
                        </h4>
                        <p className="text-white-500 text-sm font-medium opacity-80 group-hover:opacity-100
                        transition-opacity duration-300">
                          {position}
                        </p>
                      </div>
                    </div>

                    {/* Modern star rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <div
                          key={starIndex}
                          className="relative transition-transform duration-300 hover:scale-110"
                          style={{
                            animationDelay: `${starIndex * 100}ms`
                          }}
                        >
                          <svg
                            className="w-5 h-5 text-yellow-400 drop-shadow-sm group-hover:text-yellow-300
                            transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7
                            14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent
                to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent)',
                       animation: 'shimmer 3s infinite'
                     }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-white-600 hover:text-white-500
          transition-colors duration-300 cursor-pointer group">
            <span className="text-sm font-medium">Want to share your experience?</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .group:hover .animate-pulse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;