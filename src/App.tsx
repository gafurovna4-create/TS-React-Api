import { useMemo, useState } from "react";
import { ProductCard } from "./components/ProductCards";
import "./App.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Majestic Mountain Graphic T-Shirt",
    price: 4400,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Classic Grey Hooded Sweatshirt",
    price: 90,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Classic Black Hooded Sweatshirt",
    price: 79,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Classic Comfort Drawstring Joggers",
    price: 79,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Red Trousers",
    price: 120,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "TypeScript React API Blank",
    price: 109,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1521369909026-2afed882baee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Sky Blue Cap",
    price: 52,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1521369909026-2afed882baee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Red Cap",
    price: 64,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "All",
  "Clothes",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
  "testCategory",
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="catalog-page">
      <div className="catalog-shell">
        <h1 className="page-title">Product Catalog</h1>

        <div className="search-block">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
        </div>

        <div className="category-row">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? "category-button active" : "category-button"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="empty-state">No products found.</div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;