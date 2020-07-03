import express from 'express';
import User from '../Model/userModel';

const router = express.Router();

router.post('/signing', async (req, res) => {

    const signinUser = await User.findOne({
        email: re.body.email,
        password: req.body.password,
    });
    if(signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(user)
        })
    } else {
        res.status(401).send({ msg: 'Invalid email or password'})
    }

})

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
            name: 'Mark',
            email: 'markmesina69@gmail.com',
            password: '1234',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(user);
        
    } catch (error) {
        res.send({ msg: error.message });
        
    }
});

export default router;