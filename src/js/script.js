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
  const $hamburger = $(".js-hamberger");
  const $drawer = $(".js-drawer");     // ← HTMLと一致させる
  const $drawerNav = $(".sp-nav");     // sp-nav全体を開閉するならこれでもOK

  // ハンバーガーで開閉
  $hamburger.on("click", function () {
    $hamburger.toggleClass("is-active");
    $drawerNav.toggleClass("is-active");
  });

  // ドロワー内リンクを押したら閉じる
  $drawer.on("click", "a", function () {
    $hamburger.removeClass("is-active");
    $drawerNav.removeClass("is-active");
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
  const fv = document.querySelector('.main-visual'); // FV要素
  const PC_WIDTH = 768;

  // 下層ページなどで .main-visual が無い場合：常に非表示（= is-top を付けない）
  if (!fv) return;

  function update() {
    if (window.innerWidth < PC_WIDTH) {
      document.body.classList.remove('is-top');
      return;
    }

    const fvBottom = fv.offsetTop + fv.offsetHeight;
    const isTop = window.scrollY < fvBottom; // FV内だけ true

    document.body.classList.toggle('is-top', isTop);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});


//logoの表示
$(window).on('load', function () {
  $("#splash_logo").delay(1200).fadeOut('slow');

  $("#splash").delay(1500).fadeOut('slow', function () {
    // ローディング終了
    document.body.classList.remove('is-loading');
  });
});

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const titles = document.querySelector(".main-visual__titles");

  // ローディングが消えたあと少し待つ
  setTimeout(() => {
    splash.classList.add("is-hidden");
    titles.classList.add("is-show");
  }, 500); // ← ローディング演出に合わせて調整
});
