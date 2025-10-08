import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FileText,
  Landmark,
  FileCog,
  Rocket,
  Calculator,
} from "lucide-react";
import type { ReactNode } from "react";

const servicesList: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <FileText className="w-8 h-8 text-accent" />,
    title: "GST Registration & Filing",
    description: "Streamline your Goods and Services Tax compliance with our expert assistance.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-accent" />,
    title: "Income Tax Return (ITR) Filing",
    description: "Maximize your returns and ensure compliance with our professional ITR filing services.",
  },
  {
    icon: <FileCog className="w-8 h-8 text-accent" />,
    title: "TDS & TCS Compliance",
    description: "Stay compliant with accurate and timely filing of TDS and TCS returns.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-accent" />,
    title: "New Business Registration",
    description: "Get your new venture off to a great start with our hassle-free registration services.",
  },
  {
    icon: <Calculator className="w-8 h-8 text-accent" />,
    title: "Accounting & Bookkeeping",
    description: "Maintain meticulous financial records to support your business decisions and growth.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">
            Our Comprehensive Range of Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a complete suite of financial services to meet all your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card key={index} className="flex flex-col text-center p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
