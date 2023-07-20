'use strict';

let arrowsGallary = [
	'url("./images/List_2/arrow-left.svg")',
	'url("./images/List_2/arrow-right.svg")',
	'url("./images/List_2/arrow-left-black.png")',
	'url("./images/List_2/arrow-right-gray.png")'
];

let fotoGallary = [
	'url("./images/List_2/main.png")',
	'url("./images/List_2/main2.png")'
];

let nameGallary = [
	'Майк Майк Майк',
	'Джон Джон Джон',
	'Бил Бил Бил'
];

let firstParagraphGallary = [
	'Webtwo ipsum akismet bebo zlio chartly wufoo dogster hipmunk geni, kiko balihoo rovio imvu jaiku kno. Nuvvo palantir ning odeo, zlio doostang. Fleck geni oovoo glogster zooomr revver voxy chegg, ngmoco waze squidoo sclipo zapier handango. Jaiku qeyno zoho, ifttt.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.',
	'Newton xobni oooj jumo loopt heekya, oovoo cloudera voxy. squidoo kiko. Heekya vimeo blyve movity joukuu kazaa, reddit empressr zoho. Doostang scribd joukuu, hipmunk. Qeyno lanyrd grockit zanga udemy, tumblr twones.'
];

let secondParagraphGallary = [
	' Balihoo twitter dropio joost joukuu prezi, blippy nuvvo reddit. Doostang edmodo chumby edmodo, wufoo imeem. Hojoki spock fleck imeem handango spotify, eduvant revver napster.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.',
	'ifttt mzinga mobly. yammer jumo. Squidoo movity woopra twitter disqus meebo, joost doostang scribd fleck. Joyent gooru oovoo revver squidoo, imvu shopify. kno stypi mzinga.'
];

let feedbackTextBottomGallary = [
	'Изготовление бани',
	'Изготовление каркасного дома с балконом',
	'Изготовление беседок и хоз. построек'
	];


let index = 1,
	feedbackNumber = 1;

const 
	leftArrowList2 = document.getElementById("List-2_leftArrow"),
	rightArrowList2 = document.getElementById("List-2_rightArrow"),
	pageNumberContent = document.getElementById("pageNumber"),
	leftPanelImage = document.querySelector(".list-2__header_left-panel"),
	rightPanelImage = document.querySelector(".list-2__header__right-panel"),
	rightPanelHeader = document.getElementById("rightPanelHeader"),
	pochtaBankLogo = document.querySelector(".pochtaBank"),
	leftArrowList3 = document.querySelector(".list-3__main__top_left-vector"),
	rightArrowList3 = document.querySelector(".list-3__main__top_right-vector"),
	leftArrowBottomList3 = document.querySelector(".left-vector-bottom"),
	rightArrowBottomList3 = document.querySelector(".right-vector-bottom"),
	feedbackName = document.querySelector(".list-3__main__top__feedback__name"),
	feedbackFirstParagraph = document.querySelector(".list-3__main__top__feedback__first-paragraph"),
	feedbackSecondParagraph = document.querySelector(".list-3__main__top__feedback__second-paragraph"),
	feedbacBottomText = document.querySelector(".list-3__main__top__feedback__text-bottom");


leftArrowList2.addEventListener("click", () => {
	let windowInnerWidth = window.innerWidth;
	if (index != 1) {
		leftArrowList2.style.backgroundImage = (arrowsGallary[0]);
		rightArrowList2.style.backgroundImage = (arrowsGallary[1]);
		pageNumberContent.textContent  = "1/2";
		rightPanelHeader.innerHTML = "Мы работаем c<span> материнским капиталом!</span>";
		pochtaBankLogo.style.display = "none";
		if (windowInnerWidth <= 600) {
			leftPanelImage.style.display = "none";
			rightPanelImage.style.backgroundImage = (fotoGallary[0]);
	  } else {
	  	 leftPanelImage.style.backgroundImage = (fotoGallary[0]);
	  }
	index = 1;
	}
});


rightArrowList2.addEventListener("click", () => {
	let windowInnerWidth = window.innerWidth;
	if (index == 1) {
		leftArrowList2.style.backgroundImage = (arrowsGallary[2]);
		rightArrowList2.style.backgroundImage = (arrowsGallary[3]);
		pageNumberContent.textContent  = "2/2";
		rightPanelHeader.innerHTML = "Строим <span> бани, беседки, бытовки и дома в кредит!</span>";
		if (windowInnerWidth <= 600) {
			rightPanelImage.style.backgroundImage = (fotoGallary[1]);
	  		pochtaBankLogo.style.display = "none";
	  	} else {
	  		leftPanelImage.style.backgroundImage = (fotoGallary[1]);
	  		pochtaBankLogo.style.display = "block";
	   	leftPanelImage.style.display = "block";
	   	rightPanelImage.style.backgroundImage = "";
	  	};
	index = 2;
	};
});


