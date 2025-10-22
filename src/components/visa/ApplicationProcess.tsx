import { ClipboardCheck, FileText, RefreshCw, Activity, CheckCircle, Headphones } from "lucide-react";

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface ApplicationProcessProps {
  data: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
}

const iconMap: Record<string, any> = {
  clipboardCheck: ClipboardCheck,
  fileText: FileText,
  refreshCw: RefreshCw,
  activity: Activity,
  checkCircle: CheckCircle,
  headphones: Headphones,
};

const ApplicationProcess = ({ data }: ApplicationProcessProps) => {
  const { title, subtitle, steps } = data;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[hsl(var(--golden-foreground))] font-semibold mb-2">{subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={index}
                className="bg-white border-2 border-border rounded-2xl p-6 hover:border-[hsl(var(--golden))] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[hsl(var(--golden))]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[hsl(var(--golden-foreground))]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
