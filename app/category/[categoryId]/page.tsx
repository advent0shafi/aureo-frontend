import CategeryProductList from "./components/CategeryProductList"

export default async function CategoryPage({ params }: { params:  Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  return <CategeryProductList initialCategoryId={categoryId} />
}

