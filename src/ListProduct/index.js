const shortid = require('shortid');

const ListProduct = [
    {
        _id:shortid.generate(),
        name:'aplus automation',
        price:'12',
        thumb:'https://shopping-cart-demo-v2.herokuapp.com/dist/images/aplusautomation.jpg',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet quisquam, rem sapiente reprehenderit illo saepe nihil quas ex, praesentium voluptatum amet! Impedit, sapiente odit. Cumque beatae delectus qui? Architecto.',
        avaiable:true,
    },{
        _id:shortid.generate(),
        name:'aplus media',
        price:'22',
        thumb:'https://shopping-cart-demo-v2.herokuapp.com/dist/images/aplus-media.jpg',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet quisquam, rem sapiente reprehenderit illo saepe nihil quas ex, praesentium voluptatum amet! Impedit, sapiente odit. Cumque beatae delectus qui? Architecto.',
        avaiable:true,
    },{
        _id:shortid.generate(),
        name:'robo fig combo',
        price:'5',
        thumb:'https://shopping-cart-demo-v2.herokuapp.com/dist/images/robo_fig_combo.jpg',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet quisquam, rem sapiente reprehenderit illo saepe nihil quas ex, praesentium voluptatum amet! Impedit, sapiente odit. Cumque beatae delectus qui? Architecto.',
        avaiable:true,
    },{
        _id:shortid.generate(),
        name:'target leap frog',
        price:'8',
        thumb:'https://shopping-cart-demo-v2.herokuapp.com/dist/images/target-leap-frog.jpg',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet quisquam, rem sapiente reprehenderit illo saepe nihil quas ex, praesentium voluptatum amet! Impedit, sapiente odit. Cumque beatae delectus qui? Architecto.',
        avaiable:false,
    },
    
]

export default ListProduct