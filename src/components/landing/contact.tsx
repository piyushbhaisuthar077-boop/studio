"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits.")
    .regex(/^\+?[0-9\s-()]+$/, "Please enter a valid mobile number."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: "Email",
      value: "karmatax.in@gmail.com",
      href: "mailto:karmatax.in@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      label: "Phone",
      value: "+91 9104253142",
      href: "tel:+919104253142",
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      label: "Address",
      value: "F-29, Shree Plaza, B/H Petrol Pump, Deodar, Gujarat - 385330",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center text-primary">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 bg-card p-8 rounded-lg shadow-lg">
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Mobile Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </Form>
          </div>
          <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-headline font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-6">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
