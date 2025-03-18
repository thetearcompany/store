import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, User, Leaf, Wheat, Fish } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Product {
  name: string
  price: string
  image: string
  freshness: string
  origin: string
}

interface ProductCardProps {
  product: Product
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50">
        <div className="glass-navbar hover:bg-white/80 hover:backdrop-blur-[12px] container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors">
            Adonai
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/category/vegetables" className="nav-link hover:text-amber-800">
              Warzywa
            </Link>
            <Link href="/category/fruits" className="nav-link hover:text-amber-800">
              Owoce
            </Link>
            <Link href="/category/bread" className="nav-link hover:text-amber-800">
              Pieczywo
            </Link>
            <Link href="/category/dairy" className="nav-link hover:text-amber-800">
              Nabiał
            </Link>
            <Link href="/category/seafood" className="nav-link hover:text-amber-800">
              Owoce morza
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-amber-800 hover:bg-amber-50/80 transition-colors">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-amber-800 hover:bg-amber-50/80 transition-colors relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-amber-800 hover:bg-amber-50/80 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
        <div className="holy-quote text-center">
          „Nie samym chlebem żyje człowiek, lecz każdym słowem, które pochodzi z ust Boga." (Mt 4,4)
        </div>
      </header>

      <main className="flex-1">
        <section className="section-holy">
          <div className="adonai-container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4 text-shadow-holy animate-divine">
                Naturalne dary ziemi
              </h1>
              <p className="sacred-text max-w-2xl mx-auto">
                Odkryj smak naturalnych produktów, starannie wybranych z Bożych darów, 
                aby zapewnić Ci zdrowie i radość z każdego posiłku.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="holy-card divine-light group">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="/vegetables.jpg"
                    alt="Świeże warzywa"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6 bg-white/70 backdrop-blur-sm">
                  <h3 className="sacred-text text-xl mb-2">Świeże warzywa</h3>
                  <p className="text-amber-800 mb-4">
                    Dary ziemi pełne witamin i minerałów, zebrane z miłością i szacunkiem dla natury.
                  </p>
                  <Button className="btn-sacred w-full">Zobacz więcej</Button>
                </CardContent>
              </Card>

              <Card className="holy-card divine-light group">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="/bread.jpg"
                    alt="Naturalne pieczywo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6 bg-white/70 backdrop-blur-sm">
                  <h3 className="sacred-text text-xl mb-2">Naturalne pieczywo</h3>
                  <p className="text-amber-800 mb-4">
                    Wypiekane z najczystszych składników, z zachowaniem tradycyjnych metod.
                  </p>
                  <Button className="btn-sacred w-full">Zobacz więcej</Button>
                </CardContent>
              </Card>

              <Card className="holy-card divine-light group">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="/seafood.jpg"
                    alt="Świeże owoce morza"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-6 bg-white/70 backdrop-blur-sm">
                  <h3 className="sacred-text text-xl mb-2">Owoce morza</h3>
                  <p className="text-amber-800 mb-4">
                    Dary mórz i oceanów, bogate w składniki odżywcze i naturalne wartości.
                  </p>
                  <Button className="btn-sacred w-full">Zobacz więcej</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-blessed">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center text-shadow-holy">
              Polecane produkty
            </h2>

            <Tabs defaultValue="vegetables" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-lg">
                <TabsTrigger
                  value="vegetables"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900"
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  Warzywa i owoce
                </TabsTrigger>
                <TabsTrigger
                  value="dairy"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900"
                >
                  <Wheat className="w-4 h-4 mr-2" />
                  Nabiał
                </TabsTrigger>
                <TabsTrigger
                  value="bread"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900"
                >
                  <Wheat className="w-4 h-4 mr-2" />
                  Pieczywo
                </TabsTrigger>
                <TabsTrigger
                  value="sweet"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Słodkie dary
                </TabsTrigger>
                <TabsTrigger
                  value="other"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900"
                >
                  <Fish className="w-4 h-4 mr-2" />
                  Inne dary
                </TabsTrigger>
              </TabsList>

