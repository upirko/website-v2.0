<template>
  <div>
    <!-- change here class to "top-navigation sticky opened" to show mobile menu -->
    <nav :class="{'elevated': scrolled}" class="top-navigation sticky">
        <div class="logo">
            <img src="../assets/images/logo-natlex-e.svg" alt="Emblem" class="emblem">
            <img src="../assets/images/logo-natlex-t.svg" alt="Natlex" class="name">
        </div>
        <div class="nav-box">            
            <div class="ui toggle checkbox checked">
                <input type="checkbox" tabindex="0" class="hidden">
                <!--<label><span class="ui label hidden">Light mode On/Off</span></label>  
                спрятал переключатель на темную тему, т.к. пока не делаем-->
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
                <img class="logo-partners" src="../assets/images/logo-s3-itc.svg" alt="ITC">
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
            <h2 class="header-values">{{$t('values-header')}}</h2>
            <div class="ui stackable two column grid container">
                <div id="row" class="row">
                    <div class="column"><img src="../assets/images/icon-values-1.svg" alt=""></div>
                    <div class="column">
                            <p class="value-text"><span class="h-value">{{$t('value1-h')}}<br></span>
                                <br> {{$t('value1-text')}}</p>
                    </div>
                </div>
                <div id="reverse-row" class="row">
                    <div class="column"><img src="../assets/images/icon-values-2.svg" alt=""></div>
                    <div class="column">
                        <p class="value-text-reverse"><span class="h-value">{{$t('value2-h')}}<br></span>
                            <br>{{$t('value2-text')}} </p> 
                    </div>                  
                </div>
                <div id="row"  class="row">
                    <div class="column"><img src="../assets/images/icon-values-3.svg" alt=""></div>
                    <div class="column">
                        <p class="value-text"><span class="h-value">{{$t('value3-h')}} <br></span>
                            <br>{{$t('value3-text')}}</p>
                    </div>
                </div>
            </div>
        </article>

        <article id="jobs" class="jobs">
            <h2 class="ui center aligned header">{{$t('join-header')}}</h2>
            <div class="ui content container tab-wrapper">
                <template class="vacancy-select-mobile" lang="html">
                    <sui-dropdown
                            direction="downward"
                            :placeholder="$t('join-header')"
                            selection
                            :options="vacancies"
                            v-model="vacancy"
                    />
                </template>
                <sui-tab :activeIndex="vacancy"
                         :menu="{ vertical: true, fluid: true, tabular: true }">
                        <sui-tab-pane class="active item tab-body" :title="$t('vacancy-fe')">
                            <div id="fe-vacancy" class="tab-body-content">
                                <h4>{{$t('fe-descr-h-1')}}</h4>
                                <p>{{$t('fe-descr-text-1')}}</p>

                                <h4>{{$t('fe-descr-h-2')}}</h4>
                                <p v-html="$t('fe-descr-text-2')"></p>

                                <h4>{{$t('fe-descr-h-3')}}</h4>
                                <p v-html="$t('fe-descr-text-3')"></p>

                                <h4>{{$t('fe-descr-h-4')}}</h4>
                                <p v-html="$t('fe-descr-text-4')"></p>

                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                        <sui-tab-pane class="item tab-body" :title="$t('vacancy-be')">
                            <div id="be-vacancy" class="tab-body-content">
                                <h4>{{$t('be-descr-h-1')}}</h4>
                                <p>{{$t('be-descr-text-1')}}</p>

                                <h4>{{$t('be-descr-h-2')}}</h4>
                                <p v-html="$t('be-descr-text-2')"></p>

                                <h4>{{$t('be-descr-h-3')}}</h4>
                                <p v-html="$t('be-descr-text-3')"></p>

                                <h4>{{$t('be-descr-h-4')}}</h4>
                                <p v-html="$t('be-descr-text-4')"></p>

                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                        <sui-tab-pane class="item tab-body" :title="$t('vacancy-pm')">
                            <div id = "pm-vacancy" class="tab-body-content">
                                <h4>{{$t('pm-descr-h-1')}}</h4>
                                <p v-html="$t('pm-descr-text-1')"></p>

                                <h4>{{$t('pm-descr-h-2')}}</h4>
                                <p v-html="$t('pm-descr-text-2')"></p>

                                <h4>{{$t('pm-descr-h-3')}}</h4>
                                <p v-html="$t('pm-descr-text-3')"></p>
                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                        <sui-tab-pane class="item tab-body" :title="$t('vacancy-devops')">
                            <div id = "devops-vacancy" class="tab-body-content">
                                <h4>{{$t('devops-descr-h-1')}}</h4>
                                <p v-html="$t('devops-descr-text-1')"></p>

                                <h4>{{$t('devops-descr-h-2')}}</h4>
                                <p v-html="$t('devops-descr-text-2')"></p>

                                <h4>{{$t('devops-descr-h-3')}}</h4>
                                <p v-html="$t('devops-descr-text-3')"></p>

                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                        <sui-tab-pane class="item tab-body" :title="$t('vacancy-qa')">
                            <div id = "qa-vacancy" class="tab-body-content">
                                <h4>{{$t('qa-descr-h-1')}}</h4>
                                <p v-html="$t('qa-descr-text-1')"></p>

                                <h4>{{$t('qa-descr-h-2')}}</h4>
                                <p v-html="$t('qa-descr-text-2')"></p>

                                <h4>{{$t('qa-descr-h-3')}}</h4>
                                <p v-html="$t('qa-descr-text-3')"></p>

                                <h4>{{$t('qa-descr-h-4')}}</h4>
                                <p v-html="$t('qa-descr-text-4')"></p>

                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                        <sui-tab-pane class="item tab-body" :title="$t('vacancy-mobile-ios')">
                            <div id = "ios-vacancy" class="tab-body-content">
                                <h4>{{$t('ios-descr-h-1')}}</h4>
                                <p>{{$t('ios-descr-text-1')}}</p>

                                <h4>{{$t('ios-descr-h-2')}}</h4>
                                <p v-html="$t('ios-descr-text-2')"></p>

                                <h4>{{$t('ios-descr-h-3')}}</h4>
                                <p v-html="$t('ios-descr-text-3')"></p>

                                <h4>{{$t('ios-descr-h-4')}}</h4>
                                <p v-html="$t('ios-descr-text-4')"></p>


                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                        <sui-tab-pane class="item tab-body" :title="$t('vacancy-mobile-android')">
                            <div id = "android-vacancy" class="tab-body-content">
                                <h4>{{$t('android-descr-h-1')}}</h4>
                                <p>{{$t('android-descr-text-1')}}</p>

                                <h4>{{$t('android-descr-h-2')}}</h4>
                                <p v-html="$t('android-descr-text-2')"></p>

                                <h4>{{$t('android-descr-h-3')}}</h4>
                                <p v-html="$t('android-descr-text-3')"></p>

                                <h4>{{$t('android-descr-h-4')}}</h4>
                                <p v-html="$t('android-descr-text-4')"></p>

                            </div>
                            <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('button-apply')}}</button>
                            </div>
                        </sui-tab-pane>
                    </sui-tab>
                <div class="socials flex flex-x">
                    <a href="https://petrozavodsk.hh.ru/employer/2713625" class="socials__item"><img src="../assets/images/icon-hh.svg" alt=""></a>
                    <a href="https://career.habr.com/companies/natlex" class="socials__item"><img src="../assets/images/icon-habr.svg" alt=""></a>
                    <a href="https://tt.linkedin.com/company/natlex-ltd" class="socials__item"><img src="../assets/images/icon-linkedin.svg" alt=""></a>
                </div>
            </div>
        </article>

        <article class="expect">            
            <div class="ui content container">
                <div class="ui stackable two column grid">
                    <div class="exp-column-left">
                        <div class="exp-triangle-block">
                            <img class="logo-triangle" src="../assets/images/logo-natlex-triangle.svg" alt="Мы ожидаем">
                            <p  >  <span class="header-triangle">{{$t('expect-header1')}}</span><br>{{$t('expect-header2')}}</p>
                        </div>
                    </div>
                    <div class="expect-column">
                        <section>
                            <h4 class="h-expect">{{$t('expect1-h')}}</h4>
                            <p>{{$t('expect1-text')}} </p>
                        </section>
                        <section>
                             <h4 class="h-expect">{{$t('expect2-h')}}</h4>
                            <p>{{$t('expect2-text')}} </p>
                        </section>
                        <section>
                             <h4 class="h-expect">{{$t('expect3-h')}}</h4>
                            <p>{{$t('expect3-text')}} </p>
                        </section>
                    </div>
                </div>
                <div class="vacancy-button-wrapper">
                                <button class="vacancy-button ntx-button rounded light-green-gd lw">{{$t('expect-button')}}</button>
                    </div>
            </div>
        </article>

        <article class="trainee">
            <h2 class="ui center aligned header">{{$t('intern-header')}}</h2>
            <div class="ui center aligned text container">
            <p> {{$t('intern-text1')}} <br> <br>
                {{$t('intern-text2')}}</p>
            <div class="button-gradborder-wrap"><a href="#" class="teaser-button ">{{$t('intern-button')}}</a></div>            

            </div>
        </article>

        <article id="feedback" class="feedback">
            <div class="ui content container">
                <div class="ui secondary menu" role="menu">
                    <a href="#" class="item" :class="{active: currentForm == 'message'}" @click.prevent="currentForm = 'message'">{{$t('button-write-message')}}</a>
                    <a href="#" class="item" :class="{active: currentForm == 'vacancy'}" @click.prevent="currentForm = 'vacancy'">{{$t('button-send-CV')}}</a>                    
                </div>
               
    
                <section class="ui stackable two column grid contacts" v-show="currentForm == 'message'">
                    <div class="column">
                        <sui-form @submit.prevent="sendRequest">
                            <sui-form-field required>
                                <label>{{$t('label-name')}}</label>
                                <sui-input :placeholder="$t('label-name')" :disabled="sending" name="name" required v-model="request.name" />
                            </sui-form-field>
                            <sui-form-field>
                                <label>{{$t('your-phone')}}</label>
                                <sui-input :placeholder="$t('your-phone')" :disabled="sending" type="tel" name="phone" v-model="request.phone" />
                            </sui-form-field>
                            <sui-form-field>
                                <label>{{$t('label-mail')}}</label>
                                <sui-input :placeholder="$t('label-mail')" :disabled="sending" type="email" name="email" v-model="request.email" />
                            </sui-form-field>
                            <sui-form-field required>
                                <label>{{$t('label-message')}}</label>
                                <textarea name="user-message" cols="30" rows="10" required placeholder="Ваше сообщение" v-model="request.message"></textarea>   
                            </sui-form-field>
                            <!-- <div class="captcha-box">
                                <div style="background: #fff; height: 75px; padding: 1rem; color: black; text-align: center;">google captcha</div>
                            </div> -->
                            <div class="field agreement-check">
                                <div class="disclaimer-box">
                                    <div class="ui checkbox">
                                        <input id="agreement-checkbox" type="checkbox" name="agreement-checkbox" required />
                                        <label for="agreement-checkbox">{{$t('label-agree')}}</label>
                                    </div>
                                    <p class="disclaimer">{{$t('label-agree-dsclmr')}} <a href="#">{{$t('label-pers-data')}}</a>.</p>
                                </div>
                                <div class="send-button-box">
                                    <sui-button :loading="sending" :disabled="sending" class="ntx-button rounded solid-white" type="submit">{{$t('button-send')}}</sui-button>
                                </div>                              
                            </div>
                        </sui-form>
                    </div>
                    <div class="column">
                        <div class="aligner">
                            <img src="../assets/images/bg-request-people-right.svg" alt="">
                        </div>
                    </div>
                </section>
    
                <section class="ui stackable two column grid cv" v-show="currentForm == 'vacancy'">
                    <div class="column">
                        <div class="aligner">
                            <img src="../assets/images/bg-request-people-left.svg" alt="">
                        </div>
                    </div>
                    <div class="column">
                        <sui-form @submit.prevent="sendRequest">
                            <sui-form-field required>
                                <label>{{$t('label-name')}}</label>
                                <sui-input :placeholder="$t('label-name')" :disabled="sending" name="name" required v-model="request.name" />
                            </sui-form-field>
                            <sui-form-field required class="position">
                                <input type="text" v-model="request.position" required>
                                <label>{{$t('Preferred-position')}}</label>
                                <sui-dropdown
                                    :placeholder="$t('Select-position')"
                                    :disabled="sending"
                                    selection
                                    :options="vacancies"
                                    required
                                    name="position"
                                    v-model="request.position"
                                />
                            </sui-form-field>
                            <sui-form-field>
                                <label>{{$t('your-phone')}}</label>
                                <sui-input :placeholder="$t('your-phone')" :disabled="sending" type="tel" name="phone" v-model="request.phone" />
                            </sui-form-field>
                            <sui-form-field>
                                <label>{{$t('label-mail')}}</label>
                                <sui-input :placeholder="$t('label-mail')" :disabled="sending" type="email" name="email" v-model="request.email" />
                            </sui-form-field>
                            <div class="field">
                                <label>{{$t('attach-file')}}</label>
                                <div class="ui icon input attachment">
                                    <input type="text" :value="attachmentName" readonly="readonly">
                                    <i class="attach icon"></i>
                                    <input type="file" :disabled="sending" @change="addAttachment" name="attachment" />
                                </div>
                            </div>
                            
                            <!-- <div class="captcha-box">
                                 <div style="background: #fff; height: 75px; padding: 1rem; color: black; text-align: center;">google captcha</div>
                            </div> -->
                            <div class="field agreement-check">
                                <div class="disclaimer-box">
                                    <div class="ui checkbox">
                                        <input id="agreement-checkbox" type="checkbox" name="agreement-checkbox" required />
                                        <label for="agreement-checkbox">{{$t('label-agree')}}</label>
                                    </div>
                                    <p class="disclaimer">{{$t('label-agree-dsclmr')}} <a href="#">{{$t('label-pers-data')}}</a>.</p>
                                </div>
                                <div class="send-button-box">
                                    <sui-button :loading="sending" :disabled="sending" class="ntx-button rounded solid-white" type="submit">{{$t('button-send')}}</sui-button>
                                </div>                              
                            </div>
                        </sui-form>
                    </div>
                </section>
            </div>
        </article>
    </main>
    <footer id="contacts">
        <div class="ui stackable three columns grid">
            <div class="column phone"><p>+7 (921) 228-20-17 <br> info@natlex.ru</p></div>
            <div class="column address"> <p v-html="$t('column-adress')"></p></div>
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
            lastPosition: 0,
            vacancy: null,
            vacancies: [
                {
                    text: this.$t('vacancy-fe'),
                    value: 0,
                },
                {
                    text: this.$t('vacancy-be'),
                    value: 1,
                },
                {
                    text: this.$t('vacancy-pm'),
                    value: 2,
                },
                {
                    text: this.$t('vacancy-devops'),
                    value: 3,
                },
                {
                    text: this.$t('vacancy-qa'),
                    value: 4,
                },
                {
                    text: this.$t('vacancy-mobile-ios'),
                    value: 5,
                },
                {
                    text: this.$t('vacancy-mobile-android'),
                    value: 6,
                },
            ],
            currentForm: 'vacancy',
            request: {
                name: null,
                position: null,
                email: null,
                phone: null,
                attachment: null,
                message: null
            },
            sending: false
        }
    },
    computed: {
        currentLang() {
            return this.langs.find(l => l.locale == this.$i18n.locale) || this.langs[0];
        },
        attachmentName() {
            return this.request.attachment ? this.request.attachment.name : 'Файл не выбраны';
        }
    },
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang;
        },

        handleScroll() {
            this.scrolled = this.limitPosition < window.scrollY;
        },
        sendRequest() {
            const formData = new FormData();
            for (let field of Object.keys(this.request)) {
                if (!this.request[field]) continue;
                if (field == 'position') {
                    let positoin = this.vacancies.find(v => v.value == this.request.position).text;
                    formData.append(field, positoin);
                } else {
                    formData.append(field, this.request[field]);
                }
            }
            formData.append('type', this.currentForm);
            this.sending = true;
            const options = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            this.axios.post('/api/request', formData, options).then(res => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                this.sending = false;
            });
        },
        addAttachment(e) {
            this.request.attachment = e.target.files[0];
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