"use client";

import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/button";

interface Props {
	current_page: number;
	last_page: number;
}

const BottomNavigation = ({ current_page, last_page }: Props) => {
	const { push } = useRouter();

	const isPreviousDisabled = current_page === 1;
	const isNextDisabled = current_page === last_page;

	return (
		<div className=" h-[3rem] flex justify-between">
			<Button
				size="lg"
				isDisabled={isPreviousDisabled}
				variant="ghost"
				onClick={() => push(`/products?page=${current_page - 1}`)}
			>
				Previous
			</Button>
			<Button
				size="lg"
				isDisabled={isNextDisabled}
				variant="ghost"
				onClick={() => push(`/products?page=${current_page + 1}`)}
			>
				Next
			</Button>
		</div>
	);
};

export default BottomNavigation;
