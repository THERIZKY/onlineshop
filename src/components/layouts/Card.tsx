"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App({ list }: any) {
	return (
		<div className="gap-2 grid grid-row-2 md:grid-cols-5">
			{list.map((item: any, index: number) => (
				<Card
					shadow="sm"
					key={index}
					isPressable
					onPress={() => console.log("item pressed")}
				>
					<CardBody className="overflow-visible p-0">
						<Image
							shadow="sm"
							radius="lg"
							width="100%"
							alt={item.title}
							className="w-full object-cover h-[140px]"
							src={item.image}
						/>
					</CardBody>
					<CardFooter className="text-small justify-center">
						<b>{item.name}</b>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
