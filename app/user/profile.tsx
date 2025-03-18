"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Package, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

// Przykładowe dane użytkownika
const userData = {
  name: "Jan Kowalski",
  email: "jan.kowalski@example.com",
  address: "ul. Przykładowa 123, 00-000 Warszawa",
  phone: "+48 123 456 789",
  orders: [
    {
      id: "ORD-2023-001",
      date: "12.03.2023",
      status: "Dostarczono",
      total: "156,97 zł",
      items: [
        {
          id: 1,
          name: "Pomidory malinowe",
          price: "8,99 zł",
          quantity: 2,
          image: "/placeholder.svg?height=400&width=400",
        },
        { id: 2, name: "Chleb żytni", price: "7,99 zł", quantity: 1, image: "/placeholder.svg?height=400&width=400" },
        { id: 3, name: "Ser żółty", price: "24,99 zł", quantity: 1, image: "/placeholder.svg?height=400&width=400" },
      ],
    },
    {
      id: "ORD-2023-002",
      date: "28.02.2023",
      status: "Dostarczono",
      total: "89,50 zł",
      items: [
        { id: 4, name: "Jabłka", price: "6,99 zł", quantity: 2, image: "/placeholder.svg?height=400&width=400" },
        {
          id: 5,
          name: "Jogurt naturalny",
          price: "3,50 zł",
          quantity: 3,
          image: "/placeholder.svg?height=400&width=400",
        },
        { id: 6, name: "Masło", price: "8,99 zł", quantity: 1, image: "/placeholder.svg?height=400&width=400" },
      ],
    },
  ],
  favorites: [
    {
      id: 1,
      name: "Pomidory malinowe",
      price: "8,99 zł",
      image: "/placeholder.svg?height=400&width=400",
      freshness: "Bardzo świeże",
      origin: "Polska",
    },
    {
      id: 2,
      name: "Chleb żytni",
      price: "7,99 zł",
      image: "/placeholder.svg?height=400&width=400",
      freshness: "Świeże",
      origin: "Lokalna piekarnia",
    },
    {
      id: 3,
      name: "Ser żółty",
      price: "24,99 zł",
      image: "/placeholder.svg?height=400&width=400",
      freshness: "Świeże",
      origin: "Lokalna mleczarnia",
    },
    {
      id: 4,
      name: "Jabłka",
      price: "6,99 zł",
      image: "/placeholder.svg?height=400&width=400",
      freshness: "Bardzo świeże",
      origin: "Polska",
    },
  ],
}

export default function UserProfilePage() {
  const [favorites, setFavorites] = useState(userData.favorites)

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id))
  }

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
            <Button variant="ghost" size="icon" className="text-amber-900 hover:bg-amber-50 transition-colors">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-amber-900 hover:bg-amber-50 transition-colors relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {favorites.length}
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
          <h1 className="text-3xl font-bold text-amber-900 mb-8">Moje konto</h1>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm h-fit border border-amber-100">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-amber-700" />
                </div>
                <h2 className="text-xl font-semibold text-amber-900">{userData.name}</h2>
                <p className="text-amber-700">{userData.email}</p>
              </div>

              <Separator className="mb-6" />

              <div className="space-y-2">
                <p className="text-amber-900 font-medium">Adres dostawy:</p>
                <p className="text-amber-700">{userData.address}</p>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-amber-900 font-medium">Telefon:</p>
                <p className="text-amber-700">{userData.phone}</p>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg">
                Edytuj profil
              </Button>
            </div>

            <div>
              <Tabs defaultValue="orders">
                <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-lg mb-6">
                  <TabsTrigger
                    value="orders"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900 transition-all duration-300"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Historia zamówień
                  </TabsTrigger>
                  <TabsTrigger
                    value="favorites"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900 transition-all duration-300"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Ulubione produkty
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="orders" className="mt-0">
                  <div className="space-y-6">
                    {userData.orders.map((order) => (
                      <Card key={order.id} className="bg-white/80 backdrop-blur-sm border-amber-100">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg text-amber-900">Zamówienie {order.id}</CardTitle>
                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {order.status}
                            </div>
                          </div>
                          <CardDescription>
                            Data: {order.date} | Wartość: {order.total}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center space-x-4">
                                <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-amber-900">{item.name}</h4>
                                  <p className="text-sm text-amber-700">
                                    {item.quantity} x {item.price}
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-amber-700 border-amber-200 hover:bg-amber-50"
                                >
                                  Kup ponownie
                                </Button>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="favorites" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favorites.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-100 group"
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
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeFavorite(product.id)}
                          >
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                        <div className="p-4 bg-white/70 backdrop-blur-sm">
                          <h3 className="font-medium text-amber-900">{product.name}</h3>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-bold text-amber-800">{product.price}</span>
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
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
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

