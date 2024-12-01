"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { Button } from './button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border bg-card p-4 transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="mt-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold">{product.title}</h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-yellow-500">★</span>
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        
        <Button className="mt-4 w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}