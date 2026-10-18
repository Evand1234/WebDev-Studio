"""Generates the black marble backdrop (assets/img/marble.webp). Deterministic."""
import numpy as np
from PIL import Image, ImageFilter
W,H=1600,900
rng=np.random.default_rng(7)
def fbm(oct=6,base=3):
    out=np.zeros((H,W),np.float32);amp=1;tot=0
    for o in range(oct):
        n=base*2**o
        g=rng.random((n+1,int(n*W/H)+2)).astype(np.float32)
        im=Image.fromarray((g*255).astype(np.uint8)).resize((W,H),Image.BICUBIC)
        out+=amp*np.asarray(im,np.float32)/255;tot+=amp;amp*=0.5
    return out/tot
t=fbm(4,2); t2=fbm(5,2)
y,x=np.mgrid[0:H,0:W].astype(np.float32)
def veins(freq,tw,ang,core,halo):
    u=(x*np.cos(ang)+y*np.sin(ang))/W
    v=np.abs(np.sin((u*freq+(t-0.5)*tw)*np.pi))
    return np.exp(-(v/core))+halo*np.exp(-(v/0.22)**2)
m1=np.clip((t2-0.42)*5,0,1);m2=np.clip((fbm(3,3)-0.5)*6,0,1)
v1=veins(3.0,1.5,0.62,0.010,0.12)*(0.25+0.75*m1)
v2=veins(7.0,2.2,0.55,0.006,0.04)*m2*0.9
v3=veins(15.0,3.0,0.7,0.004,0.0)*0.3*m1
base=0.025+0.11*t2**2
img=base+0.8*v1*(0.5+t2)+0.4*v2+v3*0.6
img=np.clip(img,0,1)
rgb=np.stack([img*0.86,img*0.9,img*0.97],-1)  # cool white veins
rgb=np.clip(rgb,0,1)
im=Image.fromarray((rgb*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))
# vignette
a=np.asarray(im,np.float32)
d=np.sqrt(((x-W/2)/(W/2))**2+((y-H/2)/(H/2))**2)
a*= (1-0.55*np.clip(d-0.3,0,1))[...,None]
Image.fromarray(np.clip(a,0,255).astype(np.uint8)).save('assets/img/marble.webp',quality=72,method=6)
