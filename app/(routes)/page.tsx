import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const reavlidate = 0;

export default async function HomePage() {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("");
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured" items={products} />
        </div>
      </div>
    </Container>
  );
}
