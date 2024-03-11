const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ _id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(201).json({ message: 'User created successfully', user, token });
    } catch (err) {
        console.log('Failed to create a user', err.message);
        res.status(500).json({ message: 'Failed to create a user', error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email });

        if(!user || !await bcrypt.compare(password, user.password)){
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ _id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ message: 'User logged in successfully', token })

    } catch (err) {
        console.log('Failed to log in', err.message);
        res.status(500).json({ message: 'Failed to log in' });
    }
}
