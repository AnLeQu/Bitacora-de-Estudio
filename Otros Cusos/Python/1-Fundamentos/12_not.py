# negación de operaciones
print('NOT AND')
print( " not True and True  =>", not (True and True))
print( " not True and False =>", not(True and False))
print( " not False and True  =>", not(False and True))
print( " not False and False  =>", not(False and False))

#Ejemplo practico
stock = input ('Ingrese el numero de stock:')
stock = int(stock)
print(not(stock  >= 100 and stock  <= 1000))
""" not """
print("not True =", not True)
print("not False =", not False)

# Examples
print("-" * 35)
print("Examples")
print("13 <= 18 and not (34 > 18): ", 13 <= 18 and not (34 > 18))
print("not (17 <= 18) and 12 > 23: ", not (17 <= 18) and 12 > 23)
print("2 == pez or not (2 + 2 == 4): ", 2 == 'pez' or not (2 + 2 == 4))
print("not (2 + 2 == pez) or 0 ** 0 == 1: ", not (2 + 2 == 'pez') or 0**0 == 1)