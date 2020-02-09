var nav, cart1,Top,docElem,Input,popUp,imgChange,cartShowcase,caseImg,miniCart,minClose;

nav = document.querySelector(".search");
cart1 = document.querySelector(".icon-cart");
Top =document.querySelector(".top-btn");
docElem = document.documentElement;
Input = document.querySelector("input");
popUp = document.querySelector(".popup")
imgChange =document.querySelector(".img-change");
images = document.querySelectorAll(".row-items a");
 caseImg = document.querySelector('.case-img');
 miniCart = document.querySelector('.mini-cart')
 minClose = document.querySelector('.cart-close')


//console.log(Top);




//=============================Function Declaration here===============================
backToTop();
scrollAppear();
pageScroll();
searchFocus();



//====================================================================================


//=============================Function Initialization here===============================







 function pageScroll(){
 	window.addEventListener('scroll',pageScroll)
	if(window.pageYOffset > 100){
		nav.style.position = "sticky";
		nav.style.top = 0;
		nav.style.zIndex = 100;
		nav.style.height = 100;
		cart1.style.display = "flex";
		
	};/*else{
		nav.style.position = "";
		nav.style.top =600;
	}
	/*if(window.pageYOffset < 1){
			nav.style.position = "relative"
			nav.style.top = 53;
	

	}; */

	if(window.pageYOffset < 100){
		cart1.style.display = "none";
	};

	if(window.pageYOffset < 2050){
		Top.style.display = "none";
	};

	if(window.pageYOffset > 2050){
			Top.style.display = "flex";
			Top.style.position = "fixed";
	};


	
};
var input = document.querySelector("input");
 function leave(){
		Input.addEventListener('mouseleave', ()=>{
				if(input.value === ""){
				setTimeout(function(){
					input.blur(); 
					console.log("worked")
				},3000);}			
	})}; 


leave();


function searchFocus(){
	Input.addEventListener("mouseover", ()=>{
		var input = document.querySelector("input");
		input.focus();
	});
};




 function backToTop(){
  	Top.addEventListener("click", ()=>{
	console.log(pageYOffset);
	docElem.style.scrollBehavior = 'smooth';
	if( pageYOffset){
		docElem.scrollTop=0;
		docElem.style.scrollBehavior = '';
	}
})};


  	



function scrollAppear(){
	window.addEventListener("scroll",scrollAppear);
	var imgAppear = document.querySelector(".id3");
	var imgPosition = imgAppear.getBoundingClientRect().top;
	var screenPos =  window.innerHeight/1.7;


	if(imgPosition < screenPos){
		imgAppear.classList.add("img-appear");	
	}




};

 



function cartPop(){
	addEventListener('click', ()=>{
		var cartIcon = document.querySelector('.cart1');
		cartIcon.classList.add()
	})
}
 
	

