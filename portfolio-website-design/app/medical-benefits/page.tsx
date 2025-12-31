"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./styles.css"

interface CardData {
  id: number
  image: string
  title: string
  description: string
  expandedContent: string
  link: string
  linkText: string
  grayscale?: boolean
}

const medicalCareData: CardData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    title: "24/7 VIRTUAL CARE",
    description: "Connect with board-certified physicians anytime, anywhere through video, phone, or chat...",
    expandedContent:
      "Get diagnoses, prescriptions, and treatment plans from the comfort of home. No appointment necessary. Average wait time under 10 minutes. Unlimited visits included with membership.",
    link: "#",
    linkText: "Start Visit →",
    grayscale: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400",
    title: "PRESCRIPTION SAVINGS",
    description: "Save up to 80% on prescription medications with our pharmacy network...",
    expandedContent:
      "Access generic and brand-name medications at discounted rates. Free home delivery on 90-day supplies. Easy prescription transfer and automatic refills available.",
    link: "#",
    linkText: "Find Savings →",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-15597571755700dde675bc?w=400",
    title: "SPECIALIST NETWORK",
    description: "Access to over 50,000 specialists nationwide with priority scheduling for members...",
    expandedContent:
      "Coordinated care across cardiology, orthopedics, dermatology, and more. Second opinion services and care navigation support included. Reduced wait times for appointments.",
    link: "#",
    linkText: "Find Specialist →",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400",
    title: "COMPREHENSIVE DENTAL",
    description: "Full dental coverage including preventive, restorative, and cosmetic procedures...",
    expandedContent:
      "Two cleanings per year at no cost. Coverage for fillings, crowns, root canals, and orthodontics. Access to a nationwide network of dental providers.",
    link: "#",
    linkText: "Find Dentist →",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    title: "VISION CARE BENEFITS",
    description: "Annual eye exams, glasses, and contact lenses covered. Discounts on LASIK surgery...",
    expandedContent:
      "Choose from thousands of frames and lens options. Coverage for prescription sunglasses. Online ordering available with virtual try-on technology.",
    link: "#",
    linkText: "Schedule Exam →",
  },
]

const wellnessData: CardData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    title: "FITNESS & GYM ACCESS",
    description: "Complimentary membership to 10,000+ gyms, fitness centers, and wellness facilities nationwide...",
    expandedContent:
      "Includes virtual fitness classes, personal training sessions, and wellness workshops. Track your progress with our mobile app and earn rewards for staying active.",
    link: "#",
    linkText: "Activate Membership →",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-15443675670f2fcb009e0b?w=400",
    title: "MENTAL HEALTH SUPPORT",
    description: "Access to licensed therapists and counselors for individual, couples, and family therapy...",
    expandedContent:
      "Virtual or in-person sessions available. Specialized support for anxiety, depression, stress management, and life transitions. Confidential and judgment-free care.",
    link: "#",
    linkText: "Find Therapist →",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
    title: "NUTRITION COUNSELING",
    description: "One-on-one consultations with registered dietitians to help you reach your health goals...",
    expandedContent:
      "Personalized meal plans, grocery guides, and recipe recommendations. Specialized programs for weight management, diabetes, heart health, and more.",
    link: "#",
    linkText: "Book Session →",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce65df9?w=400",
    title: "SLEEP HEALTH PROGRAM",
    description: "Comprehensive sleep assessments and treatment for insomnia and sleep disorders...",
    expandedContent:
      "At-home sleep studies, cognitive behavioral therapy for insomnia, and CPAP equipment coverage. Sleep coaching and relaxation techniques included.",
    link: "#",
    linkText: "Learn More →",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400",
    title: "PREVENTIVE SCREENINGS",
    description: "Comprehensive health screenings to detect potential issues early when treatment is most effective...",
    expandedContent:
      "Annual wellness visits, cancer screenings, cardiovascular assessments, and age-appropriate preventive care. All covered at 100% with no out-of-pocket costs.",
    link: "#",
    linkText: "Schedule Screening →",
  },
]

