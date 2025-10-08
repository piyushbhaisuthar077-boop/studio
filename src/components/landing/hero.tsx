import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative py-24 md:py-40">
       <div 
        aria-hidden="true" 
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
            <div className="blur-[106px] h-32 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-56 bg-gradient-to-r from-cyan-400 to-accent dark:to-indigo-600"></div>
        </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 max-w-4xl mx-auto leading-tight">
          Effortless Accounting and Tax Solutions for Your Growing Business.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We handle your complex financial compliance, so you can focus on what you do best.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <a href="#services">Explore Our Services</a>
          </Button>
          <Button asChild variant="outline" size="lg">
             <a href="#contact">Get a Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
