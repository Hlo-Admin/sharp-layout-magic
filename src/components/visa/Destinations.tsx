import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";

interface BlogCard {
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

interface DestinationsProps {
  data: {
    title: string;
    subtitle: string;
    destinations: BlogCard[];
  };
}

const Destinations = ({ data }: DestinationsProps) => {
  const { title, subtitle, destinations } = data;

  return (
    <section className="py-20 px-4 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium text-[#3B82F6] uppercase tracking-wider mb-2">
              RECENT BLOGS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h2>
            {/* <p className="text-muted-foreground text-lg mt-2">{subtitle}</p> */}
          </div>
          <div className="flex items-center gap-3">
            <button className="w-12 h-12 bg-[#FEF3C7] rounded-full flex items-center justify-center hover:bg-[#FDE68A] transition-colors">
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button className="w-12 h-12 bg-[#FCD34D] rounded-full flex items-center justify-center hover:bg-[#F59E0B] transition-colors">
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>& By {blog.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3790ad] mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#3790ad] font-medium hover:text-[#059669] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
