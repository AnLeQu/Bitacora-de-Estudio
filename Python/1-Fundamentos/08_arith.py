print(10 + 20)
print(10 - 5)
print(10 * 2)
print(10 / 2) # =5 no hay residuo porque 5x2 el contrario a la division =10
print(10 % 2) # =0 por lo tanro no hay residuo aquí
print(10 / 3) # se divide da 3.333.... 3x3=9  No es una división exacta
print(10 % 3) # =1 porque el numero mas cercano al 10 al dividirse en 3 es 9 = 3x3 
print(10 // 3) # nos quedamos solamente con el numero entero de la división que queremos
print(10 ** 3) # el ** significa el número elevado, = diez elevado a la tres

# Operación más compleja, ejemplo:
print(2 ** 3 + 3 - 7 / 1 // 4)

"""
Aquí se debe recordar cuál es el orden que se ejecuta y se preoriza las ecuaciones
P- Parentesis
E- Exponentes 
M- Multiplicación 
D- División 
S- Sumas 
R- Restas 
"""

# Python resuelve de esta manera 2 ** 3 + 3 - 7 / 1 // 4, según lo anteriormente visto:
print(2 * 3)
print((7 / 1) // 4)
print(8 + 3 - 1) 
# el 8 sale de la primera ecuación y el 1 de la segunda + la suma del 3 qué faltaba

# (10 / 0) no existe = 0 y para Python = error

print("Hola" + " " + "mundo")
print("Hola mundo. " * 3)

a = 10
b = 3

print(f"suma: {a + b}") #suma de variables
print(f"resta: {a - b}") #resta de variables
print(f"multiplicacion: {a * b}") #multiplicacion de variables
print(f"division: {a / b}") #division de variables
print(f"division entera: {a // b}") #no regresa el residuo de la division, solo regresa el numero entero
print(f"modulo: {a % b}") #residuo de la division de variables
print(f"exponente: {a ** b}") #exponente de variables

print(f"Jerarquiaa: {a ** b + b - (a ** a / b) // a}") #el orden de las operaciones es el mismo que en matematicas