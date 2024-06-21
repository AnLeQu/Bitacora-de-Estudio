name = "Andrés"
last_name = "León Quesada"
my_age = 24
print(name)
print(last_name)
print(my_age)

full_name = name + " " + last_name
print(full_name)

quote = "I'm Andrés"
print(quote)

quote2 = 'She said "Hello"'
print(quote2)

# format
template = "Hola mi nombre es " + name + " y mis apellidos son " + last_name
print('v1', template)

template = "Hola mi nombre es {} y mis apellidos son {}".format(name, last_name)
print('v2', template)

template = f"Hola mi nombre es {name} y mis apellidos son {last_name}"
print('v3', template)

template = f"Hola mi nombre es {name}, mis apellidos son {last_name} y mi edad es {my_age}"
print('v4', template)