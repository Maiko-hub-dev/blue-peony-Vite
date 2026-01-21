
import "/src/sass/style.scss";
import "@sass/contact.scss";


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
  const $hamburger = $(".js-hamberger");
  const $drawerNav = $(".sp-nav");

  $hamburger.on("click", function () {
    $hamburger.toggleClass("is-active");
    $drawerNav.toggleClass("is-active");
  });

  $drawerNav.on("click", "a", function () {
    $hamburger.removeClass("is-active");
    $drawerNav.removeClass("is-active");
  });

  // 1120px以上になったら状態リセット（保険）
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 1120px)").matches) {
      $hamburger.removeClass("is-active");
      $drawerNav.removeClass("is-active");
    }
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
  if (!sideMenu) return;

  const PC_WIDTH = 1120;

  // ページごとのFV候補を順番に探す（見つかった最初の要素をFV扱い）
  const fv =
    document.querySelector('.main-visual') ||
    document.querySelector('.contact__side') ||
    document.querySelector('.about__side') ||
    document.querySelector('.service__side');

  // FVが無いページは、PCでは常に非表示（= is-top 付けない）
  if (!fv) {
    document.body.classList.remove('is-top');
    return;
  }

  function update() {
    if (window.innerWidth < PC_WIDTH) {
      document.body.classList.remove('is-top');
      return;
    }

    const fvBottom = fv.offsetTop + fv.offsetHeight;
    const isTop = window.scrollY < fvBottom;

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




//. お問い合わせフォーム
$(document).ready(function () {

      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfdZryH4JHiJMnxWmUb-LIQ2HQVnEfnYgeT1abMJK0VUQPaqw/viewform",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".submit-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
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

    //  ローディングが残り続ける時の保険
// window.addEventListener("load", () => {
//   const splash = document.getElementById("splash");
//   if (splash) splash.style.display = "none";
// });

// // さらに「JSが途中で死んだ」場合でも数秒後に消す保険
// setTimeout(() => {
//   const splash = document.getElementById("splash");
//   if (splash) splash.style.display = "none";
// }, 4000);
