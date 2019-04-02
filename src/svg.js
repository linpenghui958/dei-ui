(function (window) {
  var svgSprite = '<svg><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M930.2 533.353L930.2 866.2 94.8 866.2 94.8 533.353 65 533.353 65 866.2 65 896 94.8 896 930.2 896 960 896 960 866.2 960 533.353Z"  ></path><path d="M512.008 677.013L533.077 655.943 722.717 466.303 701.647 445.233 526.66 620.221 526.66 128.047 497.325 128.047 497.325 620.192 322.367 445.233 301.283 466.303 490.938 655.943Z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1025 1024"><path d="M511.73466172 690.23515625c17.41359375-17.91421875 34.19296875-35.16046875 50.956875-52.4221875 117.06609375-120.54796875 234.20671875-241.0228125 351.095625-361.74234375 14.67703125-15.15796875 36.63140625-11.48765625 45.19546875 5.5659375 5.58984375 11.131875 3.31171875 23.82890625-5.968125 33.38578125-40.91625 42.14109375-81.84375 84.2709375-122.76421875 126.40921875-99.03234375 101.9784375-198.0590625 203.9625-297.09703125 305.9353125-13.41140625 13.809375-28.92375 13.7925-42.38578125-0.0675C350.80763047 603.1925 210.86044297 459.074375 70.90903672 314.9590625c-8.060625-8.2996875-10.92515625-18.0421875-7.46578125-29.16703125 3.23015625-10.389375 10.38234375-16.94671875 21.12328125-19.00125 9.8915625-1.89140625 18.07171875 1.66640625 24.96515625 8.775 29.401875 30.3215625 58.843125 60.6065625 88.26890625 90.90421875 103.46484375 106.53328125 206.93109375 213.0665625 310.38609375 319.61109375C509.34122422 687.2721875 510.34809922 688.60390625 511.73466172 690.23515625z"  ></path></symbol><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M521.9 312.48125l-19.35 0c-11.925 0-21.65625 9.73125-21.65625 21.7125l0 240.24375c0 11.98125 9.675 21.825 21.65625 21.825l19.35 0c12.0375 0 21.76875-9.84375 21.76875-21.825l0-240.24375C543.66875 322.2125 533.9375 312.48125 521.9 312.48125zM512.05625 93.10625c-231.4125 0-418.95 187.5375-418.95 418.95 0 231.1875 187.5375 418.8375 418.95 418.8375 231.24375 0 418.95-187.65 418.95-418.8375C931.00625 280.64375 743.3 93.10625 512.05625 93.10625zM508.23125 878.69375c-201.31875 0-364.44375-163.18125-364.44375-364.5 0-201.375 163.125-364.44375 364.44375-364.44375 201.4875 0 364.55625 163.06875 364.55625 364.44375C872.7875 715.5125 709.71875 878.69375 508.23125 878.69375zM520.6625 672.2l-18.1125 0c-11.925 0-21.65625 9.73125-21.65625 21.9375l0 22.78125c0 12.0375 9.675 21.88125 21.65625 21.88125l18.1125 0c12.0375 0 21.76875-9.84375 21.76875-21.88125l0-22.78125C542.43125 681.875 532.75625 672.2 520.6625 672.2z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M301.812 510.388c0 17.766-14.404 32.153-32.153 32.153h-162.877c-17.766 0-32.153-14.389-32.153-32.153 0-17.748 14.389-32.153 32.153-32.153h162.877c17.748 0 32.153 14.404 32.153 32.153z"  ></path><path d="M948.383 510.388c0 17.766-14.389 32.153-32.153 32.153h-162.877c-17.748 0-32.153-14.389-32.153-32.153 0-17.748 14.404-32.153 32.153-32.153h162.877c17.766 0 32.153 14.404 32.153 32.153z"  ></path><path d="M543.659 105.664v162.877c0 17.766-14.389 32.153-32.153 32.153s-32.153-14.389-32.153-32.153v-162.877c0-17.766 14.389-32.153 32.153-32.153 17.766 0 32.153 14.389 32.153 32.153z"  ></path><path d="M543.659 752.236v162.892c0 17.748-14.389 32.153-32.153 32.153s-32.153-14.404-32.153-32.153v-162.892c0-17.748 14.389-32.153 32.153-32.153 17.766 0 32.153 14.404 32.153 32.153z"  ></path><path d="M329.932 405.486c-5.947 10.322-16.77 16.077-27.86 16.077-5.465 0-10.996-1.383-16.061-4.308l-141.045-81.478c-15.371-8.89-20.627-28.553-11.753-43.924 8.89-15.385 28.553-20.643 43.924-11.769l141.045 81.478c15.371 8.89 20.643 28.553 11.753 43.924z"  ></path><path d="M889.799 728.941c-5.964 10.304-16.77 16.077-27.877 16.077-5.45 0-10.979-1.397-16.045-4.327l-141.045-81.478c-15.371-8.877-20.643-28.553-11.753-43.924 8.877-15.385 28.553-20.643 43.924-11.753l141.045 81.478c15.371 8.877 20.627 28.553 11.753 43.924z"  ></path><path d="M741.809 176.035l-81.478 141.027c-5.947 10.304-16.77 16.077-27.877 16.077-5.45 0-10.979-1.397-16.045-4.327-15.385-8.877-20.643-28.539-11.753-43.924l81.478-141.027c8.877-15.385 28.539-20.643 43.924-11.769 15.371 8.89 20.643 28.553 11.753 43.939z"  ></path><path d="M418.372 735.885l-81.478 141.045c-5.964 10.304-16.77 16.077-27.877 16.077-5.465 0-10.996-1.397-16.061-4.327-15.371-8.89-20.643-28.553-11.753-43.924l81.478-141.045c8.89-15.371 28.553-20.627 43.924-11.753 15.385 8.89 20.643 28.553 11.769 43.924z"  ></path><path d="M406.716 328.75c-5.047 2.925-10.579 4.308-16.027 4.308-11.125 0-21.931-5.772-27.877-16.093l-81.397-141.074c-8.877-15.385-3.601-35.047 11.783-43.924s35.047-3.601 43.924 11.783l81.381 141.074c8.877 15.385 3.601 35.047-11.783 43.924z"  ></path><path d="M729.815 888.826c-5.063 2.909-10.597 4.308-16.045 4.308-11.108 0-21.931-5.772-27.877-16.093l-81.381-141.091c-8.877-15.385-3.601-35.047 11.783-43.924 15.371-8.877 35.033-3.585 43.906 11.783l81.397 141.091c8.877 15.385 3.601 35.047-11.783 43.924z"  ></path><path d="M878.144 336.001l-141.074 81.397c-5.063 2.909-10.597 4.308-16.045 4.308-11.108 0-21.931-5.772-27.877-16.093-8.877-15.385-3.601-35.047 11.783´-43.924l141.091-81.397c15.371-8.859 35.033-3.585 43.906 11.783 8.877 15.385 3.601 35.047-11.783 43.924z"  ></path><path d="M318.083 659.102l-141.091 81.381c-5.047 2.925-10.579 4.308-16.027 4.308-11.125 0-21.931-5.772-27.877-16.093-8.877-15.385-3.601-35.047 11.783-43.924l141.074-81.381c15.385-8.877 35.047-3.601 43.924 11.783s3.601 35.047-11.783 43.924z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M877.216 491.808M297.952 949.984c-12.512-12.512-13.248-31.872-2.048-43.776l376.48-376.512c16.16-15.328 16.096-19.328 0-35.424L295.904 117.824C284.672 105.92 285.44 86.56 297.952 74.048c12.736-12.736 32.608-13.44 44.448-1.632l418.176 418.176c5.152 5.152 7.456 11.84 7.872 18.784l0 5.248c-0.448 6.944-2.752 13.632-7.872 18.784L342.4 951.616C330.56 963.392 310.656 962.688 297.952 949.984z"  ></path></symbol><symbol id="i-setting" viewBox="0 0 1024 1024"><path d="M943.3506059 415.22055669c-0.24840207-19.62378187-14.53153516-36.01833438-33.90691495-38.99916166l-55.1453121-8.56987937-15.0283393-28.81466702 31.79549552-52.90969103c9.31508679-15.52514465 7.07946572-35.52153023-5.58905207-48.56265053L766.23976129 134.8985536c-13.16532193-13.6621273-33.65851287-16.27035087-49.8046621-6.33425829l-54.27590425 33.28590916-24.34342608-14.40733352-14.77993722-61.10696789c-4.3470405-18.13336822-20.3689893-30.92608766-38.99916167-30.92608766L439.96333124 55.4098154c-18.63017358 0-34.65212238 12.79271822-38.99916166 30.92608766L386.18423114 147.31866931l-24.34342608 14.40733352-54.27590425-33.16170752c-16.14615043-9.93609258-36.63934017-7.32786779-49.8046621 6.33425829l-98.98831964 102.34175062c-12.66851779 13.0411215-14.90413887 33.03750709-5.58905207 48.56265053l31.79549552 52.90969103-15.0283393 28.81466703-55.14531211 8.56987936c-19.3753798 2.98082729-33.65851287 19.49958144-33.90691494 38.99916166l-2.23562108 139.10529123c-0.24840207 16.89135665 10.18449465 32.29229966 25.95804138 38.25395545l66.57181832 25.08863352 10.30869629 23.1014145-34.27951865 51.91608154c-10.55709836 16.02194879-8.32147729 37.38454759 5.46485043 50.7982716l102.96275641 100.851337c13.53792565 13.16532193 34.65212238 15.15254094 50.42566789 4.71964421l49.55626003-33.03750709 27.44845502 12.42011572 9.6876905 60.23755883c3.10502893 19.25117937 19.3753798 33.53431123 38.87496124 33.53431123l161.21309745 0c19.49958144 0 35.89413274-14.28313308 38.87496124-33.53431123l9.68769051-60.48596212 27.44845502-12.42011572 49.55626003 33.03750709c15.64934508 10.43289671 36.88774224 8.44567893 50.42566788-4.71964421l102.96275642-100.85133699c13.78632772-13.41372401 16.02194879-34.77632281 5.46485043-50.79827161l-34.27951866-51.91608153 10.30869629-23.10141451 66.57181833-25.08863351c15.77354672-5.96165579 26.20644345-21.36259879 25.95804137-38.25395546L943.3506059 415.22055669zM827.96773376 568.60898099c-9.93609258 3.72603472-18.13336822 11.42650622-22.48040873 21.23839716l-16.0219488 35.89413274c-5.58905207 12.66851779-4.47124093 27.0758513 3.10502894 38.50235753l32.16809922 48.56265051-86.07139976 84.20838241-46.45123109-30.92608765c-11.6749083-7.7004715-26.20644345-8.94248308-38.87496124-3.10502893L611.48512378 781.98656326c-12.29591408 5.58905207-20.86579344 16.51875294-23.10141452 29.80827653l-8.94248307 55.89051953L444.55877381 867.68535932l-8.94248307-55.89051953c-2.11141942-13.28952357-10.68129879-24.46762772-23.10141452-30.0566786l-41.85578852-18.87857565c-12.66851779-5.83745414-27.32425338-4.59544257-38.87496124 3.22923057l-46.45123109 30.92608767-86.07139976-84.20838241 32.16809922-48.56265053c7.57626986-11.55070786 8.81828144-25.95804138 3.10502894-38.50235753L218.51267497 589.84737815c-4.3470405-9.68769051-12.54431615-17.38816202-22.48040873-21.23839716l-62.72158196-23.59821865 1.86301735-116.74908414 50.30146746-7.82467314c12.54431615-1.987219 23.47401823-9.81189093 29.4356728-21.11419552l22.23200665-42.47679431c6.45845994-12.29591408 5.96165579-27.32425338-1.11780992-39.24756496l-30.18088023-50.30146745 83.21477291-85.94719813 51.79188109 31.67129388c12.66851779 7.82467314 28.56626495 7.94887358 41.35898439 0.37260371l37.13614431-21.85940294c9.31508679-5.46485043 16.14615043-14.77993723 18.63017358-25.33703559l13.53792565-56.01471995 121.34452671 0 13.53792565 56.01471995c2.48402315 10.43289671 9.31508679 19.74798351 18.63017359 25.21283395l37.1361443 21.98360458c12.79271822 7.57626986 28.69046659 7.45206943 41.35898438-0.37260371l51.79188111-31.67129388 83.21477291 85.94719813L788.09916423 317.47424985c-7.20366736 11.92331037-7.57626986 26.95165087-1.11780993 39.24756494l22.23200666 42.47679432c5.83745414 11.17810415 16.89135665 19.12697773 29.4356728 21.11419551l50.30146747 7.82467315 1.86301735 116.74908414L827.96773376 568.60898099z"  ></path><path d="M512 362.55926773c-69.80104769 0-126.68517671 56.88412782-126.68517671 126.68517672 0 69.80104769 56.88412782 126.68517671 126.68517671 126.68517671 69.80104769 0 126.68517671-56.88412782 126.68517671-126.68517671C638.68517671 419.44339676 581.92524933 362.55926773 512 362.55926773zM512 561.28111321c-39.7443691 0-72.03666876-32.29229966-72.03666876-72.03666876 0-39.7443691 32.29229966-72.03666876 72.03666876-72.03666876 39.7443691 0 72.03666876 32.29229966 72.03666876 72.03666876C584.03666876 528.98881355 551.7443691 561.28111321 512 561.28111321z"  ></path></symbol><symbol id="i-thunms-up" viewBox="0 0 1024 1024"><path d="M916.16853333 424.03626667c-22.03733333-27.78666667-55.024-43.72266667-90.496-43.72266667l-201.96266666 0c11.02933333-30.752 18.32533333-64.176 20.92266666-96.512 4.03733333-50.29013333-3.696-94.95466667-22.352-129.168-22.96533333-42.09066667-62.05866667-68.34346667-113.06346666-75.92213333-23.10613333-3.43466667-42.97813333 1.008-59.0688 13.1968-32.528 24.64213333-38.49813333 71.536-45.41333334 125.83466666-5.52746667 43.4048-11.792 92.6048-32.84266666 127.8688-14.05013333 23.536-41.39413333 54.82346667-116.3648 54.82346667l-78.23466667 0c-52.09813333 0-94.48533333 42.37013333-94.48533333 94.448l0 357.07093333c0 52.07466667 42.38613333 94.448 94.48533333 94.448l569.9584 0c25.952 0 51.43466667-8.88 71.76-24.992 20.33066667-16.11733333 34.77866667-38.90666667 40.688-64.16533333l78.42133333-335.21493333C946.1952 487.52426667 938.18986667 451.80693333 916.16853333 424.03626667zM145.78346667 851.9552L145.78346667 494.8864c0-17.35466667 14.13546667-31.472 31.50613333-31.472l66.3808 0 0 420.0128-66.3808 0C159.92 883.4272 145.78346667 869.30986667 145.78346667 851.9552zM876.79786667 507.6864l-78.42133334 335.22346667c-5.57866667 23.85066667-26.60266667 40.51733333-51.12533333 40.51733333L306.6496 883.4272 306.6496 458.84693333c53.20213333-10.15466667 93.22666667-37.248 119.31733333-80.95466666 27.78666667-46.54933333 34.93333333-102.67413333 41.23946667-152.192 2.848-22.37546667 5.5392-43.50933333 9.81333333-59.72266667 4.58346667-17.3888 9.328-22.48533333 11.15413334-23.8688 2.09066667-1.584 6.05546667-1.95733333 11.78666666-1.104 31.58933333 4.69333333 53.52 19.01866667 67.02933334 43.7888 27.72266667 50.81813333 15.472 136.5888-10.94933334 195.05066667-6.32533333 14.00213333-5.152 30.0448 3.15733334 42.91413333 8.29866667 12.85546667 22.41066667 20.53013333 37.75466666 20.53013333l228.71893334 0c16.13333333 0 31.13066667 7.2448 41.152 19.87946667C876.82986667 475.7856 880.4672 492.01173333 876.79786667 507.6864z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M485.6328125 90.125C267.20703125 90.125 90.125 267.20703125 90.125 485.6328125S267.20703125 881.140625 485.6328125 881.140625 881.140625 704.05859375 881.140625 485.6328125 704.05859375 90.125 485.6328125 90.125zM512 722.9375L459.265625 722.9375 459.265625 406.53125l52.734375 0L512 722.9375zM512 353.796875L459.265625 353.796875 459.265625 248.328125l52.734375 0L512 353.796875z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1025 1024"><path d="M333.764 511.735c17.914 17.414 35.161 34.193 52.422 50.957 120.549 117.066 241.023 234.206 361.742 351.096 15.157 14.677 11.487 36.631-5.566 45.195-11.132 5.59-23.828 3.311-33.38599999-5.968-42.14100001-40.916-84.271-81.844-126.41000001-122.764-101.978-99.033-203.963-198.058-305.935-297.097-13.809-13.411-13.79200001-28.924 0.067-42.385 144.107-139.959 288.225-279.907 432.34-419.858 8.3-8.061 18.042-10.925 29.168-7.465 10.389 3.23 16.94599999 10.383 19.001 21.125 1.892 9.892-1.666 18.072-8.775 24.966-30.322 29.402-60.607 58.843-90.905 88.268-106.534 103.465-213.067 206.932-319.61100001 310.386-1.191 1.155-2.52299999 2.161-4.154 3.548z"  ></path></symbol></svg>';
  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1]
  }();
  if (!script) {
    return
  };
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn()
        };
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document, done = false, init = function () {
        if (!done) {
          done = true;
          fn()
        }
      };
      var polling = function () {
        try {
          d.documentElement.doScroll("left")
        } catch (e) {
          setTimeout(polling, 50);
          return
        }
        init()
      };
      polling();
      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init()
        }
      }
    }
  };
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  };
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)
