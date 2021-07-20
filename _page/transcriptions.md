---
layout: default
title: Transcriptions
slug: transcriptions
replacements: dates
---

## Transcriptions

See below for a list of partial transcriptions for selected manuscript documents in this repository. Please feel free to post your own transcriptions to our Google group, for correction and possible uploading to the site later on.

{% for transcription in site.transcriptions %}
<div class="row"> <span class="col-10">[{{ transcription.title }}]({{ site.baseurl }}{{ transcription.url }})</span> <date class="col" data-id="{{ essay.url | split: "/" | last }}">{{ essay.url | split: "/" | last }}</date> </div>
{% endfor %}
