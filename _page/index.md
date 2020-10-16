# Pages

numbered MarkDown files like [23](23.html)

{% for page in site.page %}
- [{{ page.title }}]({{ page.url }})
{% endfor %}
