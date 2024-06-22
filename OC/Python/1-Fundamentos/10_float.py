x = 3.3
print(x)
y = 1.1 + 2.2 # es igual a 3.30000000000000005
print(y)
print(x == y) # por lo cuál va a dar falso

# Primera forma (NO matemática)
y_str = format(y, ".2g") # ".2g" significa dos dígitos 
print('str ', y_str)
print(y_str == str(x))
# Se debe de poner el string de x ya que si no y_str seria una cadena de texto y x seria un int o numero entero

# Segunda forma (matemática)
print('*' * 10)
# Simplemente es una linea divisoria 

print(y, x)

tolerance = 0.00001 # Un margen de error
print(abs(x - y) < tolerance)
# creamos un margen de tolerancia donde si se resta y a x y el resultado es menor a la tolerancia es verdadero, si no es falso
# 3.3 - 3.3000000000000003 = cuyo resultado es menor a la tolerancia por lo cual es verdadero 

""" formas de comparar floats """
x = 7.7
print("x =", x)

y = 3.4 + 4.3
print("y = 3.4 + 4.3 =", y)

print(f"x == y: {x == y}")

# Haciendo uso de strings
print("*" * 35)
print("Haciendo uso de strings")
print("x =", x)
y_str = format(y, ".2g")
print("y_str =", y_str)
print(f"x == y: {str(x) == y_str}")

# Comparando por margen de error
print("*" * 35)
print("Comparando por margen de error")
print("x =", x)
print("y =", y)
error = 0.001
print(f"x == y, considerando un margen de error de {error} : {abs(x - y) < error}")