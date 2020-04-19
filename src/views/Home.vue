<template>
  <div>
    <!-- change here class to "top-navigation sticky opened" to show mobile menu -->
    <nav :class="{'elevated': scrolled}" v-on="{handleScroll}" class="top-navigation sticky">
        <div class="logo">
            <img src="../assets/images/logo-natlex-e.svg" alt="Emblem" class="emblem">
            <img src="../assets/images/logo-natlex-t.svg" alt="Natlex" class="name">
        </div>
        <div class="nav-box">            
            <div class="ui toggle checkbox checked">
                <input type="checkbox" tabindex="0" class="hidden">
                <label><span class="ui label hidden">Light mode On/Off</span></label>
            </div>
            <div class="ui large secondary inverted text menu menu-list">
                <a class="menu-item" href="#about">{{$t('menu-about')}}</a>
                <a class="menu-item" href="#partners">{{$t('menu-partners')}}</a>
                <a class="menu-item" href="#tech">{{$t('menu-technology')}}</a>
                <a class="menu-item" href="#values">{{$t('menu-values')}}</a>
                <a class="menu-item" href="#jobs">{{$t('menu-vacancies')}}</a>
                <a class="menu-item" href="#contacts">{{$t('menu-contacts')}}</a>
            </div>
            <div class="ui tiny menu lang-list">
                <div class="ui simple dropdown item">
                    {{ currentLang.label }}
                    <i class="dropdown icon"></i>
                    <ul class="menu">
                        <li class="item" 
                            v-for="(lang, index) in langs" :key="index" 
                            :class="{active: currentLang.locale == lang.locale}"
                            @click="changeLang(lang.locale)"
                        >
                            {{ lang.label }}
                        </li>
                    </ul>
                </div>
            </div>
            <button type="button" class="menu-toggler">
                <i class="content icon"></i>
                <i class="close icon"></i>
            </button>  
        </div>
    </nav>
    
    <header>
        <div class="wrapper section-top">
            <div class="people">
                <img src="../assets/images/bg-people-s1.svg" alt="Natlex people">
            </div>
            <div class="text">
                <h1>{{$t('slogan1')}}<br><span class="highlight">{{$t('slogan2')}}</span></h1>
                <div class="button-gradborder-wrap"><a href="#" class="teaser-button ">{{$t('button-learn-more')}}</a></div>            
            </div>
        </div>
        <div class="wrapper section-bottom">
            <div class="ui content container">
                <div class="ui stackable two column grid">
                    <div class="four wide computer sixteen wide tablet column">
                        <div class="aligner">
                            <p class="text-create">{{$t('we-create')}}</p>
                            <p class="header-business">{{$t('business-strong')}}</p>
                        </div>
                    </div>
                    <div class="twelve wide computer sixteen wide tablet column">
                        <div class="ui stackable two column grid">
                            <div class="column">
                                <figure class="ui segment flex">
                                    <img src="../assets/images/icon-s1-hook.svg" alt="" class="work-cards ui small image">
                                    <figcaption>
                                        <h3 class="activity-type">{{$t('activity1-h')}}</h3>
                                        <p class="activity-text">
                                        {{$t('activity1-text-1')}}<br>
                                        {{$t('activity1-text-2')}}<br>
                                        {{$t('activity1-text-3')}}</p>                                    
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="column">
                                <figure class="ui segment flex">
                                    <img src="../assets/images/icon-s1-tunnel.svg" alt="" class="work-cards ui small image">
                                    <figcaption>
                                        <h3 class="activity-type">{{$t('activity2-h')}}</h3>                                    
                                        <p class="activity-text">
                                            {{$t('activity2-text-1')}}<br>
                                            {{$t('activity2-text-2')}}<br>
                                            {{$t('activity2-text-3')}}</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="column">
                                <figure class="ui segment flex">
                                    <img src="../assets/images/icon-s1-sensor.svg" alt="" class="work-cards ui small image">
                                    <figcaption>
                                        <h3 class="activity-type">{{$t('activity3-h')}}</h3>                                    
                                        <p class="activity-text">
                                            {{$t('activity3-text-1')}}<br>
                                            {{$t('activity3-text-2')}}<br>
                                            {{$t('activity3-text-3')}}</p>                                    
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="column">
                                <figure class="ui segment flex">
                                    <img src="../assets/images/icon-s1-network.svg" alt="" class="work-cards ui small image">
                                    <figcaption>
                                        <h3 class="activity-type">{{$t('activity4-h')}}</h3>                                    
                                        <p class="activity-text">
                                            {{$t('activity4-text-1')}}<br>
                                            {{$t('activity4-text-2')}}<br>
                                            {{$t('activity4-text-3')}}</p>  
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <article id="about" class="about">
            <h2 class="header-about">{{$t('who-we-are')}}</h2>

                <section class="ui center aligned text container">
                    <div class="ui divider"></div>
                    <p class="text-about-1">{{$t('text-about-1')}}</p>
                    <div class="ui divider"></div>
                </section>

                <section class="ui center aligned text container">
                    <p class="text-about-2">{{$t('text-about-2')}}</p>
                </section>

                <section class="ui text container">
                    <h3 class="header-short-about">{{$t('short-about')}}</h3>
                    <div class="ui stackable two column grid">
                        <div class="column">
                            <p>{{$t('few-words-1')}}</p>
                            <p>{{$t('few-words-2')}}</p>
                            <p>{{$t('few-words-3')}}</p>
                        </div>
                        <div class="column">
                            <p>{{$t('few-words-4')}}</p>
                            <p>{{$t('few-words-5')}}</p>
                            <p>{{$t('few-words-6')}}</p>
                        </div>
                    </div>
                </section>
                <div class="know-button ">
                    <a href="#" class="ntx-button rounded outlined inverted">{{$t('button-join')}}</a>
                </div>
        </article>

        <article id="partners" class="partner">
            <h2 class="header-partner">{{$t('partner-h')}}</h2>
            <div class="ui center aligned text container">
                <img src="../assets/images/logo-s3-itc.svg" alt="ITC">
                <p class="text-partner"> 
                    <a id="ITC" href="https://www.itc-engineering.com/">ITC Engineering</a>
                     {{$t('partner-description1')}}
                     <br> <br>
                    {{$t('partner-description2')}}
                </p>
            </div>
        </article>

        <article class="double">
            <section id="world" class="world">
                <h2 class="ui center aligned header">
                    {{$t('world1-h')}} <br>
                    {{$t('world2-h')}}</h2>
                <div class="map-wrapper">
                    <div class="map-detail">
                        <div class="map-detail-item flex">
                            <div class="map-detail-item__icon big-mark">
                                <img src="../assets/images/icon-map-devcenter.svg" alt="">
                            </div>
                            <div>
                                <div class="map-detail-item__title">{{$t('map-legend1-h')}}</div>
                                <div class="map-detail-item__caption">{{$t('map-legend1-l')}}</div>
                            </div>
                        </div>
                        <div class="map-detail-item flex">
                            <div class="map-detail-item__icon small-mark">
                                <img src="../assets/images/icon-map-partners.svg" alt="">
                            </div>
                            <div>
                                <div class="map-detail-item__title">{{$t('map-legend2-h')}}</div>
                                <div class="map-detail-item__caption">{{$t('map-legend2-l')}}</div>
                            </div>
                        </div>
                        <div class="map-detail-item flex">
                            <div class="map-detail-item__icon small-mark">
                                <img src="../assets/images/icon-map-clients.svg" alt="">
                            </div>
                            <div>
                                <div class="map-detail-item__title">{{$t('map-legend3-h')}}</div>
                                <div class="map-detail-item__caption">{{$t('map-legend3-l')}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tech" class="technology flex flex-x">
                <div class="technology-main flex flex-x">
                    <div class="technology-main-text">
                        <h2>{{$t('tech1-h')}}</h2>
                        <p>{{$t('tech2-h')}}</p>
                    </div>
                </div>
                <div class="technology-block flex">
                    <div class="technology-list">
                        <div class="technology-list__item"><img src="../assets/images/technologies/frontend/js.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/frontend/angular.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/frontend/html.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/frontend/sass.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/frontend/nodejs.svg" alt=""></div>
                    </div>
                    <div class="technology-list">
                        <div class="technology-list__item"><img src="../assets/images/technologies/backend/java.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/backend/mongo.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/backend/postgresql.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/backend/redis.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/backend/autodesk.svg" alt=""></div>
                    </div>
                    <div class="technology-list">
                        <div class="technology-list__item"><img src="../assets/images/technologies/mobile/kotlin.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/mobile/swift.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/mobile/firebase.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/mobile/rxjava.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/mobile/dagger.svg" alt=""></div>
                    </div>
                    <div class="technology-list">
                        <div class="technology-list__item"><img src="../assets/images/technologies/devops/git.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/devops/kubernetes.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/devops/docker.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/devops/helm.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/devops/prometheus.svg" alt=""></div>
                    </div>
                    <div class="technology-list">
                        <div class="technology-list__item"><img src="../assets/images/technologies/testing/selenium.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/testing/jmeter.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/testing/zalenium.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/testing/test-ng.svg" alt=""></div>
                        <div class="technology-list__item"><img src="../assets/images/technologies/testing/allure.svg" alt=""></div>
                    </div>
                </div>
            </section>
        </article>
        
        <article id="values" class="values">
            <h2 class="header-values">Наши ценности</h2>
            <div class="ui stackable two column grid container">
                <div id="row" class="row">
                    <div class="column"><img src="../assets/images/icon-values-1.svg" alt=""></div>
                    <div class="column">
                            <p class="value-text"><span class="h-value">Сотрудники <br></span>
                                <br> Компания обеспечивает комфортное место для работы, 
                                проводит performance review и&nbsp;оценку 360, 
                                компенсирует затраты на&nbsp;обучение, конференции и&nbsp;курсы, 
                                строит прозрачные отношения, поддерживает идеи сотрудников финансами и&nbsp;ресурсами. </p>
                    </div>
                </div>
                <div id="reverse-row" class="row">
                    <div class="column"><img src="../assets/images/icon-values-2.svg" alt=""></div>
                    <div class="column">
                        <p class="value-text-reverse"><span class="h-value">Прозрачность <br></span>
                            <br>В&nbsp;компании ценится прямая коммуникация,сформирована система 
                            оценки сотрудников и&nbsp;прописаны зоны ответственности. 
                            Каждый квартал наши сотрудники получают финансовый отчет организации. </p> 
                    </div>                  
                </div>
                <div id="row"  class="row">
                    <div class="column"><img src="../assets/images/icon-values-3.svg" alt=""></div>
                    <div class="column">
                        <p class="value-text"><span class="h-value">Баланс между работой и личной жизнью <br></span>
                            <br>В&nbsp;компании гибкий график работы, поддерживаются
                             хобби и&nbsp;занятия спортом, проводятся тренинги по&nbsp;
                             развитию софт-скиллов. У&nbsp;сотрудников есть возможность 
                             получить консультацию психолога.</p>
                    </div>
                </div>
            </div>
        </article>

        <article id="jobs" class="jobs">
            <h2 class="ui center aligned header">Работай с нами</h2>
            <div class="ui content container">
                <div class="ui stackable two columns grid tab-wrapper">
                    <div class="five wide column">
                        <div class="vacancy-select-mobile">
                            <select name="" id="">
                                <option value="">Фронтенд-разработчик</option>
                                <option value="">Бэкенд-разработчик</option>
                                <option value="">Менеджер проектов</option>
                                <option value="">DevOps-инженер</option>
                                <option value="">Тестировщик</option>
                                <option value="">Стажер</option>
                                <option value="">Мобильный разработчик</option>
                            </select>
                        </div>
                        <div class="ui vertical fluid tabular menu">
                            <a class="active item">
                                <span>Фронтенд-разработчик</span>
                            </a>
                            <a class="item">
                                <span>Бэкенд-разработчик</span>
                            </a>
                            <a class="item">
                                <span>Менеджер проектов</span>
                            </a>
                            <a class="item">
                                <span>DevOps-инженер</span>
                            </a>
                            <a class="item">
                                <span>Тестировщик</span>
                            </a>
                            <a class="item">
                                <span>Стажер</span>
                            </a>
                            <a class="item">
                                <span>Мобильный разработчик</span>
                            </a>
                        </div>
                        <div class="socials flex flex-x">
                            <a href="" class="socials__item"><img src="../assets/images/icon-hh.svg" alt=""></a>
                            <a href="" class="socials__item"><img src="../assets/images/icon-habr.svg" alt=""></a>
                            <a href="" class="socials__item"><img src="../assets/images/icon-linkedin.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="ten wide stretched column">
                        <div class="ui segment tab-body">
                            <div class="tab-body-content">
                                <h4>Технологии</h4>
                                <p>J2SE, Spring, Hibernate, JPA, MySQL/MongoDB</p>
                                <h4>Опыт работы</h4>
                                <p>OOP, OOD, design patterns</p>
                                <h4>Пожелания к кандидату</h4>
                                <p>Понимание сервис-ориентированной архитектуры, разработка многопоточных и распределенных приложений.
                                    Высокий уровень самоорганизованности и личной ответственности. Инициативность, умение работать в команде.</p>
                                <h4>Будет плюсом</h4>
                                <p>
                                    — Понимание и опыт применения Unit-тестирования;<br>
                                    — Понимание основ сетевых протоколов;<br>
                                    — Опыт работы с системами контроля версий (git) и системами сборки (Gradle/maven/ant);<br>
                                    — Знание английского на уровне чтения технической документации.
                                </p>
                                <p>
                                    — Понимание и опыт применения Unit-тестирования;<br>
                                    — Понимание основ сетевых протоколов;<br>
                                    — Опыт работы с системами контроля версий (git) и системами сборки (Gradle/maven/ant);<br>
                                    — Знание английского на уровне чтения технической документации.
                                </p>
                                <p>
                                    — Понимание и опыт применения Unit-тестирования;<br>
                                    — Понимание основ сетевых протоколов;<br>
                                    — Опыт работы с системами контроля версий (git) и системами сборки (Gradle/maven/ant);<br>
                                    — Знание английского на уровне чтения технической документации.
                                </p>
                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">Откликнуться</button>
                            </div>
                        </div>
                    </div>
                    <div class="socials flex flex-x mobile">
                        <a href="" class="socials__item"><img src="../assets/images/icon-hh.svg" alt=""></a>
                        <a href="" class="socials__item"><img src="../assets/images/icon-habr.svg" alt=""></a>
                        <a href="" class="socials__item"><img src="../assets/images/icon-linkedin.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </article>

        <article class="expect">            
            <div class="ui content container">
                <div class="ui stackable two column grid">
                    <div class="exp-column-left">
                        <div class="exp-triangle-block">
                            <img class="logo-triangle" src="../assets/images/logo-natlex-triangle.svg" alt="Мы ожидаем">
                            <p  >  <span class="header-triangle"> мы ожидаем</span><br>от сотрудника</p>
                        </div>
                    </div>
                    <div class="column">
                        <section>
                            <h4 class="h-expect">Ответственность</h4>
                            <p>В компании нет строгой иерархии, но есть зоны ответственности.
                               Компания доверяет сотруднику и его\ее способности правильно распределять время и усилия. </p>
                        </section>
                        <section>
                            <h4 class="h-expect">Открытость</h4>
                            <p>Сотрудники компании сомневаются, задают вопросы, делятся новыми идеями,
                               просят помощи и говорят о своих желаниях.</p>
                        </section>
                        <section>
                            <h4 class="h-expect">Желание роста</h4>
                            <p>Сотрудники мотивированы, профессионально растут и развиваются вместе с компанией. 
                               Сотрудники заинтересованы в результате и качестве выполняемой работы.</p>
                        </section>
                    </div>
                </div>
            </div>
        </article>

        <article class="trainee">
            <h2 class="ui center aligned header">Стажировка</h2>
            <div class="ui center aligned text container">
            <p>Прежде всего, команда Натлекс — это люди, готовые помочь. 
               Если ты студент, или просто хочешь попробовать себя в деле — мы будем 
               рады поддержать инициативу и поможем сделать первый шаг в освоении профессии.
                <br> <br>
                От тебя нужна лишь заявка!</p>
            <div class="button-gradborder-wrap"><a href="#" class="teaser-button ">Отправить заявку</a></div>            

            </div>
        </article>

        <article id="feedback" class="feedback">
            <div class="ui content container">
                <div class="ui secondary menu" role="menu">
                    <a href="#" class="item">Написать сообщение</a>
                    <a href="#" class="item active">Отправить резюме</a>                    
                </div>
               
    
                <section class="ui stackable two column grid contacts" style="display: none;">
                    <div class="column">
                        <form class="ui form">
                            <div class="field required">
                                <label>Ваше имя</label>
                                <input type="text" name="first-name" required placeholder="Имя">
                            </div>
                            <div class="field required">
                                <label>Электронная почта</label>
                                <input type="text" name="last-name" required placeholder="email@box.com">
                            </div>
                            <div class="field required">
                                <label>Сообщение</label>
                                <textarea name="user-message" cols="30" rows="10" placeholder="Добрый день, ..."></textarea>    
                            </div>
                            <div class="captcha-box">
                                <!-- TODO add recaptcha instead of this dummy block-->
                                <div style="background: #fff; height: 75px; padding: 1rem; color: black; text-align: center;">google captcha</div>
                            </div>
                            <div class="field agreement-check">
                                <div class="disclaimer-box">
                                    <div class="ui checkbox">
                                        <input type="checkbox" tabindex="0" class="hidden">
                                        <label>Я согласен с условиями</label>
                                    </div>
                                    <p class="disclaimer">Нажимая на эту кнопку, я даю согласие
                                        на обработку <a href="#">персональных данных</a>.</p>
                                </div>
                                <div class="send-button-box">
                                    <button class="ntx-button rounded solid-white" type="submit">Отправить</button>
                                </div>                              
                            </div>
                        </form>
                    </div>
                    <div class="column">
                        <div class="aligner">
                            <img src="../assets/images/bg-request-people-right.svg" alt="">
                        </div>
                    </div>
                </section>
    
                <section class="ui stackable two column grid cv">
                    <div class="column">
                        <div class="aligner">
                            <img src="../assets/images/bg-request-people-left.svg" alt="">
                        </div>
                    </div>
                    <div class="column">
                        <form class="ui form">
                            <div class="field required">
                                <label>Ваше имя</label>
                                <input type="text" name="first-name" required placeholder="Имя">
                            </div>
                            <div class="field required">
                                <label>Желаемая должность</label>
                                <!--Source: https://semantic-ui.com/modules/dropdown.html#selection -->
                                <div class="ui fluid selection dropdown">
                                    <input type="hidden" name="job-type">
                                    <i class="dropdown icon"></i>
                                    <div class="default text">Выберите должность</div>
                                    <div class="menu">
                                        <div class="item" data-value="frontend">
                                            Фронтенд-разработчик
                                        </div>
                                        <div class="item" data-value="backend">
                                            Бэкенд-разработчик
                                        </div>
                                        <div class="item" data-value="pm">
                                            Менеджер проектов
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label>Телефон</label>
                                <input type="text" name="first-name" placeholder="В любом формате">
                            </div>
                            <div class="field">
                                <label>Электронная почта</label>
                                <input type="text" name="last-name" placeholder="email@box.com">
                            </div>
                            <div class="field">
                                <label>Прикрепите файл(ы) резюме, если есть:</label>
                                <!-- Source: http://jsfiddle.net/Dr_Dev/2nu1ngk5 -->
                                <div class="ui action input">
                                    <input type="text" placeholder="Файл не выбраны" readonly>
                                    <input type="file">
                                    <div class="attachment-suffix">
                                      <i class="attach icon"></i>
                                    </div>
                                </div>                                 
                            </div>

                            <div class="captcha-box">
                                <!-- TODO add recaptcha instead of this dummy block-->
                                <div style="background: #fff; height: 75px; padding: 1rem; color: black; text-align: center;">google captcha</div>
                            </div>

                            <div class="field agreement-check">
                                <div class="disclaimer-box">
                                    <div class="ui checkbox">
                                        <input type="checkbox" tabindex="0" class="hidden">
                                        <label>Я согласен с условиями</label>
                                    </div>
                                    <p class="disclaimer">Нажимая на эту кнопку, я даю согласие
                                        на обработку <a href="#">персональных данных</a>.</p>
                                </div>
                                <div class="send-button-box">
                                    <button class="ntx-button rounded solid-white" type="submit">Отправить</button>
                                </div>                              
                            </div>                            
                        </form>
                    </div>
                </section>
            </div>
        </article>
    </main>
    <footer id="contacts">
        <div class="ui stackable three columns grid">
            <div class="column phone"><p>+7 (921) 228-20-17 <br> info@natlex.ru</p></div>
            <div class="column address"> <p>ООО «Натлекс» <br> улица Кирова, 8Б <br> 185035 Петрозаводск Россия</p></div>
            <div class="column social-icons">

                <div class="ui icon secondary menu">
                    <a class="item"><i class="twitter icon"></i></a>
                    <a class="item"><i class="facebook icon"></i></a>
                    <a class="item"><i class="instagram icon"></i></a>
                </div>
                  


            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            langs: [
                {locale: 'ru', label: 'Rus'},
                {locale: 'en', label: 'Eng'},
                {locale: 'de', label: 'Ger'}
            ],
            limitPosition: 64,
            scrolled: false,
            lastPosition: 0
        }
    },
    computed: {
        currentLang() {
            return this.langs.find(l => l.locale == this.$i18n.locale) || this.langs[0];
        }
    },
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang;
        },

        handleScroll() {
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
            this.scrolled = true;
        } 
        
        if (this.lastPosition > window.scrollY) {
            this.scrolled = false;
        }
        
        this.lastPosition = window.scrollY;
        }
    },
    
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },

    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>