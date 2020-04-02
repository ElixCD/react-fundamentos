
const user1 = {
    name: 'Elix',
    username: 'user1',
    country: 'México',
    social: {
        facebook: 'https://fb...',
        twitter: 'https://tw...'
    }
}

const saluda = (user) => {

    const orden = ['pizza','te verde', 'pay', 124, false, 'otro']
    //la posicion de la constante corresponde a la posicion del array orden
    const [comida, bebida, postre, ...restantes] = orden 
    
    //comida = orden[0]
    //bebida = orden[1]

    console.log(restantes)

    const {name, social} = user
    const {twitter} = social

    console.log(
        `Hola soy ${name}, mi twitter es ${twitter}`
    )
}

saluda(user1)