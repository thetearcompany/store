"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Heart, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

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

      <main className="flex-1 bg-gradient-to-b from-blue-50/40 via-amber-50/30 to-white py-12">
        <div className="container mx-auto px-4 max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900 transition-all duration-300"
              >
                Logowanie
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-100 data-[state=active]:to-blue-50 data-[state=active]:text-amber-900 transition-all duration-300"
              >
                Rejestracja
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="border border-amber-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Zaloguj się do konta</CardTitle>
                  <CardDescription>Wprowadź swoje dane, aby się zalogować</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-900">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="twoj@email.pl"
                      className="border-amber-200 bg-white/70"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-amber-900">
                      Hasło
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="border-amber-200 bg-white/70 pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        className="absolute right-0 top-0 h-full px-3 text-amber-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">{showPassword ? "Ukryj hasło" : "Pokaż hasło"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-600"
                      />
                      <Label htmlFor="remember" className="text-sm text-amber-700">
                        Zapamiętaj mnie
                      </Label>
                    </div>
                    <Link href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                      Zapomniałeś hasła?
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg">
                    Zaloguj się
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="border border-amber-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Utwórz nowe konto</CardTitle>
                  <CardDescription>Wprowadź swoje dane, aby utworzyć konto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-amber-900">
                        Imię
                      </Label>
                      <Input id="first-name" placeholder="Jan" className="border-amber-200 bg-white/70" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-amber-900">
                        Nazwisko
                      </Label>
                      <Input id="last-name" placeholder="Kowalski" className="border-amber-200 bg-white/70" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-register" className="text-amber-900">
                      Email
                    </Label>
                    <Input
                      id="email-register"
                      type="email"
                      placeholder="twoj@email.pl"
                      className="border-amber-200 bg-white/70"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register" className="text-amber-900">
                      Hasło
                    </Label>
                    <div className="relative">
                      <Input
                        id="password-register"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="border-amber-200 bg-white/70 pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        className="absolute right-0 top-0 h-full px-3 text-amber-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">{showPassword ? "Ukryj hasło" : "Pokaż hasło"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-600"
                    />
                    <Label htmlFor="terms" className="text-sm text-amber-700">
                      Akceptuję{" "}
                      <Link href="#" className="text-amber-900 hover:underline">
                        regulamin
                      </Link>{" "}
                      i{" "}
                      <Link href="#" className="text-amber-900 hover:underline">
                        politykę prywatności
                      </Link>
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 hover:shadow-lg">
                    Zarejestruj się
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
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

