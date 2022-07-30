---
title: News
slug: news
---

{{#withSort post 'data.posted'}}
    {{#each this.pages }}
        <div class="news-row">
            <div class="news-text">
                <a href="{{ relative ../../page.dest this.dest }}">
                    <div class="news-title">
                        <h1>{{ data.title }}</h1>
                        <div class="news-date">{{dateFormat data.posted "DD/MM/YYYY"}}</div>
                    </div>
                    <p>{{ data.summary }}</p>
                </a>
            </div>
            <a href="{{ relative ../../page.dest this.dest }}">
                <div class="news-img"><img src="/public/img/news-thumbnails/{{ data.thumbnails }}-square.jpg" width="250" height="250" /></div>
            </a>
        </div>
    {{/each}}
{{/withSort}}