const familyData: CardData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400",
    title: "MATERNITY & NEWBORN CARE",
    description: "Comprehensive support throughout pregnancy, delivery, and postpartum care...",
    expandedContent:
      "Prenatal visits, ultrasounds, delivery coverage, lactation consulting, and postpartum mental health support. Access to doulas and childbirth education classes.",
    link: "#",
    linkText: "Explore Benefits →",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
    title: "PEDIATRIC CARE",
    description: "Expert pediatric care for infants, children, and adolescents with board-certified specialists...",
    expandedContent:
      "Well-child visits, immunizations, developmental screenings, and sick visits. 24/7 pediatric advice line and telemedicine options for urgent concerns.",
    link: "#",
    linkText: "Find Pediatrician →",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400",
    title: "ELDER CARE SUPPORT",
    description: "Specialized care coordination for aging family members and chronic condition management...",
    expandedContent:
      "Care navigators help coordinate appointments, medications, and home health services. Support for Alzheimers, dementia, and other age-related conditions.",
    link: "#",
    linkText: "Get Support →",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400",
    title: "FAMILY PLANNING",
    description: "Comprehensive reproductive health services and family planning resources...",
    expandedContent:
      "Birth control options, fertility counseling and treatments, pre-conception planning, and reproductive health specialists. Confidential and personalized care.",
    link: "#",
    linkText: "Schedule Consultation →",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400",
    title: "CAREGIVER RESOURCES",
    description: "Support and resources for family members caring for loved ones with chronic conditions...",
    expandedContent:
      "Respite care, support groups, educational workshops, and 24/7 caregiver helpline. Financial assistance programs and care coordination services.",
    link: "#",
    linkText: "Access Resources →",
  },
]

interface BenefitCardProps {
  card: CardData
}

function BenefitCard({ card }: BenefitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <img
        src={card.image || "/placeholder.svg"}
        alt={card.title}
        className={`card-image ${card.grayscale ? "grayscale" : ""}`}
      />
      <div className="card-content">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">
          {card.description}
          {!isExpanded && (
            <a className="read-more" onClick={() => setIsExpanded(true)}>
              Read More
            </a>
          )}
        </p>
        {isExpanded && (
          <div className="card-expandable">
            <p>{card.expandedContent}</p>
            <a className="read-less" onClick={() => setIsExpanded(false)}>
              Read Less
            </a>
          </div>
        )}
      </div>
      <div className="quoteLink">
        <a href={card.link} className="quote-link">
          {card.linkText}
        </a>
      </div>
      <div className="gray-line"></div>
    </div>
  )
}

interface CardsNavigationProps {
  cards: CardData[]
}

function CardsNavigation({ cards }: CardsNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 340
      const newScrollLeft =
        direction === "left"
          ? containerRef.current.scrollLeft - scrollAmount
          : containerRef.current.scrollLeft + scrollAmount

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="cards-navigation">
      <div className="cards-container" ref={containerRef}>
        {cards.map((card) => (
          <BenefitCard key={card.id} card={card} />
        ))}
      </div>
      <button className="nav-arrow nav-prev" onClick={() => scroll("left")} aria-label="Previous cards">
        <ChevronLeft size={24} />
      </button>
      <button className="nav-arrow nav-next" onClick={() => scroll("right")} aria-label="Next cards">
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

export default function MedicalBenefitsPage() {
  const [activeTab, setActiveTab] = useState("medical-care")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="benefitsPage">
      <section className="topContainer">
        <h1>YOUR HEALTH & WELLNESS JOURNEY</h1>
        <p>
          Comprehensive benefits designed to support your physical, mental, and emotional wellbeing at every stage of
          life.
        </p>
      </section>

      <div className="navigation-tabs-container">
        <div id="top" className="navigation-tabs">
          <div
            className={`tab ${activeTab === "medical-care" ? "active" : ""}`}
            onClick={() => setActiveTab("medical-care")}
          >
            Medical Care
          </div>
          <div className={`tab ${activeTab === "wellness" ? "active" : ""}`} onClick={() => setActiveTab("wellness")}>
            Wellness & Prevention
          </div>
          <div className={`tab ${activeTab === "family" ? "active" : ""}`} onClick={() => setActiveTab("family")}>
            Family Support
          </div>
        </div>
      </div>

      {activeTab === "medical-care" && (
        <div id="medical-care" className="section">
          <h2 className="section-title">Medical Care</h2>
          <CardsNavigation cards={medicalCareData} />
        </div>
      )}

      {activeTab === "wellness" && (
        <div id="wellness" className="section">
          <h2 className="section-title">Wellness & Prevention</h2>
          <CardsNavigation cards={wellnessData} />
        </div>
      )}

      {activeTab === "family" && (
        <div id="family" className="section">
          <h2 className="section-title">Family Support</h2>
          <CardsNavigation cards={familyData} />
        </div>
      )}

      <button className="back-to-top" onClick={scrollToTop}>
        Back to Top ↑
      </button>
    </div>
  )
}
