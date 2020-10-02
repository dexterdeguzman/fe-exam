$(() => {
	$("[role~='nav-toggle']").on('click', () => {
		$("[role~='nav-list']").slideToggle("fast");
		$("[role~='nav-toggle'] > .image").toggleClass("-show");
	}) 
});
