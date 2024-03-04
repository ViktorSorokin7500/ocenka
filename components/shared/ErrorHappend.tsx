import Link from "next/link";
import React from "react";

const ErrorHappend = () => {
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="px-4 text-center text-xl font-spaceGrotesk font-semibold">
				<span>Сталась помилка, будь-ласка, поверніться на</span>{" "}
				<Link href="/" className="text-blue-700 underline">
					головну сторінку.
				</Link>
			</div>
		</div>
	);
};

export default ErrorHappend;
