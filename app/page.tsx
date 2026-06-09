import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Features from "@/components/Features";
import ParallaxExperience from "@/components/ParallaxExperience";
import Gallery from "@/components/Gallery";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  // Local Business Structured Data for SEO Rich Snippets
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Misty Hill Land Villa Stays",
    "description":
      "A luxury homestay and private villa rental in Wayanad, Kerala, surrounded by nature with stunning mountain views, private bonfires, and organic local meals.",
    "image": [
      "https://mistyhillland.com/images/about_villa.png",
      "https://mistyhillland.com/images/parallax_scenic.png",
      "https://mistyhillland.com/images/gallery_1.png",
      "https://mistyhillland.com/images/gallery_2.png",
    ],
    "url": "https://mistyhillland.com",
    "telephone": "+919846012345",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wayanad",
      "addressRegion": "Kerala",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.6854,
      "longitude": 76.132,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Mountain-View Balconies",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Organic Traditional Meals",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Campfire Pit",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-Speed WiFi",
        "value": true,
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Main Luxury Layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero slideshow section */}
          <Hero />

          {/* Stats Bar */}
          <TrustBar />

          {/* Detailed Story Section */}
          <About />

          {/* Features / Amenities Section */}
          <Features />

          {/* Scenic Parallax Callout */}
          <ParallaxExperience />

          {/* Alternating Editorial Experiences */}
          <Experiences />

          {/* Masonry Gallery with Lightbox */}
          <Gallery />

          {/* Guest Reviews Carousel */}
          <Testimonials />

          {/* Booking CTA Section */}
          <BookingCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
