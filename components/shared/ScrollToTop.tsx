function ScrollToTopButton() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className="absolute hover:shadow-md grid place-items-center right-5 bottom-5 size-8 rounded-full bg-white cursor-pointer"
			onClick={scrollToTop}>
			<span className="text-blue-700 text-xl font-bold">&uarr;</span>
		</div>
	);
}

export default ScrollToTopButton;
