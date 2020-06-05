import multer from 'multer';
import path from 'path';
import crytop from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const Hash = crytop.randomBytes(6).toString('hex');

            const filename = `${Hash}-${file.originalname}`;

            callback(null, filename);
        }
    })
}