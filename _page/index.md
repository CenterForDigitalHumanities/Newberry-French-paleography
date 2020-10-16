# Pages

numbered MarkDown files like [23](23.html)

{% for p in site.page %}
- [{{ p.title }}]({{ p.url }})
{% endfor %}
