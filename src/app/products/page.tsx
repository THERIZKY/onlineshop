import Card from "@/components/layouts/Card";

const page = async () => {
	const getAllProducts = async () => {
		const res = await fetch("https://toko.titik.my.id/api/product");
		const json = await res.json();
		const dataProducts = json.data;

		return dataProducts;
	};

	const allProducts = await getAllProducts();

	return <Card list={allProducts} />;
};

export default page;
