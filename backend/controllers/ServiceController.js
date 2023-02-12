const { ServiceModel, serviceSchema } = require('../models/serviceModel');

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        nome: req.body.nome,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: 'serviço criado com sucesso ' });
    } catch (erro) {
      console.log(erro);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await ServiceModel.findById(id);
      if (!service) {
        res.status(404).json({ msg: 'Serviço nao encontrado' });
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: 'Serviço nao encontrado' });
        return;
      }
      const deleteService = await ServiceModel.findByIdAndDelete(id);
      res.status(200).json({ deleteService, msg: 'serviço excluido com sucesso' });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const service = {
        nome: req.body.nome,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      if (!service) {
        res.status(404).json({ msg: 'Serviço nao encontrado' });
        return;
      }
      const updateService = await ServiceModel.findByIdAndUpdate(id, service);
      res.status(200).json({ updateService, msg: 'serviço actualizado com sucesso' });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;
