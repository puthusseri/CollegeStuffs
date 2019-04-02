bulb=read.table("bulbs.dat",sep=",")
bulb1=data.frame(bulb)
bulb2=as.matrix(bulb1)
max=max(bulb)
min=min(bulb)

intervel=(max-min)/10

intervel1=seq(min,max,intervel)
