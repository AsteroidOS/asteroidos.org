---
title: News RSS
slug: rss
---

{{#withSort post 'data.posted'}}
    {{#each this.pages }}
        <item>
           <title>{{ data.title }}</title>
           <link>{{ relative ../../page.dest this.dest }}/link>
           <description>{{ data.summary }}</description>
           <enclosure url="/public/img/news-thumbnails/{{ data.thumbnails }}-square.jpg" type="image/jpeg" />
           <pubDate>{{dateFormat data.posted "DD/MM/YYYY"}}/pubDate>
           <guid>{{ relative ../../page.dest this.dest }}</guid>
        </item>
    {{/each}}
{{/withSort}}
