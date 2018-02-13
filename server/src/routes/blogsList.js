import express from 'express';
import Table from '../table';

const router = express.Router();
const blogsTable = new Table('blogs');
const blogsTagsTable = new Table('blogstags');

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        blogsTable.getAll()
            .then((blog) => {
                console.log(blog);
                res.send(blog);
            }).catch((err) => {
                console.log(err)
            });
        return;
    } else {
        blogsTable.getOne(id).then((blog) => {
            if (!blog || Object.keys(blog).length === 0) {
                res.sendStatus(404);
                return;
            } else {
                res.send(blog);
            }
        });
    }
});



router.post('/', (req, res) => {
    blogsTable.insert(req.body).then(() => {
        res.sendStatus(200);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;

    blogsTable.getOne(id).then((blog) => {
        console.log(blog);
        if (!blog || Object.keys(blog).length === 0) {
            res.sendStatus(404);
            return;
        }

        return blogsTable.update(id, req.body).then(() => {
            res.sendStatus(200);
        });
    });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;

    blogsTagsTable.deleteAll({
        blogid: id
    }).then(() => {
        return blogsTable.delete(id);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;








