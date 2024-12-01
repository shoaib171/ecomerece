"use client";

import { useEffect, useState } from 'react';
import { getProducts, getCategories } from '@/lib/api';
import { Product } from '@/lib/types';
import { Header } from '@/components/ui/header';
import { CategorySlider } from '@/components/ui/category-slider';
import { ProductCard } from '@/components/ui/product-card';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setProducts(productsData.products);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Header categories={categories} />
      
      <main className="container py-8">
        <CategorySlider categories={categories} />
        
        <section className="mt-12">
          <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}