import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingData = [
  {
    category: "Dental Checkup",
    items: [
      { service: "Consultation", price: "₹300–₹600" },
      { service: "Scaling & Polishing", price: "₹1,000–₹2,500" },
    ],
    note: "Includes oral exam; cleaning if opted.",
  },
  {
    category: "Teeth Whitening",
    items: [
      { service: "In‑clinic", price: "₹8,000–₹12,000" },
      { service: "Take‑home kit", price: "₹6,000–₹9,000" },
    ],
    note: "Shade change varies by enamel & habits.",
  },
  {
    category: "Orthodontics",
    items: [
      { service: "Metal/Ceramic Braces", price: "₹30,000–₹70,000" },
      { service: "Clear Aligners", price: "₹80,000–₹2,00,000" },
    ],
    note: "Includes periodic reviews; excludes retainers.",
  },
  {
    category: "Root Canal",
    items: [
      { service: "Anterior/Posterior", price: "₹3,000–₹8,000 / tooth" },
      { service: "Post & Core (if needed)", price: "₹2,000–₹4,000" },
    ],
    note: "Crown recommended after RCT (see below).",
  },
  {
    category: "Dental Implants",
    items: [
      { service: "Implant + Crown", price: "₹25,000–₹55,000" },
      { service: "Bone Graft (if needed)", price: "₹5,000–₹15,000" },
    ],
    note: "Price varies by brand, site & grafting.",
  },
  {
    category: "Crowns & Bridges",
    items: [
      { service: "PFM Crown", price: "₹4,000–₹7,000" },
      { service: "Zirconia Crown", price: "₹8,000–₹12,000" },
    ],
    note: "Warranty varies by material.",
  },
]

export function PricingSection() {
  return (
    <section id="prices" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Treatment Prices (INR)</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Transparent, indicative pricing. Final estimates are shared after a clinical exam.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pricingData.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.service}</span>
                      <Badge variant="outline" className="font-semibold">
                        {item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{category.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-dashed border-2 border-accent">
          <CardContent className="p-6">
            <p className="mb-4">
              <strong>Note:</strong> Prices are indicative and may vary with case complexity, materials, and lab work.
              You'll receive a written estimate after your clinical examination.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <a href="#contact">Get Exact Estimate</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Book Checkup</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
