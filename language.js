// Функция для переключения языка
function toggleLanguage() {
    const languageSwitcher = document.getElementById('language-switcher');
    const currentLanguage = localStorage.getItem('language') || 'ru'; 

    if (currentLanguage === 'ru') {
        localStorage.setItem('language', 'en'); 
        languageSwitcher.textContent = 'RU';
        translateToEnglish(); 
    } else {
        localStorage.setItem('language', 'ru'); 
        languageSwitcher.textContent = 'EN';
        translateToRussian(); 
    }
}

function translateToEnglish() {
    // Общие элементы для всех страниц
    if (document.getElementById('nav-about')) {
        document.getElementById('nav-about').textContent = 'ABOUT';
        document.getElementById('nav-works').textContent = 'WORKS';
        document.getElementById('nav-shop').textContent = 'SHOP';
        document.getElementById('nav-links').textContent = 'LINKS';
        
    }

   if (document.getElementById('back')) {
        document.getElementById('back').textContent = 'BACK';
   }

    // Уникальные элементы для каждой страницы
    if (document.getElementById('greeting')) {
        document.getElementById('greeting').textContent = 'HELLO!';
        document.getElementById('name').textContent = 'My name is Artyom Lukin (lkn)';
        document.getElementById('description').textContent = 'I can write music, produce, create sounds and much more';
    }

    if (document.getElementById('text-games')) {
        document.getElementById('text-games').textContent = 'games';
        document.getElementById('text-artists').textContent = 'artists';
        document.getElementById('text-sfx').textContent = 'sfx';
    }

    if (document.getElementById('shop-text')) {
        document.getElementById('shop-text').textContent = 'Like the beats or sfx?';
        document.getElementById('shop-text-animation1').innerHTML = '⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>';
        document.getElementById('shop-text-animation2').innerHTML = '⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>⇒shop.shop.<br>';
    }

   if (document.getElementById('ashesrole')) {
        document.getElementById('vidsupport').textContent = 'Your browser does not support video.';
        document.getElementById('ashesrole').textContent = 'ROLE: NONE (REWORK / UNOFFICIAL VERSION)';
        document.getElementById('ashesinspiration').innerHTML = '<a id="ashesinspiration" href="https://www.supergiantgames.com/games/hades" target="_blank">INSPIRED BY: HADES</a>';
        document.getElementById('hadesoriginalcomposer').innerHTML = '<a id="hadesoriginalcomposer" href="https://en.wikipedia.org/wiki/Darren_Korb" target="_blank">ORIGINAL COMPOSER OF HADES: DARREN KORB</a>';
        document.getElementById('ashestext').textContent = 'ashes is one of my first works on which I spent a lot of time. I learned to think in mid/side, realized that the problem is not overloaded guitars and their sound, but badly mixed drums. All of my first jobs were important enough, but I am very proud of that work and of the way it sounds on headphones. At the first stages I did a lot of mixing in small Samsungs from aliexpress, not understanding at all how the mix sounds on a laptop and similar speakers, but I progressed a bit by bit and now I try to be careful with mastering.';
    }

   if (document.getElementById('cellsrole')) {
        document.getElementById('cellsrole').textContent = 'ROLE: NONE (REWORK / UNOFFICIAL VERSION)';
        document.getElementById('cellsinspiration').innerHTML = '<a id="cellsinspiration" href="https://dead-cells.com" target="_blank">INSPIRED BY: DEAD CELLS</a>';
        document.getElementById('deadcellsoriginaltrailer').innerHTML = '<a id="deadcellsoriginaltrailer" href="https://youtu.be/Eu3zfCDbRoU?si=GH_Kmflmc7B844rO" target="_blank">ORIGINAL TRAILER</a>';
        document.getElementById('cellstext1').textContent = 'This is my first rework, it started all my development in the field of music and sounds. The whole sound is reworked.';
        document.getElementById('cellstext2').innerHTML = 'All rights reserved by <a id="motiontwin" href="https://motiontwin.com" target="_blank">Motion Twin</a>.';
    }

    if (document.getElementById('peacefulrole')) {
        document.getElementById('peacefulrole').textContent = 'ROLE: NONE (REWORK / UNOFFICIAL VERSION)';
        document.getElementById('peacefulinspiration').innerHTML = '<a id="peacefulinspiration" href="https://en.wikipedia.org/wiki/Toby_Fox" target="_blank">INSPIRED BY: TOBY FOX GAMES</a>';
        document.getElementById('peacefultext').textContent= "It all started when I watched a video walkthrough of Undertale by Kuplinov Play, ended with my walkthrough of parts 1 and 2 of Deltarune. I like the fact that Toby Fox did a lot of things on his own, that's why I love indie developers, because you have to resort to such measures and develop in many directions";
    }

    if (document.getElementById('anxietyrole')) {
        document.getElementById('anxietyrole').textContent = 'ROLE: NONE (REWORK / UNOFFICIAL VERSION)';
        document.getElementById('anxietyinspiration').innerHTML = '<a id="anxietyinspiration" href="anxietyinspiration" target="_blank">INSPIRED BY: PROJECT ZOMBOID</a>';
        document.getElementById('anxietytext').innerHTML= "Apocalypse games have a great atmosphere for me, I can spend a ton of time building up my house, finding a cool car, trying to get into places where there are a thousand zombies and get cool loot. I spent most of my time playing with a friend, riding around in a car to funny tracks.<br><br> Love it.";
    }

    if (document.getElementById('psycherole')) {
        document.getElementById('psycherole').textContent = 'ROLE: PRODUCER';
        document.getElementById('psychetext').innerHTML= "My first work that was done with another artist, and the first work where my voice was used.<br>When I met <a id='rise' href='https://on.soundcloud.com/ibw6Ba6j8MpqJdoN9' target='_blank'>rise</a>, he let me listen to some hyperpop, Sqwore tracks, and somehow we are now trying to move forward together. That's how the track “psyche”  came about, which I love a lot for the breakcore part with amen break.";
    }

    if (document.getElementById('intotheabyssrole')) {
        document.getElementById('intotheabyssrole').textContent = 'ROLE: PRODUCER';
        document.getElementById('intotheabysstext').innerHTML= "<a id='rise' href='https://on.soundcloud.com/ibw6Ba6j8MpqJdoN9' target='_blank'>rise</a> and I originally had a plan to do something similar to fallen777angel. We like his voice, so we started. Of course it didn't turn out quite the way we planned, but I'm sure it's a good start to our creative path.";
    }

    if (document.getElementById('moonrole')) {
        document.getElementById('moonrole').textContent = 'ROLE: NONE (REWORK / UNOFFICIAL VERSION)';
        document.getElementById('mooninspiration').innerHTML = '<a id="mooninspiration" href="https://en.wikipedia.org/wiki/Sailor_Moon" target="_blank">INSPIRED BY: SAILOR MOON</a>';
        document.getElementById('moontext').innerHTML= "All rights to Sailor Moon are owned by <a id='mooninspiration' href='https://en.wikipedia.org/wiki/Naoko_Takeuchi' target='_blank'>Naoko Takeuchi</a>, <a id='moonpublisher' href='https://kodansha.us' target='_blank'>Kodansha Publishing</a> and <a id='moonstudio' href='https://en.wikipedia.org/wiki/Toei_Animation' target='_blank'>Toei Animation Studio</a>.";
    }

}

