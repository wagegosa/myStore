const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class productsService {
  constructor(){
    this.products = [];
    this.generate();
  }
  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      })
    })
  }
  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }
  async update(id, changes){
    // obtenemos la psoición
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('producto no encontrado');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ... product,
        ...changes
      };
      return this.products[index];
    }
  }
  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('producto no encontrado');
    }
    this.products.splice(index, 1);
    return { id };
  }
}
module.exports = productsService;
