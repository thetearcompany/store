"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const categoryData = {
  vegetables: {
    title: "Warzywa",
    description: "Świeże warzywa pełne witamin i minerałów",
    products: [
      {
        id: 1,
        name: "Pomidory",
        price: "8,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
      {
        id: 2,
        name: "Ogórki",
        price: "5,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Polska",
      },
      {
        id: 3,
        name: "Marchewka",
        price: "4,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
      {
        id: 4,
        name: "Papryka",
        price: "12,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Hiszpania",
      },
      {
        id: 5,
        name: "Cebula",
        price: "3,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Polska",
      },
      {
        id: 6,
        name: "Ziemniaki",
        price: "6,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
      {
        id: 7,
        name: "Brokuły",
        price: "7,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Polska",
      },
      {
        id: 8,
        name: "Kalafior",
        price: "9,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
    ],
  },
  fruits: {
    title: "Owoce",
    description: "Soczyste owoce bogate w witaminy",
    products: [
      {
        id: 1,
        name: "Jabłka",
        price: "6,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
      {
        id: 2,
        name: "Gruszki",
        price: "9,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Polska",
      },
      {
        id: 3,
        name: "Banany",
        price: "7,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Ekwador",
      },
      {
        id: 4,
        name: "Winogrona",
        price: "15,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Włochy",
      },
      {
        id: 5,
        name: "Pomarańcze",
        price: "8,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Hiszpania",
      },
      {
        id: 6,
        name: "Truskawki",
        price: "12,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
      {
        id: 7,
        name: "Borówki",
        price: "14,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Polska",
      },
      {
        id: 8,
        name: "Maliny",
        price: "16,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Polska",
      },
    ],
  },
  bread: {
    title: "Pieczywo",
    description: "Świeże pieczywo wypiekane tradycyjnymi metodami",
    products: [
      {
        id: 1,
        name: "Chleb żytni",
        price: "7,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 2,
        name: "Bagietka",
        price: "5,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 3,
        name: "Bułki",
        price: "1,20 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 4,
        name: "Chleb orkiszowy",
        price: "9,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 5,
        name: "Chleb razowy",
        price: "8,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 6,
        name: "Bułki grahamki",
        price: "1,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 7,
        name: "Chleb bezglutenowy",
        price: "12,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna piekarnia",
      },
      {
        id: 8,
        name: "Rogaliki",
        price: "2,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna piekarnia",
      },
    ],
  },
  dairy: {
    title: "Nabiał",
    description: "Naturalne produkty mleczne od lokalnych dostawców",
    products: [
      {
        id: 1,
        name: "Mleko",
        price: "4,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 2,
        name: "Ser żółty",
        price: "24,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 3,
        name: "Jogurt naturalny",
        price: "3,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 4,
        name: "Masło",
        price: "8,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 5,
        name: "Śmietana",
        price: "5,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 6,
        name: "Twaróg",
        price: "7,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 7,
        name: "Kefir",
        price: "4,50 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Lokalna mleczarnia",
      },
      {
        id: 8,
        name: "Ser pleśniowy",
        price: "19,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Francja",
      },
    ],
  },
  seafood: {
    title: "Owoce morza",
    description: "Świeże owoce morza dostarczane codziennie",
    products: [
      {
        id: 1,
        name: "Łosoś",
        price: "59,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Norwegia",
      },
      {
        id: 2,
        name: "Krewetki",
        price: "45,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Tajlandia",
      },
      {
        id: 3,
        name: "Dorsz",
        price: "39,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Bałtyk",
      },
      {
        id: 4,
        name: "Małże",
        price: "29,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Francja",
      },
      {
        id: 5,
        name: "Tuńczyk",
        price: "49,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Ocean Atlantycki",
      },
      {
        id: 6,
        name: "Kalmary",
        price: "35,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Włochy",
      },
      {
        id: 7,
        name: "Ośmiornica",
        price: "69,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Bardzo świeże",
        origin: "Hiszpania",
      },
      {
        id: 8,
        name: "Halibut",
        price: "54,99 zł",
        image: "/placeholder.svg?height=400&width=400",
        freshness: "Świeże",
        origin: "Norwegia",
      },
    ],
  },
}

export default function CategoryPage({ params }) {
  const { slug } = params
  const category = categoryData[slug] || {
    title: "Kategoria nie znaleziona",
    description: "Przepraszamy, nie znaleźliśmy takiej kategorii",
    products: [],
  }

  const [filters, setFilters] = useState({
    freshness: [],
    origin: [],
    priceRange: [0, 100],
  })

  const [sortOption, setSortOption] = useState("default")

  const handleFreshnessChange = (value) => {
    if (filters.freshness.includes(value)) {
      setFilters({
        ...filters,
        freshness: filters.freshness.filter((item) => item !== value),
      })
    } else {
      setFilters({
        ...filters,
        freshness: [...filters.freshness, value],
      })
    }
  }

  const handleOriginChange = (value) => {
    if (filters.origin.includes(value)) {
      setFilters({
        ...filters,
        origin: filters.origin.filter((item) => item !== value),
      })
    } else {
      setFilters({
        ...filters,
        origin: [...filters.origin, value],
      })
    }
  }

  const handlePriceChange = (value) => {
    setFilters({
      ...filters,
      priceRange: value,
    })
  }

  const clearFilters = () => {
    setFilters({
      freshness: [],
      origin: [],
      priceRange: [0, 100],
    })
  }

  // Get unique origins for the current category
  const origins = [...new Set(category.products.map((product) => product.origin))]

  // Filter products
  const filteredProducts = category.products.filter((product) => {
    // Filter by freshness
    if (filters.freshness.length > 0 && !filters.freshness.includes(product.freshness)) {
      return false
    }

    // Filter by origin
    if (filters.origin.length > 0 && !filters.origin.includes(product.origin)) {
      return false
    }

    // Filter by price
    const price = Number.parseFloat(product.price.replace(",", ".").replace(" zł", ""))
    const [min, max] = filters.priceRange
    if (price < min || price > max) {
      return false
    }

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = Number.parseFloat(a.price.replace(",", ".").replace(" zł", ""))
    const priceB = Number.parseFloat(b.price.replace(",", ".").replace(" zł", ""))

    switch (sortOption) {
      case "price-asc":
        return priceA - priceB
      case "price-desc":
        return priceB - priceA
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-700">
            NaturalFood
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/category/vegetables"
              className={`${slug === "vegetables" ? "text-amber-600 font-medium" : "text-amber-900 hover:text-amber-600"} transition-colors`}
            >
              Warzywa
            </Link>
            <Link
              href="/category/fruits"
              className={`${slug === "fruits" ? "text-amber-600 font-medium" : "text-amber-900 hover:text-amber-600"} transition-colors`}
            >
              Owoce
            </Link>
            <Link
              href="/category/bread"
              className={`${slug === "bread" ? "text-amber-600 font-medium" : "text-amber-900 hover:text-amber-600"} transition-colors`}
            >
              Pieczywo
            </Link>
            <Link
              href="/category/dairy"
              className={`${slug === "dairy" ? "text-amber-600 font-medium" : "text-amber-900 hover:text-amber-600"} transition-colors`}
            >
              Nabiał
            </Link>
            <Link
              href="/category/seafood"
              className={`${slug === "seafood" ? "text-amber-600 font-medium" : "text-amber-900 hover:text-amber-600"} transition-colors`}
            >
              Owoce morza
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-amber-900 hover:bg-amber-50 transition-colors relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-amber-900 hover:bg-amber-50 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-50 via-blue-50 to-amber-50 py-3 text-center italic text-amber-800 shadow-sm">
          „Nie samym chlebem żyje człowiek, lecz każdym słowem, które pochodzi z ust Boga." (Mt 4,4)
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-blue-50/40 via-amber-50/30 to-white py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-900">{category.title}</h1>
            <p className="text-amber-700 mt-2">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm h-fit border border-amber-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-amber-900">Filtry</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-amber-700 hover:text-amber-900 transition-all duration-300 hover:bg-amber-50"
                  onClick={clearFilters}
                >
                  Wyczyść
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="price">
                  <AccordionTrigger className="text-amber-900">Cena</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                        value={filters.priceRange}
                        onValueChange={handlePriceChange}
                      />
                      <div className="flex justify-between text-sm text-amber-700">
                        <span>{filters.priceRange[0]} zł</span>
                        <span>{filters.priceRange[1]} zł</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="freshness">
                  <AccordionTrigger className="text-amber-900">Świeżość</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="freshness-very"
                          checked={filters.freshness.includes("Bardzo świeże")}
                          onCheckedChange={() => handleFreshnessChange("Bardzo świeże")}
                        />
                        <Label htmlFor="freshness-very" className="text-amber-900">
                          Bardzo świeże
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="freshness-fresh"
                          checked={filters.freshness.includes("Świeże")}
                          onCheckedChange={() => handleFreshnessChange("Świeże")}
                        />
                        <Label htmlFor="freshness-fresh" className="text-amber-900">
                          Świeże
                        </Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="origin">
                  <AccordionTrigger className="text-amber-900">Pochodzenie</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {origins.map((origin, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox
                            id={`origin-${index}`}
                            checked={filters.origin.includes(origin)}
                            onCheckedChange={() => handleOriginChange(origin)}
                          />
                          <Label htmlFor={`origin-${index}`} className="text-amber-900">
                            {origin}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-amber-700">Znaleziono {sortedProducts.length} produktów</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-amber-900 border-amber-200 hover:border-blue-300 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
                    >
                      Sortuj <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-sm">
                    <DropdownMenuItem onClick={() => setSortOption("price-asc")}>Cena: od najniższej</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("price-desc")}>Cena: od najwyższej</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("name-asc")}>Nazwa: A-Z</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("name-desc")}>Nazwa: Z-A</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("default")}>Domyślne</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-amber-100 hover:border-blue-200 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        {product.freshness}
                      </div>
                      <div className="absolute top-2 left-2 bg-blue-400 text-white text-xs px-2 py-1 rounded-full">
                        {product.origin}
                      </div>
                    </div>
                    <div className="p-4 bg-white/70 backdrop-blur-sm">
                      <h3 className="font-medium text-amber-900">{product.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-amber-800">{product.price}</span>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-500 border-blue-200 hover:bg-blue-50 p-1 h-8 w-8"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Dodaj
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">NaturalFood</h3>
              <p>Dostarczamy naturalne produkty najwyższej jakości, aby wspierać zdrowy styl życia.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
              <p>ul. Przykładowa 123</p>
              <p>00-000 Warszawa</p>
              <p>kontakt@naturalfood.pl</p>
              <p>+48 123 456 789</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Informacje</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Dostawa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Polityka prywatności
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Regulamin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-600 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} NaturalFood. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

