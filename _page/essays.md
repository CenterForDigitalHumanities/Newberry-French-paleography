---
layout: default
title: Background Essays
slug: essays
---

## Essays

See below for a list of background essays about selected manuscripts in this repository. Please contact us if, in exploring the site, you notice any manuscripts where you feel you would have something to say. We'd be delighted to have you post draft essays to our Google group, for possible inclusion in the site later on. Alternatively, we'd be grateful to receive items of information that you think should be included in an essay, for any particular manuscript document.

{% for essay in site.background_essay %}
- [{{ essay.title }}]({{ site.baseurl }}{{ essay.url }})
{% endfor %}
