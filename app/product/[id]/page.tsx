"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Przykładowe dane produktu
const productData = {
  id: 1,
  name: "Pomidory malinowe",
  price: "8,99 zł",
  description:
    "Pomidory malinowe to odmiana pomidorów o wyjątkowym, słodkim smaku i intensywnym aromacie. Są bogate w witaminy i minerały, a ich miąższ jest soczysty i mięsisty. Idealne do sałatek, sosów i jako dodatek do kanapek.",
  origin: "Polska",
  category: "Warzywa",
  freshness: "Bardzo świeże",
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  nutritionalValues: {
    calories: "18 kcal",
    protein: "0,9 g",
    carbs: "3,9 g",
    fat: "0,2 g",
    fiber: "1,2 g",
  },
  relatedProducts: [
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
      name: "Papryka",
      price: "12,99 zł",
      image: "/placeholder.svg?height=400&width=400",
      freshness: "Świeże",
      origin: "Hiszpania",
    },
    {
      id: 4,
      name: "Cebula",
      price: "3,99 zł",
      image: "/placeholder.svg?height=400&width=400",
      freshness: "Świeże",
      origin: "Polska",
    },
  ],
}

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  const toggleFavorite = () => setIsFavorite(!isFavorite)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-700">
            NaturalFood
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/category/vegetables" className="text-amber-900 hover:text-amber-600 transition-colors">
              Warzywa
            </Link>
            <Link href="/category/fruits" className="text-amber-900 hover:text-amber-600 transition-colors">
              Owoce
            </Link>
            <Link href="/category/bread" className="text-amber-900 hover:text-amber-600 transition-colors">
              Pieczywo
            </Link>
            <Link href="/category/dairy" className="text-amber-900 hover:text-amber-600 transition-colors">
              Nabiał
            </Link>
            <Link href="/category/seafood" className="text-amber-900 hover:text-amber-600 transition-colors">
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
          <div className="mb-6">
            <Link
              href={`/category/${productData.category.toLowerCase()}`}
              className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Powrót do {productData.category}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="relative h-[400px] bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden border border-amber-100 shadow-md transition-all duration-300 hover:shadow-lg group">
                <Image
                  src={productData.images[activeImage] || "/placeholder.svg"}
                  alt={productData.name}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                  {productData.freshness}
                </div>
                <div className="absolute top-2 left-2 bg-blue-400 text-white text-xs px-2 py-1 rounded-full">
                  {productData.origin}
                </div>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-20 border-2 rounded-md overflow-hidden transition-all duration-300 hover:scale-110 flex-shrink-0 ${
                      index === activeImage ? "border-amber-500 shadow-md" : "border-amber-200"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${productData.name} - zdjęcie ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-amber-100">
              <h1 className="text-3xl font-bold text-amber-900 mb-2">{productData.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-amber-700 ml-2">(24 opinie)</span>
              </div>
              <p className="text-2xl font-bold text-amber-800 mb-4">{productData.price}</p>
              <p className="text-amber-700 mb-6">{productData.description}</p>

              <div className="bg-amber-50/70 backdrop-blur-sm p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-amber-900">Pochodzenie:</span>
                  <span className="font-medium">{productData.origin}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-amber-900">Kategoria:</span>
                  <span className="font-medium">{productData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-900">Świeżość:</span>
                  <span className="font-medium">{productData.freshness}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-amber-200 rounded-md overflow-hidden bg-white/80">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none text-amber-700"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none text-amber-700"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 flex space-x-2">
                  <Button
                    variant="outline"
                    className={`${isFavorite ? "bg-blue-50 text-blue-500 border-blue-200" : "text-amber-700 border-amber-200"} transition-colors`}
                    onClick={toggleFavorite}
                  >
                    <Heart className={`h-5 w-5 mr-2 ${isFavorite ? "fill-blue-500" : ""}`} />
                    {isFavorite ? "Ulubione" : "Dodaj do ulubionych"}
                  </Button>
                  <Button className="flex-1 btn-gradient">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Dodaj do koszyka
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" className="mb-12">
            <TabsList className="bg-white/50 backdrop-blur-sm text-amber-900 p-1 rounded-lg">
              <TabsTrigger
                value="details"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 transition-all duration-300"
              >
                Szczegóły produktu
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 transition-all duration-300"
              >
                Wartości odżywcze
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 transition-all duration-300"
              >
                Opinie (24)
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="details"
              className="bg-white/80 backdrop-blur-sm p-6 rounded-b-lg border border-amber-100 mt-0"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Informacje o produkcie</h3>
              <p className="text-amber-700 mb-4">
                Pomidory malinowe to odmiana pomidorów o wyjątkowym, słodkim smaku i intensywnym aromacie. Są bogate w
                witaminy i minerały, a ich miąższ jest soczysty i mięsisty.
              </p>
              <p className="text-amber-700 mb-4">
                Pomidory malinowe zawierają dużo likopenu, który jest silnym przeciwutleniaczem. Są również źródłem
                witaminy C, potasu i błonnika.
              </p>
              <p className="text-amber-700">
                Nasze pomidory są uprawiane lokalnie, bez użycia sztucznych nawozów i pestycydów, co gwarantuje ich
                najwyższą jakość i smak.
              </p>
            </TabsContent>
            <TabsContent
              value="nutrition"
              className="bg-white/80 backdrop-blur-sm p-6 rounded-b-lg border border-amber-100 mt-0"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Wartości odżywcze</h3>
              <p className="text-amber-700 mb-4">Wartości odżywcze w 100g produktu:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50/70 backdrop-blur-sm p-3 rounded-lg">
                  <span className="text-amber-900 font-medium">Kalorie:</span>
                  <span className="float-right">{productData.nutritionalValues.calories}</span>
                </div>
                <div className="bg-amber-50/70 backdrop-blur-sm p-3 rounded-lg">
                  <span className="text-amber-900 font-medium">Białko:</span>
                  <span className="float-right">{productData.nutritionalValues.protein}</span>
                </div>
                <div className="bg-amber-50/70 backdrop-blur-sm p-3 rounded-lg">
                  <span className="text-amber-900 font-medium">Węglowodany:</span>
                  <span className="float-right">{productData.nutritionalValues.carbs}</span>
                </div>
                <div className="bg-amber-50/70 backdrop-blur-sm p-3 rounded-lg">
                  <span className="text-amber-900 font-medium">Tłuszcze:</span>
                  <span className="float-right">{productData.nutritionalValues.fat}</span>
                </div>
                <div className="bg-amber-50/70 backdrop-blur-sm p-3 rounded-lg">
                  <span className="text-amber-900 font-medium">Błonnik:</span>
                  <span className="float-right">{productData.nutritionalValues.fiber}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="reviews"
              className="bg-white/80 backdrop-blur-sm p-6 rounded-b-lg border border-amber-100 mt-0"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Opinie klientów</h3>
              <div className="space-y-4">
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-amber-700 ml-2 text-sm">Anna K. - 12.03.2023</span>
                  </div>
                  <p className="text-amber-900">Przepyszne pomidory! Słodkie i soczyste, idealne do sałatek.</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-200" />
                      ))}
                    </div>
                    <span className="text-amber-700 ml-2 text-sm">Marek W. - 05.03.2023</span>
                  </div>
                  <p className="text-amber-900">
                    Bardzo dobre pomidory, choć niektóre były lekko uszkodzone podczas transportu.
                  </p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-amber-700 ml-2 text-sm">Katarzyna B. - 28.02.2023</span>
                  </div>
                  <p className="text-amber-900">Najlepsze pomidory jakie jadłam! Będę zamawiać regularnie.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Podobne produkty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {productData.relatedProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <Card className="bg-white/80 backdrop-blur-sm border-amber-100 hover:shadow-md transition-all duration-300 group overflow-hidden">
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
                    <CardContent className="p-4 bg-white/70 backdrop-blur-sm">
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
                    </CardContent>
                  </Card>
                </Link>
              ))}
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

