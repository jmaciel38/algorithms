name = 'Carolina Correia de Souza'
print('Bem vindo a Lanchonete de {}'.format(name))
menu = ' Cardapio '.center(40, '*')+'\n'
menu += '|'+'Codigo'.center(8, ' ')+'|'+'Descricao'.center(24, ' ')+'|'+'Valor'.center(8, ' ')+'|\n'
menu += '|'+'100'.center(8, ' ')+'|'+'Cachorro Quente'.center(24, ' ')+'|'+'9,00'.center(8, ' ')+'|\n'
menu += '|'+'101'.center(8, ' ')+'|'+'Cachorro Quente duplo'.center(24, ' ')+'|'+'11,00'.center(8, ' ')+'|\n'
menu += '|'+'102'.center(8, ' ')+'|'+'X-Egg'.center(24, ' ')+'|'+'8,00'.center(8, ' ')+'|\n'
menu += '|'+'103'.center(8, ' ')+'|'+'X-Salada'.center(24, ' ')+'|'+'8,00'.center(8, ' ')+'|\n'
menu += '|'+'104'.center(8, ' ')+'|'+'X-Bacon'.center(24, ' ')+'|'+'14,00'.center(8, ' ')+'|\n'
menu += '|'+'105'.center(8, ' ')+'|'+'X-Tudo'.center(24, ' ')+'|'+'17,00'.center(8, ' ')+'|\n'
menu += '|'+'200'.center(8, ' ')+'|'+'Refrigerante lata'.center(24, ' ')+'|'+'5,00'.center(8, ' ')+'|\n'
menu += '|'+'201'.center(8, ' ')+'|'+'Cha gelado'.center(24, ' ')+'|'+'4,00'.center(8, ' ')+'|\n'

print(menu)
continuar = 1
total = 0
while continuar == 1:
    choice = input('Entre com o codigo do produto desejado:')
    if choice == 100:
        total += 9.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 101:
        total += 11.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 102:
        total += 12.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 103:
        total += 12.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 104:
        total += 14.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 105:
        total += 17.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 200:
        total += 5.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    elif choice == 201:
        total += 4.00
        continuar = int( input('Deseja pedir mais alguma coisa: \n 1 - sim \n 0 - nao \n >> ') )
        if continuar == 0:
            break
    else:
        print('Opcao invalida')
        continue
print('O total a ser pago e: R$ {:.2f} '.format(total))