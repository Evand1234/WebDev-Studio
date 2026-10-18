import json
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
f=TTFont('bricolage-800.ttf')
# default variable instance may be present; use as is
gs=f.getGlyphSet(); cmap=f.getBestCmap(); upm=f['head'].unitsPerEm
text='BrandMasters'; size=100; s=size/upm
x=0; pen=SVGPathPen(gs, ntos=lambda v: ('%.2f'%v).rstrip('0').rstrip('.'))
track=-0.02*size
for ch in text:
    g=cmap[ord(ch)]
    tp=TransformPen(pen,(s,0,0,-s,x,0))
    gs[g].draw(tp)
    x+=gs[g].width*s+track
asc=f['hhea'].ascent*s; cap=getattr(f['OS/2'],'sCapHeight',700)*s
json.dump({'d':pen.getCommands(),'width':x-track,'cap':cap,'upm':upm},open('wordmark.json','w'))
print(x,cap)
