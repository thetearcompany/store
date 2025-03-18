"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Przykładowe dane koszyka
const initialCartItems = [
  {
    id: 1,
    name: "Pomidory malinowe",
    price: "8,99 zł",
    quantity: 2,
    image: "/placeholder.svg?height=400&width=400",
    freshness: "Bardzo świeże",
    origin: "Polska",
  },
  {
    id: 2,
    name: "Chleb żytni",
    price: "7,99 zł",
    quantity: 1,
    image: "/placeholder.svg?height=400&width=400",
    freshness: "Świeże",
    origin: "Lokalna piekarnia",
  },
  {
    id: 3,
    name: "Ser żółty",
    price: "24,99 zł",
    quantity: 1,
    image: "/placeholder.svg?height=400&width=400",
    freshness: "Świeże",
    origin: "Lokalna mleczarnia",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const calculateTotal = () => {
    return (
      cartItems
        .reduce((total, item) => {
          const price = Number.parseFloat(item.price.replace(",", ".").replace(" zł", ""))
          return total + price * item.quantity
        }, 0)
        .toFixed(2)
        .replace(".", ",") + " zł"
    )
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
            <Button variant="ghost" size="icon" className="text-amber-900 hover:bg-amber-50 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
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
            <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Kontynuuj zakupy
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-amber-900 mb-8">Twój koszyk</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-8">
              <ShoppingCart className="h-16 w-16 mx-auto text-amber-300 mb-4" />
              <h2 className="text-2xl font-semibold text-amber-900 mb-2">Twój koszyk jest pusty</h2>
              <p className="text-amber-700 mb-6">Dodaj produkty do koszyka, aby kontynuować zakupy</p>
              <Button
                asChild
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/">Przejdź do sklepu</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
                <div className="hidden md:grid grid-cols-[100px_2fr_1fr_1fr_auto] gap-4 mb-4 text-amber-900 font-medium">
                  <div></div>
                  <div>Produkt</div>
                  <div>Cena</div>
                  <div>Ilość</div>
                  <div></div>
                </div>
                <Separator className="mb-6 hidden md:block" />

                {cartItems.map((item) => (
                  <div key={item.id} className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-[100px_2fr_1fr_1fr_auto] gap-4 items-center">
                      <div className="relative h-20 w-20 mx-auto md:mx-0 overflow-hidden rounded-md">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs px-1 rounded-bl-md">
                          {item.freshness}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-amber-900">{item.name}</h3>
                        <p className="text-xs text-amber-700">{item.origin}</p>
                      </div>
                      <div className="text-amber-900 font-medium text-center md:text-left">{item.price}</div>
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="flex items-center border border-amber-200 rounded-md overflow-hidden bg-white/70 backdrop-blur-sm">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none text-amber-700"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none text-amber-700"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-amber-700 hover:text-red-500 transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Separator className="mt-6" />
                  </div>
                ))}
              </div>

              <div className="h-fit bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-amber-100">
                <h2 className="text-xl font-semibold text-amber-900 mb-4">Podsumowanie</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-amber-700">Wartość produktów:</span>
                    <span className="font-medium text-amber-900">{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Dostawa:</span>
                    <span className="font-medium text-amber-900">15,00 zł</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-amber-900 font-medium">Razem:</span>
                    <span className="font-bold text-amber-900 text-lg">
                      {(Number.parseFloat(calculateTotal().replace(",", ".").replace(" zł", "")) + 15)
                        .toFixed(2)
                        .replace(".", ",") + " zł"}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-amber-900 mb-2">Kod rabatowy</h3>
                  <div className="flex space-x-2">
                    <Input placeholder="Wpisz kod" className="border-amber-200 bg-white/70" />
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                      Zastosuj
                    </Button>
                  </div>
                </div>

                <Button className="w-full btn-gradient group">
                  Przejdź do kasy
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>

                <div className="mt-6 text-sm text-amber-700">
                  <p>Darmowa dostawa dla zamówień powyżej 150 zł</p>
                  <p>Możliwość zwrotu w ciągu 14 dni</p>
                </div>
              </div>
            </div>
          )}
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

