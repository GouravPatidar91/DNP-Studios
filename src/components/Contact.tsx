'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Calendar as CalendarIcon, Check, Clock, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/r/eventedit?text=DNP%20Studios%20Meeting&details=Tell%20us%20about%20your%20project%20and%20we%27ll%20prepare%20ideas%20for%20our%20call.&location=Google%20Meet'
const CONTACT_EMAIL = 'dnpstudio.arts@gmail.com'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  function onSubmit(values: ContactFormValues) {
    setSubmitStatus('loading')
    const subject = encodeURIComponent(`DNP Studios – Message from ${values.name}`)
    const body = encodeURIComponent(
      `${values.message}\n\n---\nFrom: ${values.name}\nEmail: ${values.email}`
    )
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    try {
      window.location.href = mailto
      form.reset()
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Book a Discovery Call
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 id="contact-heading" className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 px-1 sm:px-0">
            <span className="block mb-2">Ready to Light Up the Screen?</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Book a discovery call to discuss your project and see how we can bring your vision to cinematic reality.
          </p>
        </div>

        {/* Booking Panel */}
        <div className="max-w-5xl w-full min-w-0 mx-auto overflow-hidden">
          <div className="bg-card clean-border rounded-3xl overflow-hidden subtle-shadow">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-5 sm:p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/60">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-5">
                  <div>
                    <h3 className="text-xl font-black text-foreground">DNP Discovery Call</h3>
                    <p className="text-sm text-muted-foreground">30 min meeting • Google Meet</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground -mt-1">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    Project discovery + goals
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    Creative direction + timeline
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    Budget + production plan
                  </div>
                </div>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity touch-manipulation w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <CalendarIcon className="w-5 h-5" aria-hidden />
                    Book a Meeting
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-xl clean-border hover:bg-card transition-colors touch-manipulation w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <Mail className="w-5 h-5" aria-hidden />
                    Send Us a Message
                  </a>
                </div>
              </div>

              <div className="flex-1 p-5 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center lg:justify-end">
                <div className="mirror-card bg-background/90 clean-border glass-surface rounded-2xl p-6 sm:p-8 w-full max-w-[320px] shrink-0 text-center">
                  <Clock className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
                  <h4 className="text-lg font-black text-foreground mb-2">Pick a time that works</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    Mon–Fri, 10am–6pm IST (GMT+5:30). We’ll confirm your slot by email.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity w-full"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    Open Google Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick message form – industry-standard validation and states */}
          <div className="mt-10 sm:mt-12">
            <div className="mirror-card bg-card clean-border glass-surface rounded-2xl p-5 sm:p-6 md:p-8 subtle-shadow">
              <h3 className="text-lg font-black text-foreground mb-1">Quick message</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill in the form and we’ll open your email client to send it.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="contact-name">Name</FormLabel>
                        <FormControl>
                          <Input id="contact-name" placeholder="Your name" autoComplete="name" {...field} disabled={submitStatus === 'loading'} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="contact-email">Email</FormLabel>
                        <FormControl>
                          <Input id="contact-email" type="email" placeholder="you@example.com" autoComplete="email" {...field} disabled={submitStatus === 'loading'} />
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
                        <FormLabel htmlFor="contact-message">Message</FormLabel>
                        <FormControl>
                          <Textarea id="contact-message" placeholder="Tell us about your project..." rows={4} autoComplete="off" {...field} disabled={submitStatus === 'loading'} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" disabled={submitStatus === 'loading'} className="min-w-[120px]">
                      {submitStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                          Sending…
                        </>
                      ) : (
                        'Send message'
                      )}
                    </Button>
                    {submitStatus === 'success' && (
                      <span className="text-sm text-accent-emerald font-medium" role="status">
                        Check your email client to send.
                      </span>
                    )}
                    {submitStatus === 'error' && (
                      <span className="text-sm text-destructive font-medium" role="alert">
                        Something went wrong. Try the “Send Us a Message” link above.
                      </span>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 pb-8">
            {[
              {
                title: 'Project Discovery',
                text: 'Share your goals, audience, and timeline to shape the direction.'
              },
              {
                title: 'Creative Strategy',
                text: 'We align style, story, and deliverables to maximize impact.'
              },
              {
                title: 'Next Steps',
                text: 'Receive a clear plan, scope, and production roadmap.'
              }
            ].map((item) => (
              <div key={item.title} className="mirror-card bg-card clean-border glass-surface rounded-2xl p-4 sm:p-6 subtle-shadow">
                <h4 className="text-lg font-black text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
