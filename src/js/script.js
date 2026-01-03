import '../sass/style.scss';

$(document).ready(function () {
  $('.members__img').addClass('open');
});
//アコーディオンをクリックした時の動作
$(document).ready(function() {
    $('.accordion__title, .accordion__door').click(function() {
      // アコーディオン（内容）の開閉    
    $(this).next('.accordion__hide').slideToggle(500);
      // タイトルにopenクラスを付与または削除してプラスマイナス可変
      $(this).toggleClass("open",700);
    });
  });
// ドロワーメニュー
$(function () {
  // ハンバーガーメニュー
  $(".js-hamberger, .js-grawer, .js-drawer a").click(function () {
      $(this).toggleClass("is-active");
      $(".sp-nav").toggleClass("is-active");
      $(".sp-nav").fadeIn(300); // ふわっと表示
    });
    $(".js-drawer a").click(function() {
        $(".js-hamberger").removeClass("is-active");
        $(".sp-nav").removeClass("is-active");
        $(".sp-nav").fadeOut(300); // ふわっと非表示
  });
});
//. mainvisual__textを非表示
$('.js-hamberger').on('click', function () {
  $('.main-visual__text').toggleClass('is-hidden');
    
});
// ドロワーメニュー内のリンクをクリックしたら main-visual__text を表示状態に戻す
$('.side-menu__nav a').on('click', function () {
  $('.main-visual__text').removeClass('is-hidden');
});


// Swiperの初期化
const swiper = new Swiper('.about__swiper', {
  loop: true,
  slidesPerView: 'auto',     // 画像の幅に合わせて連続に向く
  spaceBetween: 16,
  speed: 3000,               // 低いほどゆっくり（ミリ秒で1スライド分）
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  allowTouchMove: true,      // 触れば一時的に操作可能
  loopAdditionalSlides: 2,
  loopedSlidesLimit: false,
});

MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
});
// スクロールで見えなくするサイドメニュー
document.addEventListener('DOMContentLoaded', () => {
  const sideMenu = document.querySelector('.side-menu');
  const mainVisual = document.querySelector('.main-visual');

  if (!sideMenu || !mainVisual) return;

  const PC_WIDTH = 768;

  function updateSideMenuVisibility() {
    const isPc = window.innerWidth >= PC_WIDTH;

    // PC以外はJSで触らない（SPはハンバーガーの挙動優先）
    if (!isPc) {
      sideMenu.classList.remove('side-menu--hidden');
      return;
    }

    const scrollY = window.scrollY;

    // FVの下端（ここを超えたら非表示）
    const fvBottom = mainVisual.offsetTop + mainVisual.offsetHeight;

    const shouldHide = scrollY >= fvBottom;

    sideMenu.classList.toggle('side-menu--hidden', shouldHide);
  }

  window.addEventListener('scroll', updateSideMenuVisibility, { passive: true });
  window.addEventListener('resize', updateSideMenuVisibility);
  updateSideMenuVisibility();
});


//logoの表示
$(window).on('load', function () {
  $("#splash_logo").delay(1200).fadeOut('slow');

  $("#splash").delay(1500).fadeOut('slow', function () {
    // ローディング終了
    document.body.classList.remove('is-loading');
  });
});