(function cartBotton(){
	const cartBtn = document.querySelectorAll('.cart-btn');
	cartBtn.forEach((btn)=>{
		btn.addEventListener('click',(event)=>{
			
			//console.log(event.target.parentElement.classList.contains('row-items'))
		if(event.target.parentElement.classList.contains('row-items')){
			
			
			if(btn.classList.contains('clicked')){
			console.log("you added this item already");

			}
			else{

				event.target.classList.add("clicked")

				let imgSrc = event.target.parentElement.children[0].children[0].children[0].children[0].src;
				let imgPos = imgSrc.indexOf('Stocks')+6.;
				let imgPath = imgSrc.slice(imgPos);

				const products = {};
				 products.img =`cart-img${imgPath}`;
				 let prices = event.target.parentElement.children[0].children[1].children[2].textContent;
				 let itemName = event.target.parentElement.children[0].children[1].children[3].textContent;
				 let finalPrice = prices.slice(3).trim();
				 products.price = finalPrice;
				//console.log(products.img);

				const cartItem = document.createElement('div');
				cartItem.classList.add("each-item");

				cartItem.innerHTML = `
			
				<div class="const"><img src="${products.img}" alt=""></div>
				<div class="item-tag">
					<span class="const"><h3>${itemName}</h3></span>
					<span class="each-item-price const p-price"> ${prices}</span><span class="const">0</span>
					<span id = "trashbin const"><svg class="trashbin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/></svg></span>
				</div>
				`;
				cartItem.children[0].classList.add('cart-img')
				cartItem.children[1].children[0].classList.add('cart-each-item')
				cartItem.children[1].classList.add('cart-tag')
				

				let total =document.querySelector('.total');
				let cart2 =document.querySelector('#cart2');
				//total.before(cartItem,total);
				cart2.appendChild(cartItem);
				const cartBtn = document.querySelectorAll('.cart-btn');

				showTotal()
				
				
			}

		};
		
		removeItem();
		})
	});





	
	function ranout(){
		let trashIcon = document.querySelectorAll('.trashbin');
		let des = document.querySelectorAll('.cart-btn')

		trashIcon.forEach((del)=>{
			del.addEventListener('click', (event)=>{
				
						
					let fel = event.target
					let des = document.querySelectorAll('.clicked')
					des.textContent = 'add-to-cart'
					des[0].classList.add('cart.btn')
					des[0].classList.remove('incart')
					console.log(des)
			})
		})
	}



function removeItem(){
	let trashIcon = document.querySelectorAll('.trashbin');
		let des = document.querySelectorAll('.cart-btn')
				let dat =document.querySelectorAll('.cart-btn') 
		trashIcon.forEach((icon)=>{
			icon.addEventListener('click',(event)=>{
			
				icon.parentElement.parentElement.children[0].children[0].textContent='add to cart';
				
			icon.parentElement.parentElement.parentElement.remove(trashIcon);
	ranout()
	showTotal()
	

		})
		})
	};




		function showTotal(){
			let totalBox = document.querySelector('.digit')
			let total =[]
			let items =document.querySelectorAll('.p-price')

			items.forEach(function(item){
				total.push(parseFloat(item.textContent))
			})

			const totalMoney =  total.reduce(function(total, item){
				total +=item;
				return total
			},0)
			let final = totalBox.textContent = totalMoney.toFixed(2)

		}
})();	



 (function addChange() {
	let inCart = document.querySelectorAll(".cart-btn");
	inCart.forEach((btns)=>{

	btns.addEventListener('click',(event)=>{
		//console.log(event.target.classList.contains('cart-btn'));
		if(event.target.classList.contains('cart-btn')){
	let inCart = event.target;
	cartValue = inCart.textContent = 'Added';
	inCart.classList.remove('cart-btn');
	inCart.classList.add('incart');

	console.log(inCart);
}
})
});
})();




/*
 * - Add an event listener for document click
 * - Define a function that filters the unwanted click events on the document
 */

// Add an event listener for document click
document.addEventListener('click', tabClick);

// Define a function that filters the unwanted click events on the document
function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    // If we click an element whos href contains "tab-", proceed
    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        // If we didn't click an active item, switch tabs
        if (elem.className.indexOf('active') == -1) {
            // Remove the active class from the tabs and the visible class from the tab contents
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabContents[i].classList.remove('visible');
            }

            // Add the active class to the clicked element and the visible class to the corresponding tab
            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
};



images.forEach(function(show){
	show.addEventListener('click', (e)=>{
	let imgSrc = event.target.src
	let srcPos = imgSrc.indexOf("Stocks")+6;
	let srcPath = imgSrc.slice(srcPos)
	caseSrc = caseImg.src

	let minCartImg ={}
	minCartImg.img = `all-image${srcPath}`
	let caseSrcPos = caseSrc.indexOf('product')+7
	let caseSrcPath = caseSrc.slice(caseSrcPos)
	miniCart.style.display ='block'
	let prices = event.target.parentElement.parentElement.parentElement.children[1].children[2].textContent;
	let cartContain = document.querySelector('.showcase-wrap')
	cartContain. innerHTML = ` 
	<div class="showcase-wrap">
	<img src="${minCartImg.img}" alt="" class="case-img">
	</div> `
	let miniPrice = document.querySelector('.mini-price')	
	miniPrice.innerHTML = `<div class="price">GH<span>&cent;</span>${prices}</div>`			
})

});


minClose.addEventListener('click',()=>{
	let close = minClose.parentElement.parentElement.parentElement;
	close.style.display = 'none'
})






	
	
	
					



//===========================End=======================================================















