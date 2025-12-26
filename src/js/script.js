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
document.addEventListener('DOMContentLoaded', function () {
  const sideMenu = document.querySelector('.side-menu');
  if (!sideMenu) return;

  // ★PC判定のブレイクポイント（プロジェクトに合わせて変更してください）
  const PC_WIDTH = 1024; // 例：1024px以上をPCとみなす
  const HIDE_SCROLL_Y = 989; // 989px以上スクロールしたら非表示

  function updateSideMenuVisibility() {
    const isPc = window.innerWidth >= PC_WIDTH;
    const hasScrolledPast = window.scrollY >= HIDE_SCROLL_Y;

    if (isPc && hasScrolledPast) {
      // PC かつ 989px 以上スクロール → aside を隠す
      sideMenu.classList.add('side-menu--hidden');
    } else {
      // それ以外（上に戻ってきた / SP幅など）→ aside を表示
      sideMenu.classList.remove('side-menu--hidden');
    }
  }

  // スクロールのたびにチェック
  window.addEventListener('scroll', updateSideMenuVisibility);
  // 画面サイズ変更時にもチェック（PC⇔SP切り替え用）
  window.addEventListener('resize', updateSideMenuVisibility);

  // 初期表示時にも一度実行（リロードで中途位置のとき用）
  updateSideMenuVisibility();
});


//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

