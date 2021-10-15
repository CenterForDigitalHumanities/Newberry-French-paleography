---
layout: default
title: Transcriptions
slug: transcriptions
replacements: dates
---

## Transcriptions

See below for a list of partial transcriptions for selected manuscript documents in this repository. 

<listing></listing>
{% for transcription in site.transcriptions | sort: 'title' %}
- [{{ transcription.title }}]({{ site.baseurl }}{{ transcription.url }}) <date data-id="{{ transcription.url | split: "/" | last }}">{{ transcription.url | split: "/" | last }}</date>{% endfor %}
