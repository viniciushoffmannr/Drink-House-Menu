"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import MenuContent from "@/components/menu-content"
import { menuData } from "@/lib/menu-data"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index)
    setTimeout(() => {
      categoryRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
    }, 0)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header categories={menuData.categorias} activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
      <MenuContent
        data={menuData.categorias}
        categoryRefs={categoryRefs}
        contentRef={contentRef}
        activeCategory={activeCategory}
      />
    </div>
  )
}
