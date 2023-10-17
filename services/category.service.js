const { faker } = require('@faker-js/faker');

class categoryService {
  constructor(){
    this.category = [];
    this.generate();
  }
  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.category.push({
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        product: {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          img: faker.image.url(),
        }
      })
    }
  }
  create(data){
    const newcategory = {
      id: faker.string.uuid(),
      ...data
    }
    this.category.push(newcategory);
    return newcategory;
  }
  find(){
    return this.category;
  }
  findOne(id){
    return this.category.find(item => item.id === id);
  }
  update(id){}
  delete(){}
}
module.exports = categoryService;
