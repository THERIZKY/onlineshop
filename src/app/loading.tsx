import Image from "next/image";
const loading = () => {
	return (
		<div className="w-screen h-screen overflow-hidden">
			<Image src="/loading.svg" width={500} height={500} alt="loading" />
		</div>
	);
};

export default loading;
