
class GenericsService {
  constructor(){}

  async create(data){
    return data;
  }

  async find(){
    return '';
  }

  async findOne(id) {
    return { id };
  }

  async update(id) {
    return { id };
  }
  
  async delete(id) {
    return { id };
  }

}

module.exports = GenericsService;