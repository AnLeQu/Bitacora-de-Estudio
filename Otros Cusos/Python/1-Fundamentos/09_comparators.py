# > (mayor qué...)
print(7 > 3) # Esto es verdadero
print(3 > 7) # Esto es falso
print(7 > 7) # Esto es falso porqué son iguales

# < (menor qué...)
print(5 < 6) # Esto es verdadero
print(6 < 5) # Esto es falso
print(5 < 5) # Esto es falso porqué son iguales

# >= (mayor o igual qué...)
print(2 >= 1) # Esto es verdadero, 2 es mayor que 1.
print(2 >= 3) # Esto es falso, el 2 es menor que el 3.
print(2 >= 2) # Esto es verdadero, ambos son iguales.

# <= (menor o igual qué...)
print(1 <= 2) # Esto es verdadero, 1 es menor que 2.
print(2 <= 1) # Esto es falso, 2 es mayor que 1.
print(1 <= 1) # Esto es verdadero, ambos son iguales.

# == (está en igualdad que...)
print(6 == 6) # Esto es verdadero
print(5 == 2) # Esto es falso, 5 no es igual que 2

# != (es diferente qué...)
print(10 != 6) # Esto es verdadero
print(6 != 6)  # Esto es falso, son iguales.

print("Apple" == 'Apple') # Verdadero, no importa si se cambia el tipo de comillas 
print("Apple" == 'apple') # Falso, porque Python detecta como diferente por la minúscula
print("1" == 1) # Falso, porque son tipos de datos diferentes, uno str y el otro int

age = 15
print(age <= 18) # Lo dejo pasar, pero la edad es menor por lo cuál, no lo paso

#Operadores de comparacion-----------------------------------
#son operaores de logica y regresan booleanos

a = 10
b = 3

print(f"igual: {a == b}") #compara si las variables son iguales
print(f"diferente: {a != b}") #compara si las variables son diferentes
print(f"mayor: {a > b}") #compara si la variable a es mayor que la variable b
print(f"menor: {a < b}") #compara si la variable a es menor que la variable b
print(f"mayor o igual: {a >= b}") #compara si la variable a es mayor o igual que la variable b
print(f"menor o igual: {a <= b}") #compara si la variable a es menor o igual que la variable b
print(f"and: {a > b and a == b}") #compara si las dos variables son verdaderas
print(f"or: {a > b or a == b}") #compara si una de las variables es verdadera