function translateToRussian() {
    // Общие элементы для всех страниц
    if (document.getElementById('nav-about')) {
        document.getElementById('nav-about').textContent = 'СВЕДЕНИЯ';
        document.getElementById('nav-works').textContent = 'РАБОТЫ';
        document.getElementById('nav-shop').textContent = 'МАГАЗИН';
        document.getElementById('nav-links').textContent = 'ССЫЛКИ';
    }

    if (document.getElementById('back')) {
        document.getElementById('back').textContent = 'НАЗАД';
   }

    // Уникальные элементы для каждой страницы
    if (document.getElementById('greeting')) {
        document.getElementById('greeting').textContent = 'ПРИВЕТ!';
        document.getElementById('name').textContent = 'Меня зовут Артём Лукин (lkn)';
        document.getElementById('description').textContent = 'Я умею писать музыку, продюсировать, создавать звуки и многое другое';
    }

    if (document.getElementById('text-games')) {
        document.getElementById('text-games').textContent = 'игры';
        document.getElementById('text-artists').textContent = 'исполнители';
        document.getElementById('text-sfx').textContent = 'звуковые эффекты';
    }

    if (document.getElementById('shop-text')) {
        document.getElementById('shop-text').textContent = 'Понравились биты или звуковые эффекты?';
        document.getElementById('shop-text-animation1').innerHTML = '⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.';
        document.getElementById('shop-text-animation2').innerHTML = '⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.<br>⇒МАГАЗИН.';
    }

    if (document.getElementById('ashesrole')) {
        document.getElementById('vidsupport').textContent = 'Ваш браузер не поддерживает видео.';
        document.getElementById('ashesrole').textContent = 'РОЛЬ : НЕТ (ПЕРЕРАБОТКА / НЕОФИЦИАЛЬНАЯ ВЕРСИЯ)';
        document.getElementById('ashesinspiration').innerHTML = '<a id="ashesinspiration" href="https://www.supergiantgames.com/games/hades" target="_blank">ВДОХНОВЛЕНО: HADES</a>';
        document.getElementById('hadesoriginalcomposer').innerHTML = '<a id="hadesoriginalcomposer" href="https://en.wikipedia.org/wiki/Darren_Korb" target="_blank">ОРИГИНАЛЬНЫЙ КОМПОЗИТОР HADES: DARREN KORB</a>';
        document.getElementById('ashestext').textContent = 'ashes - одна из моих первых работ над которой я провел огромное время. Научился думать в mid/side, понял что проблема не в перегруженных гитарах и их звучании, а в плохо сведенных барабанах. Все мои первые работы были достаточно важными, но я очень горжусь этой работой и за ее звучание в наушниках. На первых этапах я очень много свел в маленьких самсунгах с aliexpress, вообще не понимая как микс звучит на ноутбуке и подобных динамиках, но прогрессировал по чуть-чуть и щас стараюсь поосторожнее обходиться с мастерингом.';
    }

    if (document.getElementById('cellsrole')) {
        document.getElementById('cellsrole').textContent = 'РОЛЬ : НЕТ (ПЕРЕРАБОТКА / НЕОФИЦИАЛЬНАЯ ВЕРСИЯ)';
        document.getElementById('cellsinspiration').innerHTML = '<a id="cellsinspiration" href="https://dead-cells.com" target="_blank">ВДОХНОВЛЕНО: DEAD CELLS</a>';
        document.getElementById('deadcellsoriginaltrailer').innerHTML = '<a id="deadcellsoriginaltrailer" href="https://youtu.be/Eu3zfCDbRoU?si=GH_Kmflmc7B844rO" target="_blank">ОРИГИНАЛЬНЫЙ ТРЕЙЛЕР</a>';
        document.getElementById('cellstext1').textContent = 'Это моя первая переработка, с нее началось все мое развитие в сфере музыки и звуков. Переработан весь звук.';
        document.getElementById('cellstext2').innerHTML = 'Все права на видеоматериал принадлежат компании <a id="motiontwin" href="https://motiontwin.com" target="_blank">Motion Twin</a>.';
    }

    if (document.getElementById('peacefulrole')) {
        document.getElementById('peacefulrole').textContent = 'РОЛЬ : НЕТ (ПЕРЕРАБОТКА / НЕОФИЦИАЛЬНАЯ ВЕРСИЯ)';
        document.getElementById('peacefulinspiration').innerHTML = '<a id="peacefulinspiration" href="https://en.wikipedia.org/wiki/Toby_Fox" target="_blank">ВДОХНОВЛЕНО: ИГРЫ TOBY FOX</a>';
        document.getElementById('peacefultext').textContent= "Все началось с момента когда я смотрел видео-прохождение игры Undertale у Kuplinov Play, закончилось моим прохождением 1 и 2 частей Deltarune. Мне нравится, то, что Toby Fox сделал очень много в одиночку, именно из-за этого я люблю инди-разработчиков, потому что приходится прибегать к таким мерам и развиваться во многих направлениях.";
    }

    if (document.getElementById('anxietyrole')) {
        document.getElementById('anxietyrole').textContent = 'РОЛЬ : НЕТ (ПЕРЕРАБОТКА / НЕОФИЦИАЛЬНАЯ ВЕРСИЯ)';
        document.getElementById('anxietyinspiration').innerHTML = '<a id="anxietyinspiration" href="anxietyinspiration" target="_blank">ВДОХНОВЛЕНО: PROJECT ZOMBOID</a>';
        document.getElementById('anxiety').innerHTML= "Игры про апокалипсис имеют огромную атмосферность для меня, я могу тонну времени провести за тем что застраиваю свой домик, нахожу себе крутую тачку, пытаюсь пробраться в места где тысяча зомби и получить крутой лут. Основное время я наиграл вместе с другом, катаясь на тачке под смешные треки. <br><br>Обожаю.";
    }

    if (document.getElementById('psycherole')) {
        document.getElementById('psycherole').textContent = 'РОЛЬ: ПРОДЮССЕР';
        document.getElementById('psychetext').innerHTML= "Моя первая работа, которая была сделана вместе с другим исполнителем, и первая работа где использовался мой голос.<br>Когда я познакомился с <a id='rise' href='https://on.soundcloud.com/ibw6Ba6j8MpqJdoN9' target='_blank'>rise</a>, он дал мне послушать гиперпоп, треки Sqwore, и каким-то образом мы сейчас стараемся двигаться дальше вместе. Так получился трек ”психея”, который я во многом люблю за breakcore часть с amen break.";
    }

    if (document.getElementById('intotheabyssrole')) {
        document.getElementById('intotheabyssrole').textContent = 'РОЛЬ: ПРОДЮССЕР';
        document.getElementById('intotheabysstext').innerHTML= "У нас с <a id='rise' href='https://on.soundcloud.com/ibw6Ba6j8MpqJdoN9' target='_blank'>rise</a> изначально был план сделать что-то похожее на fallen777angel. Нам нравится его подача и мы приступили. Конечно получилось не совсем так, как мы планировали, но я уверен, что это хорошее начало нашего творческого пути.";
    }

    if (document.getElementById('moonrole')) {
        document.getElementById('moonrole').textContent = 'РОЛЬ : НЕТ (ПЕРЕРАБОТКА / НЕОФИЦИАЛЬНАЯ ВЕРСИЯ)';
        document.getElementById('mooninspiration').innerHTML = '<a id="mooninspiration" href="https://en.wikipedia.org/wiki/Sailor_Moon" target="_blank">ВДОХНОВЛЕНО: SAILOR MOON</a>';
        document.getElementById('moontext').innerHTML= "Все права на Сейлор Мун принадлежат <a id='mooninspiration' href='https://en.wikipedia.org/wiki/Naoko_Takeuchi' target='_blank'>Наоко Такэути</a>, издательству <a id='moonpublisher' href='https://kodansha.us' target='_blank'>Kodansha</a> и студии <a id='moonstudio' href='https://en.wikipedia.org/wiki/Toei_Animation' target='_blank'>Toei Animation</a>.";
    }

}

// При загрузке страницы проверяем текущий язык
document.addEventListener("DOMContentLoaded", function() {
    const currentLanguage = localStorage.getItem('language') || 'ru'; 
    const languageSwitcher = document.getElementById('language-switcher');

    if (currentLanguage === 'en') {
        languageSwitcher.textContent = 'RU';
        translateToEnglish();
    } else {
        languageSwitcher.textContent = 'EN';
        translateToRussian();
    }
});