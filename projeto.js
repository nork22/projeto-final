const router = require ('express').Router();

const { cl} = require('../../db'); //Modelo de BD usado na exportação

        /* Nosso CRUD */

router.get('/:clId', async (req, res) => {
    const cl = await cl.findOne({
   where:{Id: req. params.clId }
});
    res. json (cl)
});

router.post('/', async (req, res) => {
    const cli = await cl.create(req.body)
    res.json(cl);
});

router.put('/:clId', async (req, res) => {
    await cl.update(req.body, {
        where: { id: req.params.clId }
    });
    res.json({success: 'Dado Atualizado com Sucesso!' })
});

router.delete('/:profId', async (req, res) => {
    await Prof.destroy({
        where: { id: req.params.clId }
    });
    res.json({success: 'Dado apagados com Sucesso!' })
});

module.exports = router; 