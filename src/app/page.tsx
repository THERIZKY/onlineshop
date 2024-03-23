import Card from "@/components/layouts/Card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default async function Home() {
	async function getCategory() {
		const res: any = await fetch("https://toko.titik.my.id/api/category");
		const json = await res.json();
		const dataKategori = json.data;

		return dataKategori;
	}

	async function getFeaturedProducts() {
		const res: any = await fetch("https://toko.titik.my.id/api/product/featured");
		const json = await res.json();
		const dataProducts = json.data;

		return dataProducts;
	}

	// Get The Data
	const category = await getCategory();
	const featuredProducts = await getFeaturedProducts();

	return (
		<main className="flex min-h-screen flex-col gap-5 items-center justify-between p-24">
			<div className=" w-[80%]  max-h-[30rem]">
				<h1 className="pb-5">Category</h1>
				<Card list={category} />
			</div>
			<Divider />
			<div className="w-[80%] gap-5">
				<h1 className="pb-5">Featured Products</h1>
				<Card list={featuredProducts} />
				<div className="w-full flex justify-center pt-5">
					<Link href="/products">
						<Button size="md" variant="shadow">
							View More
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
