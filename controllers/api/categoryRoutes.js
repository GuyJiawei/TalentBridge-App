const router = require('express').Router();
const { Category, Jobs, User } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
    // find all categories
    // include its associated jobs
    try {
        const categoryData = await Category.findAll(
            {
                include: [{ model: Jobs }]
            }


        );

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    //  include its associated jobs
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            // JOIN with 
            include: [{ model: Jobs }],
        });

        if (!categoryData) {
            res.status(404).json({ message: 'No Category found with this id!' });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new category
    try {
        const categoryData = await Category.create({
            category_name: req.body.category_name,
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
        const categoryData = await Category.update({ category_name: req.body.category_name }, {
            where: {
                id: req.params.id,
            }
        });

        if (!categoryData) {
            res.status(404).json({ message: 'No Category found with that id!' });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!categoryData) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;