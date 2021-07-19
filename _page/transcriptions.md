---
layout: default
title: Transcriptions
slug: transcriptions
---

## Transcriptions

See below for a list of partial transcriptions for selected manuscript documents in this repository. Please feel free to post your own transcriptions to our Google group, for correction and possible uploading to the site later on.

{% for transcription in site.transcriptions %}
- [{{ transcription.title }}]({{ site.baseurl }}{{ transcription.url }})
{% endfor %}
