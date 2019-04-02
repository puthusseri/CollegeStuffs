dataset <- mtcars[,c("mpg","disp","hp","wt")]
dataset
model=reg=lm(formula = mpg ~ disp + hp + wt, data = dataset)
model
a <- coef(model)[1]
print(a)
disp <- coef(model)[2]
hp <- coef(model)[3]
wt <- coef(model)[4]
disp
hp
wt
tail(predict(model))
tail(resid(model))
a=data.frame(disp = 221,hp = 102,wt=2.91)
result_a=predict(model,a)
result_a

