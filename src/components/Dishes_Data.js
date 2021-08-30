const mainDishes = [
    {
        imgSrc: 'assets/img/frango_yin_yang.png',
        imgAlt: 'frango_yin_yang',
        dishTitle: 'Frango Yin Yang',
        dishDescription: 'Um pouco de batata, um pouco de salada',
        dishPrice: 'R$ 14,90'
    },
    {
        imgSrc: 'assets/img/feijoada.jpg',
        imgAlt: 'feijoada',
        dishTitle: 'Feijoada',
        dishDescription: 'Bela feijoada de feijão!',
        dishPrice: 'R$ 19,90'
    },
    {
        imgSrc: 'assets/img/filet-mignon-a-parmegiana.jpg',
        imgAlt: 'filet-mignon-a-parmegiana',
        dishTitle: 'Filet Parmegiana',
        dishDescription: 'Delícia de Filet Mignon a parmegiana',
        dishPrice: 'R$ 24,90'
    }
]

const drinks = [
    {
        imgSrc: 'assets/img/coquinha_gelada.png',
        imgAlt: 'coquinha_gelada',
        dishTitle: 'Coquinha gelada',
        dishDescription: 'Lata 350ml',
        dishPrice: 'R$ 4,90'
    },
    {
        imgSrc: 'assets/img/del-valle-lata.jpg',
        imgAlt: 'del-valle-lata',
        dishTitle: 'Suco Del Valle',
        dishDescription: 'Lata 390ml',
        dishPrice: 'R$ 7,90'
    },
    {
        imgSrc: 'assets/img/agua-prata.jpg',
        imgAlt: 'agua-prata',
        dishTitle: 'Água Mineral',
        dishDescription: 'Sem Gás 310ml',
        dishPrice: 'R$ 2,90'
    }
]

const desserts = [
    {
        imgSrc: 'assets/img/pudim.png',
        imgAlt: 'pudim',
        dishTitle: 'Pudim',
        dishDescription: 'Apenas pudim',
        dishPrice: 'R$ 7,90'
    },
    {
        imgSrc: 'assets/img/bolo de chocolate.jpg',
        imgAlt: 'bolo_de_chocolate',
        dishTitle: 'Bolo de Chocolate',
        dishDescription: 'Fatia de um bolo de chocolate',
        dishPrice: 'R$ 5,90'
    },
    {
        imgSrc: 'assets/img/açai.jpg',
        imgAlt: 'açai',
        dishTitle: 'Açai',
        dishDescription: 'Bela taça de Açai',
        dishPrice: 'R$ 14,90'
    }
]

export const categoriesData = [
    {
        categoriesTitle: 'Primeiro, seu prato',
        dishesData: mainDishes
    },
    {
        categoriesTitle: 'Agora, sua bebida',
        dishesData: drinks
    },
    {
        categoriesTitle: 'Por fim, sua sobremesa',
        dishesData: desserts
    }
]