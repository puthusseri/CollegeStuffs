outcomes<-c(sample(1:6,size = 10000,replace = TRUE))
probability_function<-table(outcomes)
print(probability_function)
plot(probability_function)
probability_function=probability_function/10000
print(probability_function)
sum(probability_function)

