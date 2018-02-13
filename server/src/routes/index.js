import { Router } from 'express';
import blogRouter from './blogsList';

let router = Router();

router.use('/blogs', blogRouter);

export default router;