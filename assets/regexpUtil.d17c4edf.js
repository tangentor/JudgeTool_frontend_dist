const r=t=>{let e=[/([。！？\?])([^”’）])/gm,/(\.{6})([^”’])/gm,/(\…{2})([^”’])/gm,/([。！？\?][”’])([^，。！？\?])/gm],l="$1#$2";for(let p of e)t=t.replace(p,l);return t.split("#")};export{r as s};
