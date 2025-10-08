import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">About KARMA ACCOUNTS</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are a modern, tech-savvy consultancy firm dedicated to providing accurate, timely, and transparent financial services. Our team of qualified experts is here to help you navigate the complexities of taxation and grow your business.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <Card className="overflow-hidden shadow-lg rounded-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
