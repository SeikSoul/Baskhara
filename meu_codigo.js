var a, b, c, i, j, delta, l, m, n, X1, X2;

escreva("Bem vindo ao: RESOLVEDOR DE EQUAÇÃO DO SEGUNDO GRAU AUTOMÁTICO ONDE VC APENAS PRECISA COLOCAR OS VALORES DE: A, B e C!")
escreva("(Ainda estou trabalhando em um nome melhor...)")
escreva("Tanto faz, resolva logo sua conta ai: ")

a = lerReal ("Digite o valor de A: ")
b = lerReal ("Digite o valor de B: ")
c = lerReal ("Digite o valor de C: ")

i = potencia(b,2)
j = 4 * a * c
delta = i - j
l = raizQuadrada(delta)
m = -b
n = 2 * a
X1 = ( m + l ) / n
X2 = ( m - l ) / n

escreva("X pode assumir os valores: " + X1 + " e " + X2)
