import Card from "@/components/layouts/Card";
import { Divider } from "@nextui-org/divider";
import BottomNavigation from "@/components/elements/BottomNavigation";

interface Props {
	searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ searchParams }: Props) => {
	const selectedPage = Number(searchParams.page) || 1;

	// Ngambil Data Products berdasarkan page
	const getAllProducts = async () => {
		const res = await fetch(`https://toko.titik.my.id/api/product?page=${selectedPage}`);
		const json = await res.json();
		const dataProducts = json.data;

		const allProducts = dataProducts.data;
		const current_page = dataProducts.current_page;
		const last_page = dataProducts.last_page;

		return { allProducts, last_page, current_page };
	};

	const { allProducts, last_page, current_page } = await getAllProducts();

	return (
		<main className="flex min-h-screen w-full flex-col gap-5 p-24">
			<h1 className="text-6xl font-bold text-center">All Products</h1>
			<Divider />
			<Card list={allProducts} />
			<Divider />
			<BottomNavigation current_page={current_page} last_page={last_page} />
		</main>
	);
};

export default page;
