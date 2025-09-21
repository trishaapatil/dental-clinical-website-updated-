"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function SamruddhiDentalClinic() {
  const [greeting, setGreeting] = useState("Gentle, prevention-first dentistry.")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [rating, setRating] = useState(0)
  const [selectedService, setSelectedService] = useState("")
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<any>(null)

  const testimonials = [
    {
      quote: "The staff are friendly and professional. I felt very comfortable throughout my treatment.",
      author: "Anjali S.",
    },
    { quote: "Whitening results were fantastic and natural. Highly recommend!", author: "Rohan K." },
    { quote: "Caring orthodontic care—my braces journey was smooth and effective.", author: "Priya M." },
  ]

  const services = [
    {
      name: "Dental Checkup",
      price: "₹300–₹600",
      icon: "🦷",
      description: "Detect, prevent, and plan care early.",
      details: {
        procedure:
          "Comprehensive oral examination including visual inspection, digital X-rays if needed, and professional cleaning.",
        duration: "30-45 minutes",
        benefits: [
          "Early detection of dental issues",
          "Professional cleaning",
          "Personalized oral health plan",
          "Prevention of costly treatments",
        ],
        aftercare: "Continue regular brushing and flossing. Schedule next checkup in 6 months.",
      },
    },
    {
      name: "Teeth Whitening",
      price: "₹6,000–₹12,000",
      icon: "✨",
      description: "In-clinic and take-home kits.",
      details: {
        procedure:
          "Professional whitening using safe bleaching agents. Available as in-clinic treatment or take-home kits.",
        duration: "In-clinic: 60-90 minutes, Take-home: 2-3 weeks",
        benefits: [
          "Removes stains from coffee, tea, smoking",
          "Safe and effective whitening",
          "Boosts confidence",
          "Long-lasting results",
        ],
        aftercare: "Avoid staining foods for 48 hours. Use whitening toothpaste to maintain results.",
      },
    },
    {
      name: "Orthodontics",
      price: "₹30,000–₹70,000",
      icon: "😁",
      description: "Braces & clear aligners.",
      details: {
        procedure: "Straightening teeth using metal braces, ceramic braces, or clear aligners based on your needs.",
        duration: "12-24 months depending on complexity",
        benefits: [
          "Straight, aligned teeth",
          "Improved bite function",
          "Better oral hygiene",
          "Enhanced facial aesthetics",
        ],
        aftercare: "Regular adjustments every 4-6 weeks. Wear retainers after treatment completion.",
      },
    },
    {
      name: "Dental Implants",
      price: "₹25,000–₹55,000",
      icon: "🛠️",
      description: "Secure replacement of missing teeth.",
      details: {
        procedure: "Surgical placement of titanium implant in jawbone, followed by crown placement after healing.",
        duration: "3-6 months total (including healing time)",
        benefits: [
          "Permanent tooth replacement",
          "Natural look and feel",
          "Preserves jawbone",
          "No damage to adjacent teeth",
        ],
        aftercare: "Maintain excellent oral hygiene. Regular checkups to monitor implant health.",
      },
    },
    {
      name: "Root Canal",
      price: "₹3,000–₹8,000",
      icon: "🦷",
      description: "Pain-managed endodontic care.",
      details: {
        procedure: "Removal of infected pulp, cleaning and sealing of root canals to save the natural tooth.",
        duration: "1-3 appointments, 60-90 minutes each",
        benefits: [
          "Saves natural tooth",
          "Eliminates pain and infection",
          "Prevents spread of infection",
          "Cost-effective vs extraction",
        ],
        aftercare: "Crown placement recommended. Avoid hard foods until permanent restoration.",
      },
    },
  ]

  const priceMap: Record<string, string> = {
    "Dental Checkup": "₹300–₹600",
    "Teeth Whitening": "₹8,000–₹12,000 (in‑clinic) / ₹6,000–₹9,000 (home)",
    Orthodontics: "₹30,000–₹70,000 (braces) / ₹80,000–₹2,00,000 (aligners)",
    "Dental Implants": "₹25,000–₹55,000 (incl. crown; grafts extra)",
    "Root Canal": "₹3,000–₹8,000 per tooth",
    "Scaling & Polishing": "₹1,000–₹2,500",
    Extraction: "₹1,000–₹5,000",
    "Crown (PFM/Zirconia)": "₹4,000–₹12,000",
    "Child Dentistry": "₹800–₹2,500",
    "X-ray": "₹300",
  }

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()
      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning — Gentle, prevention-first dentistry.")
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon — Gentle, prevention-first dentistry.")
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good Evening — Gentle, prevention-first dentistry.")
      } else {
        setGreeting("Gentle, prevention-first dentistry.")
      }
    }
    updateGreeting()

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  const handleEmergencyCall = () => {
    console.log("[v0] Emergency call initiated")
    // For mobile devices, this will open the phone dialer
    window.location.href = "tel:+919511936441"
  }

  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const priceLine = priceMap[data.service as string] ? ` (Est.: ${priceMap[data.service as string]})` : ""
    alert(`Thanks, ${data.name}! We'll contact you at ${data.phone} / ${data.email}. ${priceLine}`)
    e.currentTarget.reset()
    setSelectedService("")
  }

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    alert(`Thanks, ${data.name}! We've received your inquiry: "${data.subject}". We'll reply to ${data.email}.`)
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-foreground text-primary rounded-xl flex items-center justify-center text-2xl font-bold">
                🦷
              </div>
              <div>
                <h1 className="text-xl font-bold text-balance">Samruddhi Dental Clinic</h1>
                <p className="text-sm opacity-90">{greeting}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="#services">Services</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#prices">Prices</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">Doctor</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Appointment</a>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleEmergencyCall}
                className="animate-pulse hover:animate-none"
              >
                🚑 Emergency
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-6 text-foreground">
                Periodontology & Oral Implantology
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Compassionate care • Clear pricing • Same-day emergency slots
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Button size="lg" asChild>
                  <a href="#contact">Book Appointment</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#prices">₹ View Prices</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-green-50 hover:bg-green-100 border-green-500 text-green-700 font-semibold"
                  asChild
                >
                  <a href="tel:+919511936441">📞 Call Now</a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" size="lg" asChild>
                  <a href="https://wa.me/919511936441" target="_blank" rel="noreferrer noopener">
                    💬 WhatsApp
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Badge variant="secondary" className="p-3 justify-center">
                  🛡️ ISO-standard sterilization
                </Badge>
                <Badge variant="secondary" className="p-3 justify-center">
                  🏆 Digital X-rays & records
                </Badge>
                <Badge variant="secondary" className="p-3 justify-center">
                  👥 Accessible: Lift & Parking
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-dental-clinic-team-with-modern-equipm.jpg"
                alt="Friendly dental team"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">🕐 Clinic Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Mon–Sat: 10:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sun: By Appointment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">📞 Call</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+919511936441" className="text-sm font-medium hover:text-accent">
                  +91 95119 36441
                </a>
                <p className="text-sm text-muted-foreground">Same-day emergency slots</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">📍 Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Vasai, Maharashtra</p>
                <p className="text-sm text-muted-foreground">Easy parking • Lift access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">Evidence-based dental care for all ages.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-all duration-300 relative cursor-pointer hover:scale-105">
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                      from {service.price.split("–")[0]}
                    </Badge>
                    <CardHeader>
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <p className="text-xs text-accent mt-2 font-medium">Click for details →</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                      {service.icon} {service.name}
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      Price Range: <span className="font-semibold text-accent">{service.price}</span>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Procedure</h4>
                      <p className="text-sm text-muted-foreground">{service.details.procedure}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Duration</h4>
                      <p className="text-sm text-muted-foreground">{service.details.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.details.benefits.map((benefit: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Aftercare</h4>
                      <p className="text-sm text-muted-foreground">{service.details.aftercare}</p>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button asChild>
                        <a href="#contact">Book Appointment</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="tel:+919511936441">📞 Call Now</a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Section */}
      <section id="prices" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Treatment Prices (INR)</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Transparent, indicative pricing. Final estimates are shared after a clinical exam.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dental Checkup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultation</span>
                    <span className="font-bold">₹300–₹600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Scaling & Polishing</span>
                    <span className="font-bold">₹1,000–₹2,500</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Includes oral exam; cleaning if opted.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Teeth Whitening</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">In-clinic</span>
                    <span className="font-bold">₹8,000–₹12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Take-home kit</span>
                    <span className="font-bold">₹6,000–₹9,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Shade change varies by enamel & habits.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Orthodontics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Metal/Ceramic Braces</span>
                    <span className="font-bold">₹30,000–₹70,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Clear Aligners</span>
                    <span className="font-bold">₹80,000–₹2,00,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Includes periodic reviews; excludes retainers.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Root Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Anterior/Posterior</span>
                    <span className="font-bold">₹3,000–₹8,000 / tooth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Post & Core (if needed)</span>
                    <span className="font-bold">₹2,000–₹4,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Crown recommended after RCT (see below).</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dental Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Implant + Crown</span>
                    <span className="font-bold">₹25,000–₹55,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bone Graft (if needed)</span>
                    <span className="font-bold">₹5,000–₹15,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Price varies by brand, site & grafting.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Crowns & Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">PFM Crown</span>
                    <span className="font-bold">₹4,000–₹7,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Zirconia Crown</span>
                    <span className="font-bold">₹8,000–₹12,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Warranty varies by material.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Extractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Simple Extraction</span>
                    <span className="font-bold">₹1,000–₹2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Surgical / Wisdom</span>
                    <span className="font-bold">₹3,000–₹5,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Includes local anesthesia.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Child Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fluoride / Sealants</span>
                    <span className="font-bold">₹800–₹2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fillings (Tooth-col.)</span>
                    <span className="font-bold">₹1,000–₹2,500</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Behaviour management included.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Intra-oral X-ray</span>
                    <span className="font-bold">₹300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">OPG (referred)</span>
                    <span className="font-bold">₹600–₹1,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">OPG via partner centre.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-dashed border-2 border-accent">
            <CardContent className="p-6">
              <p className="font-semibold mb-4">
                <strong>Note:</strong> Prices are indicative and may vary with case complexity, materials, and lab work.
                You'll receive a written estimate after your clinical examination.
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <a href="#inquiry">Get Exact Estimate</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">Book Checkup</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insurance & Payment Options */}
      <section id="insurance" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Insurance & Payment Options</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            We support multiple payment methods and can provide detailed receipts for insurance reimbursement.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">💳</div>
                <p className="font-semibold">Credit/Debit Cards</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">📱</div>
                <p className="font-semibold">UPI (GPay/PhonePe/Paytm)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">🏦</div>
                <p className="font-semibold">Net Banking</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">📄</div>
                <p className="font-semibold">Insurance Receipts</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground">
            Need a pre-treatment estimate for your insurer?{" "}
            <a href="#inquiry" className="text-accent hover:underline">
              Send an inquiry
            </a>
            .
          </p>
        </div>
      </section>

      {/* About Doctor */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Your Doctor</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dr. Samruddhi Patil Chaudhari</CardTitle>
                <CardDescription className="text-base">
                  <strong>B.D.S., M.D.S.</strong> — <em>Periodontology & Oral Implantology</em>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>BDS</strong>, Sinhagad Dental College & Hospital, Pune (2019)
                  </li>
                  <li>
                    <strong>MDS</strong>, SMBT Dental College & Hospital, Sangamner (2023)
                  </li>
                  <li>Clinical research, publications & community outreach</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Gentle, transparent, and prevention-first dentistry.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Why Patients Choose Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li>Modern sterilization & digital records</li>
                  <li>Pain-managed treatment plans</li>
                  <li>Flexible appointment slots</li>
                  <li>Clear pricing & informed consent</li>
                </ul>
                <div className="flex gap-3">
                  <Button asChild>
                    <a href="#contact">Book Now</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#prices">See Prices</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Book an Appointment</h2>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 9511936441" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="service">Select Service</Label>
                  <Select name="service" value={selectedService} onValueChange={setSelectedService} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dental Checkup">Dental Checkup</SelectItem>
                      <SelectItem value="Teeth Whitening">Teeth Whitening</SelectItem>
                      <SelectItem value="Orthodontics">Orthodontics</SelectItem>
                      <SelectItem value="Dental Implants">Dental Implants</SelectItem>
                      <SelectItem value="Root Canal">Root Canal</SelectItem>
                      <SelectItem value="Scaling & Polishing">Scaling & Polishing</SelectItem>
                      <SelectItem value="Extraction">Extraction</SelectItem>
                      <SelectItem value="Crown (PFM/Zirconia)">Crown (PFM/Zirconia)</SelectItem>
                      <SelectItem value="Child Dentistry">Child Dentistry</SelectItem>
                      <SelectItem value="X-ray">X‑ray</SelectItem>
                    </SelectContent>
                  </Select>
                  {selectedService && priceMap[selectedService] && (
                    <p className="text-sm text-accent font-medium mt-2">Typical cost: {priceMap[selectedService]}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea id="message" name="message" placeholder="Any notes or concerns?" rows={4} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  📅 Submit Appointment Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Patients Say</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <p className="text-lg italic text-muted-foreground mb-4">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="font-semibold">— {testimonials[currentTestimonial].author}</p>
                </div>
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                    }
                  >
                    ←
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  >
                    →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rate your visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button key={star} variant="ghost" size="sm" className="p-1" onClick={() => setRating(star)}>
                      <span className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>⭐</span>
                    </Button>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Input placeholder="Your name (optional)" />
                  <Input placeholder="Phone (optional)" />
                </div>
                <Textarea placeholder="Share your feedback..." className="mb-4" />
                <Button className="w-full">⭐ Submit Review</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Common questions about dental treatments and our clinic.
          </p>
          <div className="space-y-4">
            {[
              {
                question: "Does teeth cleaning hurt?",
                answer:
                  "Professional cleaning is generally comfortable. You may feel slight pressure or vibration from our ultrasonic scalers. If you have sensitive teeth, we can apply topical numbing gel. Most patients find it painless and refreshing.",
              },
              {
                question: "How often should I visit the dentist?",
                answer:
                  "We recommend checkups every 6 months for most patients. Those with gum disease, diabetes, or other risk factors may need more frequent visits (every 3-4 months). Regular visits help catch problems early when they're easier and less expensive to treat.",
              },
              {
                question: "What's the difference between a filling and a crown?",
                answer:
                  "Fillings repair small to medium cavities using tooth-colored composite or amalgam. Crowns are caps that cover the entire tooth when damage is extensive (after root canal, large fractures, or severe decay). Crowns provide more protection but require more tooth preparation.",
              },
              {
                question: "Do you accept insurance?",
                answer:
                  "We provide detailed receipts for insurance reimbursement. While we don't have direct tie-ups with insurance companies, our receipts include all necessary details for your claim. We also offer flexible payment options including EMI for expensive treatments.",
              },
              {
                question: "How long does a root canal take?",
                answer:
                  "Simple root canals take 60-90 minutes in one visit. Complex cases may need 2-3 appointments. We use modern rotary instruments and digital X-rays to make the process efficient. Most patients experience immediate pain relief after the first visit.",
              },
              {
                question: "Is teeth whitening safe?",
                answer:
                  "Professional whitening is safe when done correctly. We use clinically proven bleaching agents and custom trays. Some temporary sensitivity is normal. We avoid over-whitening and provide aftercare instructions to maintain results safely.",
              },
              {
                question: "What should I do for a dental emergency?",
                answer:
                  "For severe pain, swelling, or trauma, call us immediately at +91 95119 36441. We reserve emergency slots daily. For knocked-out teeth, keep the tooth moist and see us within 30 minutes. For severe pain, rinse with warm salt water and take over-the-counter pain relief.",
              },
              {
                question: "How much do dental implants cost?",
                answer:
                  "Implants range from ₹25,000-₹55,000 including the crown. Cost varies by implant brand, site complexity, and whether bone grafting is needed. We provide detailed estimates after clinical examination and X-rays. Payment plans are available.",
              },
              {
                question: "Do you offer payment plans?",
                answer:
                  "Yes, we offer flexible payment options for treatments above ₹10,000. You can pay in installments over 3-12 months depending on the treatment cost. We also accept all major credit cards, UPI, and provide detailed receipts for insurance claims.",
              },
              {
                question: "What age should children first visit the dentist?",
                answer:
                  "Children should visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish good habits, check for proper development, and prevent cavities. We make pediatric visits fun and educational with gentle, child-friendly approaches.",
              },
              {
                question: "How long do dental crowns last?",
                answer:
                  "Quality crowns last 10-15 years with proper care. Zirconia crowns tend to last longer than PFM crowns. Longevity depends on oral hygiene, grinding habits, and regular checkups. We provide warranties and will monitor your crowns during routine visits.",
              },
              {
                question: "Can I eat normally after a root canal?",
                answer:
                  "Avoid chewing on the treated tooth until permanent restoration is placed. Soft foods for 24-48 hours are recommended. Once the permanent crown is placed, you can eat normally. We'll provide specific dietary guidelines based on your treatment.",
              },
            ].map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                    <div className="text-2xl group-open:rotate-45 transition-transform duration-200">+</div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    <div className="flex gap-3 mt-4">
                      <Button size="sm" asChild>
                        <a href="#contact">Book Consultation</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="tel:+919511936441">Call for Details</a>
                      </Button>
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <a href="#inquiry">Send Inquiry</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+919511936441">Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.999639093541!2d73.8513764147209!3d18.51730478732939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2b4d0a8fef%3A0x535a39b1246e7abf!2sDental%20Clinic!5e0!3m2!1sen!2sin!4v1596243932347!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google map showing Samruddhi Dental Clinic"
            />
          </div>
        </div>
      </section>

      {/* General Inquiry Form */}
      <section id="inquiry" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">General Inquiry</h2>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="inqName">Full Name</Label>
                    <Input id="inqName" name="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="inqEmail">Email Address</Label>
                    <Input id="inqEmail" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="inqSubject">Subject</Label>
                  <Input id="inqSubject" name="subject" placeholder="Insurance estimate, treatment query..." required />
                </div>
                <div>
                  <Label htmlFor="inqMsg">Your Message</Label>
                  <Textarea id="inqMsg" name="message" rows={4} placeholder="How can we help?" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Protection & Privacy */}
      <section id="privacy" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Data Protection & Patient Privacy</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <p className="font-semibold mb-4">
                <strong>We protect your data.</strong> Clinical records are stored securely with restricted access. We
                follow consent-first communication and do not sell or share patient data for marketing.
              </p>
              <ul className="space-y-2 mb-4 ml-4 list-disc">
                <li>Encryption at rest & during transfer for digital records</li>
                <li>Access limited to treating clinicians and authorized staff</li>
                <li>Consent taken for photos, x-rays, and communication</li>
                <li>Data retention & deletion on request per policy</li>
                <li>Audit logs maintained for record access</li>
              </ul>
              <p className="text-sm">
                Questions? Email:{" "}
                <a href="mailto:privacy@samruddhidental.in" className="text-accent hover:underline">
                  privacy@samruddhidental.in
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Oral Health Awareness */}
      <section id="awareness" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Oral Health Awareness</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">Simple habits to keep your smile healthy.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Twice-Daily Brushing</h3>
                <p className="text-sm text-muted-foreground">Use a soft brush & fluoride toothpaste for 2 minutes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Floss Daily</h3>
                <p className="text-sm text-muted-foreground">Clean between teeth to prevent gum disease.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">6-Month Checkups</h3>
                <p className="text-sm text-muted-foreground">Early detection saves cost & discomfort.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Limit Sugary Snacks</h3>
                <p className="text-sm text-muted-foreground">Rinse with water if brushing isn't possible.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Quit Tobacco</h3>
                <p className="text-sm text-muted-foreground">Reduces risk of oral cancer & gum loss.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Night Guards</h3>
                <p className="text-sm text-muted-foreground">Consider if you grind teeth (bruxism).</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end gap-2">
          <Badge variant="destructive" className="text-xs animate-pulse">
            Emergency?
          </Badge>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 shadow-lg animate-bounce hover:animate-none"
            onClick={handleEmergencyCall}
          >
            🚑 Emergency Consult
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Samruddhi Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
