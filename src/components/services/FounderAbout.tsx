export default function FounderSection() {
  return (
    <div className="w-full bg-[#E1EFF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side - Image and Name */}
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:w-1/4">
              <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/aboutus/founder.jpg"
                  alt="Zaid Ameen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold tracking-wider text-black">
                  ZAID AMEEN
                </h2>
                <p className="text-sm mt-1 text-gray-600">
                  Founder & Group Entrepreneur
                </p>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 lg:w-3/4 space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-black">
                Our Founder
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                Zaid Ameen built the Go Kite brand on a simple operating thesis:
                pair empathy with execution and remove friction from people's
                journeys. From a single office in 2008 to a regional brand
                today, that philosophy scaled through people-first service and
                technology-enabled operations. Go Kite PRO is the next chapter
                of that same playbook—removing friction from business journeys
                with regulatory precision, trusted partnerships, and measurable
                speed-to-license.
              </p>

              {/* Signature */}
              <div className="flex justify-end pt-8">
                <div className="text-3xl font-['Brush_Script_MT',_cursive] italic text-black">
                  Zaid Ameen
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
