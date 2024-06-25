"""
Tipos Booleanos 
 True y False - La rimera siempre en mayúscula
"""

print(bool(True), bool(False), bool(None))
print(bool(0), bool(-1), bool('casa'), bool(24), bool(' '))

"""
Algunos ejemplos de objetos evaluados como falsos son:
- Las constantes None y False
- Cualquier cadena vacía o con solo espacios: '', "", (), [], {}, dic(), set(), range(0)
- Cualquier valor numerico igual a 0: 0, 0.0, 0.j
"""

print(bool(0.0), bool(0.j))
print(True + True)
is_single = True
print(type(is_single))

is_single = False
print(type(is_single))

print(not True)
print(not False)

is_single = not is_single
print(is_single)







print(bool("andres")) 
print(10 == 10) 
print(15 > 4)

a = bool(15 + 5)
print(type(a))