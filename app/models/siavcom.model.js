
// Crea la tabla y genera todas sus funciones basicas de llamado (es llamado desde el index)

/*
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new Tutorial: create(object)
find a Tutorial by id: findByPk(id)
get all Tutorials: findAll()
update a Tutorial by id: update(data, where: { id: id })
remove a Tutorial: destroy(where: { id: id })
remove all Tutorials: destroy(where: {})
find all Tutorials by title: findAll({ where: { title: ... } })
These functions will be used in our Controller.



module.exports = (sequelize, Sequelize) => {
    const Siavcom = sequelize.define("siavcom", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Siavcom;
  };

  */