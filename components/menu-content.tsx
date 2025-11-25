"use client"

import type React from "react"
import ProductCard from "./product-card"

interface MenuItem {
  nome: string
  preco: number
  descricao?: string
  imagem: string
}

interface Category {
  nome: string
  itens: MenuItem[]
}

interface MenuContentProps {
  data: Category[]
  categoryRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
  contentRef: React.MutableRefObject<HTMLDivElement | null>
  activeCategory: number
}

export default function MenuContent({ data, categoryRefs, contentRef, activeCategory }: MenuContentProps) {
  return (
    <main ref={contentRef} className="flex-1 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto w-full">
      {data.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          ref={(el) => {
            categoryRefs.current[categoryIndex] = el
          }}
          className="mb-12 scroll-mt-32 sm:scroll-mt-40"
        >
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{category.nome}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {category.itens.map((item, itemIndex) => (
              <ProductCard key={itemIndex} product={item} />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
