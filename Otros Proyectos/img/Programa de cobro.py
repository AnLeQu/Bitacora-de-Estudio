def main():
    opciones = {
        1: "Dibujo",
        2: "Pintura",
        3: "Master Copy",
        4: "Encargo especial",
        5: "Digital",
    }

    print("Seleccione una opción:")
    for key, value in opciones.items():
        print(f"{key}: {value}")

    eleccion = int(input("Ingrese el número de su elección: "))

    if eleccion == 1:
        seleccion_dibujo()
    elif eleccion == 2:
        seleccion_pintura()
    else:
        print(f"Ha seleccionado {opciones[eleccion]}")

def seleccion_dibujo():
    print("Actualmente solo manejamos el tamaño carta para el dibujo.")
    print("Si está interesado en otras medidas específicas, podemos averiguar sobre ellas sin cotización.")
    print("También puede regresar a las opciones iniciales para ver si alguna de ellas se ajusta mejor a lo que busca.")

    # Se proporciona la opción de regresar
    print("1: Regresar a las opciones iniciales")
    print("2: Continuar con el tamaño carta")

    eleccion = int(input("Ingrese el número de su elección: "))

    if eleccion == 1:
        main()
    elif eleccion == 2:
        # Tamaño carta en cm (por ejemplo, 21x29.7 cm)
        ancho = 21
        alto = 29.7
        area = ancho * alto
        CostoLino = 2000
        CostoLapicero = 1000
        CostoTrabajo = area * 20
        IVA = 0.13

        costo_total = CostoLino + CostoLapicero + CostoTrabajo + ((CostoLino + CostoLapicero + CostoTrabajo) * IVA)

        print(f"Costo del dibujo en tamaño carta: {costo_total} CRC")
    else:
        print("Opción no válida. Regresando a las opciones iniciales.")
        main()

def seleccion_pintura():
    opciones_pintura = {
        1: ("Blanco y Negro", "Descripción blanco y negro", "imagen_bn.jpg"),
        2: ("A Color", "Descripción a color", "imagen_color.jpg"),
        3: ("Mastercopy", "Descripción mastercopy", "imagen_mastercopy.jpg"),
        4: ("Encargo", "Descripción encargo", "imagen_encargo.jpg")
    }

    print("Seleccione el tipo de pintura:")
    for key, value in opciones_pintura.items():
        print(f"{key}: {value[0]} - {value[1]} (Imagen: {value[2]})")

    eleccion = int(input("Ingrese el número de su elección: "))
    tipo_pintura = opciones_pintura[eleccion][0]
    print(f"Ha seleccionado {tipo_pintura}")

    elegir_lienzo(tipo_pintura)

def elegir_lienzo(tipo_pintura):
    print("Seleccione el tipo de lienzo:")
    print("1: Lienzo con bastidor (soporte de madera)")
    print("2: Solo tela (más económico)")

    eleccion = int(input("Ingrese el número de su elección: "))

    if eleccion == 1:
        costo_lienzo = 10000
        tipo_lienzo = "Lienzo con bastidor"
    elif eleccion == 2:
        costo_lienzo = 3000  # Lienzo sin bastidor con un 70% de descuento
        tipo_lienzo = "Solo tela"
    else:
        print("Opción no válida. Usando lienzo con bastidor por defecto.")
        costo_lienzo = 10000
        tipo_lienzo = "Lienzo con bastidor"

    print(f"Has seleccionado {tipo_lienzo}.")
    calcular_precio_total_pintura(tipo_pintura, tipo_lienzo)

def calcular_precio_total_pintura(tipo_pintura, tipo_lienzo):
    print("Ingrese las dimensiones de la pintura:")
    ancho = float(input("Ancho (cm): "))
    alto = float(input("Alto (cm): "))

    area = ancho * alto
    CostoPintura = 4000
    CostoPinceles = 5000
    CostoGesso = 11400
    CostoBarniz = 9750
    CostoTrabajo = area * 20

    if tipo_lienzo == "Solo tela":
        CostoLienzo = 3000
    else:
        CostoLienzo = 10000

    if tipo_pintura == "Blanco y Negro":
        num_pinturas = 3
    elif tipo_pintura == "A Color":
        num_pinturas = 7
    else:
        num_pinturas = 0

    costo_total_pinturas = num_pinturas * CostoPintura

    if area <= 616:
        categoria = "pequeño"
        costo_total_pinturas *= 0.25
        CostoGesso *= 0.15
        CostoBarniz *= 0.15
    elif area > 616 and area <= 1200:
        categoria = "mediano"
        costo_total_pinturas *= 0.50
        CostoGesso *= 0.30
        CostoBarniz *= 0.30
    elif area > 1200 and area <= 2400:
        categoria = "grande"
        costo_total_pinturas *= 1.00
        CostoGesso *= 0.50
        CostoBarniz *= 0.50
    else:
        categoria = "muy grande"
        costo_total_pinturas = 13000
        CostoGesso *= 0.75
        CostoBarniz *= 0.75

    costo_total = costo_total_pinturas + CostoLienzo + CostoGesso + CostoBarniz + CostoPinceles + CostoTrabajo

    print(f"Categoría de la pintura: {categoria}")
    print(f"Costo de la pintura ({tipo_pintura}): {costo_total_pinturas} CRC")
    print(f"Costo de los pinceles: {CostoPinceles} CRC")
    print(f"Costo del lienzo: {CostoLienzo} CRC")
    print(f"Costo del trabajo: {CostoTrabajo} CRC")
    print(f"Costo del gesso: {CostoGesso} CRC")
    print(f"Costo del barniz: {CostoBarniz} CRC")
    print(f"Costo total: {costo_total} CRC")

if __name__ == "__main__":
    main()

