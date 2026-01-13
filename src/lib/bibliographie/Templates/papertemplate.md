---
tags:
publish: true
aliases:
	- {{title}}
	- {{citekey}}
url: {{url}}
doi: {{doi}}
citekey: {{citekey}}
keywords: {{allTags}}
authors: [{{authors}}{{directors}}]
type: paper
created:
updated:
---

<%*
let title = "{{title}}"
let date = tp.date.now("YYY-MM-DD);
await tp.file.rename()
cssclass: research-note
type: "{{itemType}}"{% for type, creators in creators | groupby("creatorType") -%}
{% if loop.first %}

{% endif %}
{{type | replace("interviewee", "author") | replace("director", "author") | replace("presenter", "author") | replace("podcaster", "author") | replace("programmer", "author") | replace("cartographer", "author") | replace("inventor", "author") | replace("sponsor", "author") | replace("performer", "author") | replace("artist", "author")}}: "{%- for creator in creators -%}
{%- if creator.name %}{{creator.name}}{%- else %}{{creator.lastName}}, {{creator.firstName}}{%- endif %}{% if not loop.last %}; {% endif %}{% endfor %}"{% if not loop.last %}
{% endif %}{%- endfor %}
{% if title %}
title: "{{title}}"{% endif %}
{% if publicationTitle %}
publication: "{{publicationTitle}}"{% endif %}
{% if date %}
date: {{date | format("YYYY")}}{% endif %}
{% if archive %}
archive: "{{archive}}"{% endif %}
{% if archiveLocation %}
archive-location: "{{archiveLocation}}"{% endif %}
citekey: {{citekey}}
abstract: {{abstractNote}}
tags: {% if tags.length > 0 -%}
{%- for t in tags -%}
#{% if t.tag == "secondary" %}source/secondary
{% elif t.tag == "primary" %}source/primary
{% elif "-project" in t.tag %}project/{{t.tag | lower | replace(" ", "-") | replace("-project", "")}}
{% else %}subject/{{t.tag | lower | replace(" ", "-")}}
{% endif %}{% endfor %}
{% endif %}
theme:
---
{{bibliography}}

[online]({{uri}}) [local]({{desktopURI}})
{%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}
[pdf](file://{{attachment.path | replace(" ", "%20")}})
{% if loop.last %}{% endif %}
{%- endfor %}

---
### Présentation auteur.e.s

### Résumé

### Idées principales
### Lien avec la thèse

{% macro calloutHeader(color) -%}
{%- if color == "general.orange" or color == "#f19837" -%}
Supporting Argument or Example
{%- elif color == "general.green" or color == "#5fb236" -%}
Very Important or Critical
{%- elif color == "general.red" or color == "#ff6666" -%}
Disagree with Author
{%- elif color == "general.blue" or color == "#2ea8e5" -%}
Interesting References
{%- elif color == "general.purple" or color == "#a28ae5" -%}
Vocabulary, Names, Dates, Definition
{%- else -%}
Note
{%- endif -%}
{%- endmacro -%}

{% persist "annotations" %}
{% set annotations = annotations | filterby("date", "dateafter", lastImportDate) -%}
{% if annotations.length > 0 %}
### Citations importées le {{importDate | format("YYYY-MM-DD h:mm a")}}

{%- for annotation in annotations %}
{%- set color = annotation.color %}

{%- if color == "#ffd400" %}
{# Citation jaune - Pas de boîte, juste texte simple #}
{%- if annotation.annotatedText %}
{{annotation.annotatedText}} [(p. {{annotation.pageLabel}})](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.pageLabel}}&annotation={{annotation.id}})
{% endif %}
{%- if annotation.comment %}
>%%{{annotation.comment}}%%
{% endif %}
{%- else %}
{# Autres couleurs - Callout avec labels correspondants #}
>[!quote{% if color %}|{{color}}{% endif %}] {{calloutHeader(color)}}
>
{%- if annotation.imageRelativePath %}  
![[{{annotation.imageRelativePath}}]]  
{% endif -%}
{%- if annotation.annotatedText %}
{{annotation.annotatedText}} [(p. {{annotation.pageLabel}})](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.pageLabel}}&annotation={{annotation.id}})
{% endif -%}
{%- if annotation.comment %}
>%%{{annotation.comment}}%%
{% endif %}
{%- endif %}

{%- endfor %}
{% endif %}
{% endpersist %}

### Bibliographie