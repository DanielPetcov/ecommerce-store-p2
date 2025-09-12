import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";

export const reavlidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("");
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
