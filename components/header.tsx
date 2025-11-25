"use client"

import { useRef, useEffect } from "react"

interface Category {
  nome: string
}

interface HeaderProps {
  categories: Category[]
  activeCategory: number
  onCategoryClick: (index: number) => void
}

export default function Header({ categories, activeCategory, onCategoryClick }: HeaderProps) {
  const navRef = useRef<HTMLDivElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (activeButtonRef.current && navRef.current) {
      const navScroll = navRef.current
      const button = activeButtonRef.current
      const scrollLeft = button.offsetLeft - navScroll.offsetWidth / 2 + button.offsetWidth / 2
      navScroll.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
  }, [activeCategory])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-md">
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
          <h1 className="text-lg sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Drink House
          </h1>
          <p className="hidden sm:block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Cardápio Digital</p>
        </div>
      </div>

      <nav
        ref={navRef}
        className="bg-white dark:bg-slate-950 overflow-x-auto flex gap-2 px-3 py-2 scrollbar-hide sm:gap-4 sm:px-6 sm:py-3"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((category, index) => (
          <button
            ref={activeCategory === index ? activeButtonRef : null}
            key={index}
            onClick={() => onCategoryClick(index)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
              activeCategory === index
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            {category.nome}
          </button>
        ))}
      </nav>
    </header>
  )
}
