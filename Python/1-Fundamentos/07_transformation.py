name = "Nicolas"
print(type(name))
name = 12
print(type(name))
name = True
print(type(name))

print("Nicolas" + " Molina")
print(10 +20)
print("Nicolas" + "12")
# De ser print("Nicolas" + 12) saldria un error porque no reconoce que hacer ya que son dos tipos de datos diferentes, ya que el primero es str y el segundo es int. 

age = 12
print("Mi edad es: " + str(age))
print(f"Hola, mi edad es: {age}")

age = input("Escribe tu edad: ")
print(type(age))
print(f'Tu edad en 10 años será {int(age) + 10}')