name = 'Carolina Correia de Souza'

print('Bem vindo a loja de {}'.format(name))
val = input('Entre com o valor do produto: ')
qtd = input('Entre com o valor da quantidade: ')

desc1 = 0.05
desc2 = 0.1
desc3 = 0.15
val_sem_disc = val * qtd
descDado = 0

if qtd >= 10 and qtd < 100:
    val_com_desc = val_sem_disc - (val_sem_disc * desc1)
    descDado = desc1
elif qtd >= 100 and qtd < 1000:
    val_com_desc = val_sem_disc - (val_sem_disc * desc2)
    descDado = desc2
elif qtd >= 1000:
    val_com_desc = val_sem_disc - (val_sem_disc * desc3)
    descDado = desc3

print('O valor sem desconto foi: R$ {:.2f}'.format(val_sem_disc))
if descDado > 0:
    print('O valor com desconto foi: R$ {:.2f} (desconto {:.0f}%)'
        .format(val_com_desc, (descDado * 100)))