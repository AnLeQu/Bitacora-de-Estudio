# AND - TODAS las operaciones deben ser True, para obtener True
print('#'*5,' AND ', '#'*5)
print('AND')
print('True and True => ', True and True)
print('True and False => ', True and False)
print('False and True => ', False and True)
print('False and False => ', False and False)

print(10 > 5 and 5 < 10)
print(10 > 5 and 5 > 10)

print("-"*10)

stock = input('Ingrese el número de stock => ')
stock = int(stock)

print(stock >= 100 and stock <= 1000)

print('')
print('#'*5,' OR ', '#'*5)

# OR - Al menos una de las operaciones debe ser True, para obtener True
print('OR')
print('True or True => ', True or True)
print('True or False => ', True or False)
print('False or True => ', False or True)
print('False or False => ', False or False)

role = input('Digita el rol => ')

print(role == 'Admin' or role == 'Seller')