window.onresize = function(event) {
	let windowInnerWidth = window.innerWidth;
	if (windowInnerWidth > 600) {
		leftPanelImage.style.display = "block";
		rightPanelImage.style.backgroundImage = "";
 	} else if (windowInnerWidth <= 600) {
 		leftPanelImage.style.display = "none";
 		pochtaBankLogo.style.display = "none";
 	};
};


function feedBackChange(feedbackNumber) {
		feedbackName.textContent = nameGallary[feedbackNumber];
		feedbackFirstParagraph.textContent = firstParagraphGallary[feedbackNumber];
		feedbackSecondParagraph.textContent = secondParagraphGallary[feedbackNumber];
		feedbacBottomText.textContent = feedbackTextBottomGallary[feedbackNumber];
};


[leftArrowList3, leftArrowBottomList3].forEach(function(elem) {
	elem.addEventListener("click", () => {
		if (feedbackNumber >= 0) {
		  feedbackNumber = (feedbackNumber > 0) ? (feedbackNumber - 1) : 0;
		  feedBackChange(feedbackNumber);
		};
	});
});


[rightArrowList3, rightArrowBottomList3].forEach(function(elem) {
	elem.addEventListener("click", () => {
		if (feedbackNumber <= (nameGallary.length - 1)) {
		  feedbackNumber = (feedbackNumber < (nameGallary.length - 1)) ? (feedbackNumber + 1) : (nameGallary.length - 1);
		  feedBackChange(feedbackNumber);
		};
	});
});


let cards = [
{
	cardName: 'block-1',
	cardTextTop: 'Работаем строго по договору',
	cardTextBottom: 'Стоимость строительсва фиксированная. <br> И все наши обязательства прописаны в договоре.</p>'
},
{
	cardName: 'block-2',
	cardTextTop: 'Фотоотчет процесса строительства',
	cardTextBottom: 'Бесплатный фото или видео отчет (по договорённости).'
},
{
	cardName: 'block-3',
	cardTextTop: 'Честная цена и понятные условия',
	cardTextBottom: 'Поэтапная оплата. Нет скрытых платежей и мелких шрифтов.'
},
{
	cardTextTop: 'Более 7 лет опыта',
	cardTextBottom: 'Современное и качественное строительство, опытными бригадами.'
},
{
	cardTextTop: 'Выставка и собственное производство',
	cardTextBottom: 'Лучшее соотношение цены и качества. К нам возвращаются наши клиенты и рекомендуют своим знакомым.'
},
{
	cardName: 'block-6',
	cardTextTop: 'Экологически чистый материал',
	cardTextBottom: 'Сертифицированные, экологичные материалы от проверенных поставщиков.'
},
{
	cardName: 'block-7',
	cardTextTop: 'Гарантийное обслуживание <br> любой постройки',
	cardTextBottom: 'Даем гарантию не на словах.'
},
{
	cardName: 'block-8',
	cardTextTop: 'Индивидуальные проекты',
	cardTextBottom: 'Возможны изменения проектов из каталога и строительство по индивидуальным планам.'
},
];

const leftBlockElements = document.querySelector(".list-2__main__blocks__left-blocks"),
	rightBlockElements = document.querySelector(".list-2__main__blocks__right-blocks");

for (let i = 0; i <= cards.length - 1; i++) {
  let card = document.cardsElement,
  newElement = document.createElement('div');

  newElement.innerHTML = 
    `<div class="list-2__main__blocks__left-blocks__block block-${i + 1}"><div class="list-2__main__blocks__left-blocks__block_top-img block-1_header"></div>
    <div class="list-2__main__blocks__left-blocks__block_info">
    <div class="list-2__main__blocks__left-blocks__block_text">
    <p class="list-2__main__blocks__left-blocks__block_text-top">${cards[i].cardTextTop}</p>
    <p class="list-2__main__blocks__left-blocks__block_text-bottom">${cards[i].cardTextBottom}</p></div>
	<div class="list-2__main__blocks__left-blocks__block_bottom-img block-${i + 1}_bottom"></div>
                </div`;

  if (i <= (cards.length / 2 - 1).toFixed(0)) { 
  	leftBlockElements.append(newElement);
  } else {
  	rightBlockElements.append(newElement);
  };
};



let topButton = document.querySelector('.topbutton');

function showTopButton (topButton) {
	topButton.style.opacity = '1';
};

function hideTopButton (topButton) {
	topButton.style.opacity = '0.1';
};


window.addEventListener('scroll', function() {
		showTopButton (topButton)
		setTimeout(hideTopButton, 2500, topButton);
});


topButton.addEventListener('mousemove', function() {
		showTopButton (topButton);
});

topButton.addEventListener('mouseleave', function() {
	hideTopButton (topButton);
});