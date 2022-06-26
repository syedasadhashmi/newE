const initialState = {
  shoes: [
    {
      id: 1,
      stock: 3,
      name: 'Casual',
      price: 10,
      quantity: 1,
      img: 'img1',
      cart: false,
      desc: 'Casual Shoes: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, dolor? Corporis, deserunt voluptatum delectus vel possimus ad vero deleniti. Voluptatibus veritatis, blanditiis ullam repudiandae dolorum corporis esse voluptate repellat officia laborum ex necessitatibus cumque reiciendis magni nostrum dolor nobis quaerat molestiae perferendis, laudantium itaque repellendus saepe! Fugiat voluptatibus est molestias.',
    },
    {
      id: 2,
      stock: 1,
      name: 'Running',
      quantity: 1,
      price: 51,
      img: 'img2',
      cart: false,
      desc: 'Running Shoes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia quidem repellendus inventore porro iste sint est culpa atque maxime eum voluptatibus cupiditate dicta, hic unde sequi, magnam, asperiores fugiat at. Laboriosam, non? Quia assumenda dolore qui sed quos, dolores ipsa laudantium voluptate, velit dolorem ex facilis, obcaecati reiciendis quas!',
    },
    {
      id: 3,
      stock: 2,
      quantity: 1,
      name: 'Sports',
      price: 16,
      img: 'img3',
      cart: false,
      desc: 'Sports Sneakers Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea vel veritatis velit libero provident possimus sit corporis ullam cumque aut minus aspernatur nisi inventore suscipit ab, iure placeat! Nemo, ab cumque itaque voluptate est, explicabo harum vitae rem voluptatibus dolorem facere praesentium tenetur. Voluptates fugiat voluptatem distinctio sapiente alias.',
    },
    {
      id: 4,
      stock: 10,
      quantity: 1,
      name: 'Lawsuit',
      price: 18,
      img: 'img4',
      cart: false,
      desc: 'Lawsuit Shoes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum quas id doloribus dolorem harum dicta laboriosam recusandae tempore fugit nisi, pariatur soluta quia ad, labore eligendi aut ut. Possimus officiis, quae delectus quisquam excepturi consequuntur illo ea. Vero nihil qui at doloremque eos, veritatis excepturi iusto officiis cum placeat.',
    },
    {
      id: 5,
      stock: 5,
      quantity: 11,
      name: 'Caterpillar',
      price: 15,
      img: 'img5',
      cart: false,
      desc: 'Caterpillar Shoes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti officia architecto quidem hic sit dolore sequi perspiciatis, adipisci doloribus sapiente laudantium odio repellendus fugit minus, error magni! Saepe minima ipsam facere laborum maxime incidunt rem, delectus porro eos nisi? Architecto, assumenda accusantium. Maxime quasi quos quae voluptatibus at debitis!',
    },
    {
      id: 6,
      stock: 4,
      quantity: 1,
      name: 'Badminton',
      price: 12,
      img: 'img6',
      cart: false,
      desc: ' Badminton Shoes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis ducimus quae autem hic et nulla exercitationem eveniet aperiam accusantium laudantium nostrum labore veniam dolorum vitae in, sint molestias consequuntur inventore. Perspiciatis iste commodi quaerat aspernatur. Corporis, ad exercitationem? Earum itaque doloribus voluptates mollitia laborum temporibus harum quos blanditiis dolor.',
    },
    {
      id: 7,
      stock: 8,
      quantity: 1,
      name: 'Old Sports',
      price: 100,
      img: 'img7',
      cart: false,
      desc: 'Old Sports: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est inventore vel deserunt voluptatibus aut reprehenderit magnam minus, autem iste quam accusamus molestias alias hic fugiat. Dignissimos, iusto! Quaerat dignissimos necessitatibus temporibus aspernatur corporis impedit similique itaque ducimus ipsam doloribus, sint odit pariatur animi repellat fugit reiciendis, aperiam eveniet aliquam quisquam.',
    },
    {
      id: 8,
      stock: 0,
      quantity: 1,
      name: 'New Sports',
      price: 11,
      img: 'img8',
      cart: false,
      desc: 'NewSports Shoes: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae itaque quo ex necessitatibus, incidunt aliquam ad dolorem provident ab nulla, magnam blanditiis autem illo consequuntur, molestiae aut adipisci expedita? Consequatur cupiditate excepturi aliquid sunt ipsam. Optio itaque, beatae explicabo cumque consectetur aliquid perspiciatis fuga odio dignissimos rem voluptate repellendus quisquam!',
    },
  ],
  details: {},
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAILS':
      return {
        ...state,
        details: state.shoes.find(
          (detail) => detail.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};
export default productReducer;
