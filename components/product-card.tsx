"use client"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { GenericDrinkIcon } from "./generic-drink-icon"

interface Product {
  nome: string
  preco: number
  descricao?: string
  imagem?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const hasImage = product.imagem && product.imagem.trim() !== ""
  const imageUrl = hasImage ? product.imagem : null

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-800 p-3 sm:p-4"
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={product.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-slate-500">
            <GenericDrinkIcon />
          </div>
        )}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base line-clamp-2 mb-2">
          {product.nome}
        </h3>

        <span className="text-lg sm:text-xl font-bold text-orange-500">R$ {product.preco.toFixed(2)}</span>
      </div>
    </div>
  )
}
