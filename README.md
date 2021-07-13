# Newberry-French-paleography

## Essays

{% for essay in site.background_essay %}
- [{{ essay.title }}]({{ site.baseurl }}{{ essay.url }})
{% endfor %}

## Partial Transcriptions

{% for transcription in site.transcriptions %}
- [{{ transcription.title }}]({{ site.baseurl }}{{ transcription.url }})
{% endfor %}

## Content

{% for p in site.page %}
- [{{ p.title }}]({{ site.baseurl }}{{ p.url }})
{% endfor %}

## Indexes

* [Manuscripts](/www/manuscripts.html)
* [Maps](/www/maps.html)
* [Calligraphy Books](/www/calligraphy.html)