              <TabsContent value="vegetables" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Pomidory malinowe",
                      price: "8,99 zł",
                      image: "/tomatoes.jpg",
                      freshness: "Bardzo świeże",
                      origin: "Polska",
                    },
                    {
                      name: "Jabłka eko",
                      price: "5,99 zł",
                      image: "/apples.jpg",
                      freshness: "Świeże",
                      origin: "Polska",
                    },
                    {
                      name: "Marchewka młoda",
                      price: "4,50 zł",
                      image: "/carrots.jpg",
                      freshness: "Bardzo świeże",
                      origin: "Polska",
                    },
                    {
                      name: "Grzyby shiitake",
                      price: "12,99 zł",
                      image: "/mushrooms.jpg",
                      freshness: "Świeże",
                      origin: "Polska",
                    },
                  ].map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="dairy" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Serek homogenizowany",
                      price: "3,99 zł",
                      image: "/cottage-cheese.jpg",
                      freshness: "Bardzo świeże",
                      origin: "Lokalna mleczarnia",
                    },
                    {
                      name: "Jogurt naturalny",
                      price: "4,99 zł",
                      image: "/yogurt.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna mleczarnia",
                    },
                    {
                      name: "Mleko 2%",
                      price: "3,50 zł",
                      image: "/milk.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna mleczarnia",
                    },
                    {
                      name: "Kefir naturalny",
                      price: "4,99 zł",
                      image: "/kefir.jpg",
                      freshness: "Bardzo świeże",
                      origin: "Lokalna mleczarnia",
                    },
                  ].map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bread" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Chleb żytni na zakwasie",
                      price: "7,99 zł",
                      image: "/rye-bread.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna piekarnia",
                    },
                    {
                      name: "Makaron pełnoziarnisty",
                      price: "5,50 zł",
                      image: "/pasta.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna wytwórnia",
                    },
                    {
                      name: "Makaron świderki",
                      price: "4,99 zł",
                      image: "/spiral-pasta.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna wytwórnia",
                    },
                    {
                      name: "Makaron wstążki",
                      price: "4,99 zł",
                      image: "/ribbon-pasta.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna wytwórnia",
                    },
                  ].map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sweet" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Dżem truskawkowy",
                      price: "9,99 zł",
                      image: "/strawberry-jam.jpg",
                      freshness: "Świeże",
                      origin: "Domowa spiżarnia",
                    },
                    {
                      name: "Dżem wiśniowy",
                      price: "9,99 zł",
                      image: "/cherry-jam.jpg",
                      freshness: "Świeże",
                      origin: "Domowa spiżarnia",
                    },
                    {
                      name: "Dżem brzoskwiniowy",
                      price: "9,99 zł",
                      image: "/peach-jam.jpg",
                      freshness: "Świeże",
                      origin: "Domowa spiżarnia",
                    },
                    {
                      name: "Powidła śliwkowe",
                      price: "11,99 zł",
                      image: "/plum-jam.jpg",
                      freshness: "Świeże",
                      origin: "Domowa spiżarnia",
                    },
                  ].map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="other" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Miód lipowy",
                      price: "29,99 zł",
                      image: "/honey.jpg",
                      freshness: "Świeże",
                      origin: "Lokalna pasieka",
                    },
                    {
                      name: "Orzechy włoskie",
                      price: "19,99 zł",
                      image: "/walnuts.jpg",
                      freshness: "Świeże",
                      origin: "Polska",
                    },
                    {
                      name: "Rodzynki",
                      price: "8,99 zł",
                      image: "/raisins.jpg",
                      freshness: "Świeże",
                      origin: "Turcja",
                    },
                    {
                      name: "Migdały",
                      price: "24,99 zł",
                      image: "/almonds.jpg",
                      freshness: "Świeże",
                      origin: "Hiszpania",
                    },
                  ].map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-100 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Adonai</h3>
              <p className="text-amber-200">
                Twój sklep z naturalnymi produktami, gdzie jakość spotyka się z duchowością.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Kontakt</h3>
              <p className="text-amber-200">ul. Przykładowa 123</p>
              <p className="text-amber-200">00-000 Warszawa</p>
              <p className="text-amber-200">kontakt@adonai.pl</p>
              <p className="text-amber-200">+48 123 456 789</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Informacje</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-amber-200 hover:text-white transition-colors duration-300">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-amber-200 hover:text-white transition-colors duration-300">
                    Dostawa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-amber-200 hover:text-white transition-colors duration-300">
                    Polityka prywatności
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-amber-200 hover:text-white transition-colors duration-300">
                    Regulamin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-amber-800/50 text-center text-amber-200">
            <p>&copy; 2024 Adonai. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card group hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/70 hover:backdrop-blur-[16px] hover:scale-[1.02]">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-2 left-2 glass-content px-2 py-1 text-xs text-amber-900 animate-content-pulse hover:bg-white/50 hover:backdrop-blur-[12px] hover:border-white/30 hover:shadow-md">{product.origin}</div>
        <div className="absolute top-2 right-2 glass-content px-2 py-1 text-xs text-amber-900 animate-content-pulse hover:bg-white/50 hover:backdrop-blur-[12px] hover:border-white/30 hover:shadow-md">{product.freshness}</div>
      </div>
      <div className="product-content hover:bg-white/70 hover:backdrop-blur-[16px]">
        <h3 className="product-title">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="product-price">{product.price}</span>
          <Button variant="outline" size="icon" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50/50 glass-content animate-content-pulse hover:bg-white/50 hover:backdrop-blur-[12px] hover:border-white/30 hover:shadow-md">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <Button className="btn-sacred w-full mt-4 glass-content hover:bg-white/50 hover:backdrop-blur-[12px] hover:border-white/30 hover:shadow-md">
          Dodaj do koszyka
        </Button>
      </div>
    </div>
  )
}

