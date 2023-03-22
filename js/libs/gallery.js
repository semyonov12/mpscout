
// Снипед: gal
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	let galleyItems = [];
	galleries.forEach(gallery => {
		galleyItems.push({
			gallery,
			galleryClass: lightGallery(gallery, {
				// plugins какой подключаем и подключить его js: [lgZoom, lgThumbnail],
				licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
				speed: 500,
			})
		})
	});
}


 //файл со всеми стилями
  //<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/css/lightgallery-bundle.min.css"
	//integrity="sha512-nUqPe0+ak577sKSMThGcKJauRI7ENhKC2FQAOOmdyCYSrUh0GnwLsZNYqwilpMmplN+3nO3zso8CWUgu33BDag=="
	//crossorigin="anonymous" referrerpolicy="no-referrer">


// Это основной файл js, а плагины подключать отдельно
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.min.js"
	integrity="sha512-dSI4QnNeaXiNEjX2N8bkb16B7aMu/8SI5/rE6NIa3Hr/HnWUO+EAZpizN2JQJrXuvU7z0HTgpBVk/sfGd0oW+w=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>