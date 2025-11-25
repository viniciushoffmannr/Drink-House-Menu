"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface SidebarProps {
  categories: Array<{ nome: string }>
  activeCategory: number
  onCategoryClick: (index: number) => void
  isMobile: boolean
}

export default function Sidebar({ categories, activeCategory, onCategoryClick, isMobile }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true)
    }
  }, [isMobile])

  if (isMobile) {
    return (
      <div className="w-full md:w-64 bg-white dark:bg-slate-950 border-b md:border-r border-gray-200 dark:border-slate-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 flex items-center justify-between font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors"
        >
          <span>Categorias</span>
          <ChevronDown size={20} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <nav className="flex flex-col">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  onCategoryClick(index)
                  setIsOpen(false)
                }}
                className={`px-4 py-3 text-left transition-all font-medium ${
                  activeCategory === index
                    ? "bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-900"
                }`}
              >
                {category.nome}
              </button>
            ))}
          </nav>
        )}
      </div>
    )
  }

  return (
    <aside className="hidden md:flex md:w-64 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 flex-col sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
      <nav className="flex flex-col p-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategoryClick(index)}
            className={`px-4 py-3 rounded-lg text-left transition-all font-medium ${
              activeCategory === index
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
            }`}
          >
            {category.nome}
          </button>
        ))}
      </nav>
    </aside>
  )
}
